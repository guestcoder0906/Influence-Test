
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { InfluenceTypeId, Question, Result } from './types';
import { ALL_QUESTIONS, INFLUENCE_TYPES, ANSWER_OPTIONS } from './constants';

// For using html2canvas from CDN
declare var html2canvas: any;

// Helper to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// --- Helper function to calculate results from a given set of answers ---
const calculateResultsFromAnswers = (
    finalAnswers: Record<number, number>,
    allQuestions: Question[]
): Result[] => {
    const scores: Record<InfluenceTypeId, number> = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

    allQuestions.forEach((q) => {
        const score = finalAnswers[q.id];
        if (score !== undefined) {
            scores[q.typeId] += score;
        }
    });

    const scoresArray = Object.values(scores);
    const maxScore = Math.max(...scoresArray);

    if (maxScore <= 0 && Object.keys(finalAnswers).length > 0) {
        return [];
    }

    const winningTypeIds = (Object.keys(scores) as InfluenceTypeId[]).filter(
        (typeId) => scores[typeId] === maxScore
    );

    const calculatedResults = winningTypeIds
        .map(typeId => {
            const typeInfo = INFLUENCE_TYPES.find(info => info.id === typeId);
            if (!typeInfo) return null;

            const relevantQuestions = allQuestions.filter(q => q.typeId === typeId);
            const answeredStrengths = relevantQuestions
                .filter(q => finalAnswers[q.id] > 0 && typeInfo.strengths.includes(q.text))
                .map(q => q.text);

            const answeredWeaknesses = relevantQuestions
                .filter(q => finalAnswers[q.id] > 0 && typeInfo.weaknesses.includes(q.text))
                .map(q => q.text);

            return {
                ...typeInfo,
                score: scores[typeId],
                strengths: answeredStrengths.length > 0 ? answeredStrengths : ["You have a balanced approach in this area."],
                weaknesses: answeredWeaknesses.length > 0 ? answeredWeaknesses : ["You showed balance in this area's potential pitfalls."]
            };
        })
        .filter((result): result is Result => result !== null)
        .sort((a, b) => b.score - a.score);

    return calculatedResults;
};


// --- Sub-components defined outside the main component ---

interface ProgressBarProps {
  current: number;
  total: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => (
  <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
    <div
      className="bg-cyan-500 h-4 rounded-full transition-all duration-300 ease-in-out"
      style={{ width: `${(current / total) * 100}%` }}
    ></div>
  </div>
);

interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
  selectedScore: number | undefined;
}
const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, selectedScore }) => {
  const [showExample, setShowExample] = useState(false);

  // Reset example visibility when the question changes
  useEffect(() => {
    setShowExample(false);
  }, [question]);

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-3xl text-center">
      <div className="flex items-start justify-center gap-2 mb-6 min-h-[64px]">
        <p className="text-2xl font-semibold text-gray-200 text-center flex-grow self-center">{question.text}</p>
        {question.example && (
          <button
            onClick={() => setShowExample(!showExample)}
            className="flex-shrink-0 w-7 h-7 mt-1 rounded-full bg-gray-600 hover:bg-gray-500 text-white font-bold text-lg flex items-center justify-center transition-colors"
            aria-label="Show example"
            aria-expanded={showExample}
          >
            ?
          </button>
        )}
      </div>
      
      {showExample && question.example && (
        <div className="mb-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
          <p className="text-gray-300 italic text-left"><span className="font-semibold not-italic">For example:</span> "{question.example}"</p>
        </div>
      )}

      <div className="relative w-full max-w-2xl mx-auto mt-12 mb-4">
        {/* Clickable Segmented Bar */}
        <div
          className="flex rounded-full overflow-hidden h-8"
          role="group"
          aria-label="Select your answer"
        >
          {ANSWER_OPTIONS.map((option) => {
            const isSelected = selectedScore === option.score;
            return (
              <button
                key={option.score}
                onClick={() => onAnswer(option.score)}
                style={{ backgroundColor: option.hex }}
                className={`
                  flex-1 transition-all duration-200 ease-in-out
                  focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:z-10
                  ${isSelected ? 'ring-4 ring-white ring-inset' : 'hover:brightness-125'}
                `}
                aria-pressed={isSelected}
                aria-label={option.text}
              />
            );
          })}
        </div>

        {/* Labels underneath the bar */}
        <div className="relative flex justify-between items-start w-full mt-3 px-1">
          {ANSWER_OPTIONS.map((option) => (
            <div key={option.score} className="flex flex-col items-center gap-1 text-center" style={{ width: '14%' /* Approx 1/7th */ }}>
              <span className="text-sm font-bold text-gray-200">{option.score > 0 ? `+${option.score}` : option.score}</span>
              <span className="text-xs text-gray-400">{option.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


interface ResultCardProps {
  result: Result;
}
const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className={`border-2 rounded-lg p-6 w-full text-left ${result.color}`}>
      <div className="flex items-center mb-4">
        <result.icon className={`w-16 h-16 mr-4 flex-shrink-0 ${result.textColor}`} />
        <div>
          <h2 className={`text-3xl font-bold ${result.textColor}`}>Type {result.id}: {result.name}</h2>
          <p className="text-gray-300">{result.title}</p>
        </div>
      </div>
      <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">{result.longDescription}</p>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className={`text-xl font-semibold mb-2 ${result.textColor}`}>Key Strengths</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {result.strengths.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className={`text-xl font-semibold mb-2 ${result.textColor}`}>Potential Blindspots</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {result.weaknesses.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        
        <div>
            <h3 className={`text-xl font-semibold mb-2 ${result.textColor}`}>In Relationships</h3>
            <p className="text-gray-300">{result.friendships}</p>
        </div>
        <div>
            <h3 className={`text-xl font-semibold mb-2 ${result.textColor}`}>You Might Agree...</h3>
            <p className="text-gray-300 italic">"{result.examples}"</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

function App() {
  const [gameState, setGameState] = useState<'home' | 'quiz' | 'results'>('home');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<Result[]>([]);
  const [isSavingImage, setIsSavingImage] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleStartQuiz = useCallback(() => {
    setShuffledQuestions(shuffleArray(ALL_QUESTIONS));
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults([]);
    setGameState('quiz');
  }, []);

  const handleFinishQuiz = useCallback((finalAnswers: Record<number, number>) => {
      const finalResults = calculateResultsFromAnswers(finalAnswers, ALL_QUESTIONS);
      setResults(finalResults);
      setGameState('results');
  }, []);

  const handleAnswer = useCallback((score: number) => {
    const questionId = shuffledQuestions[currentQuestionIndex].id;
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);

    setTimeout(() => {
      const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;
      if (isLastQuestion) {
        handleFinishQuiz(newAnswers);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 300);
  }, [answers, currentQuestionIndex, shuffledQuestions, handleFinishQuiz]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleSaveAsImage = useCallback(async () => {
    if (!resultsRef.current || !html2canvas) return;
    setIsSavingImage(true);
    try {
        const canvas = await html2canvas(resultsRef.current, {
            backgroundColor: '#111827', // Body background color
            scale: 2, // Higher resolution
            useCORS: true,
            ignoreElements: (element: HTMLElement) => element.id === 'results-actions'
        });
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'influence-profile.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Failed to save image:", error);
        alert("Sorry, there was an error saving your results as an image.");
    } finally {
        setIsSavingImage(false);
    }
  }, []);


  if (gameState === 'quiz') {
    const question = shuffledQuestions[currentQuestionIndex];
    
    return (
      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl mb-8">
          <ProgressBar current={currentQuestionIndex + 1} total={shuffledQuestions.length} />
          <p className="text-center text-gray-400">Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</p>
        </div>
        {question && <QuestionCard question={question} onAnswer={handleAnswer} selectedScore={answers[question.id]} />}
        <div className="w-full max-w-3xl mt-6 flex justify-start">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
        </div>
      </main>
    );
  }

  if (gameState === 'results') {
    return (
      <main ref={resultsRef} className="container mx-auto px-4 py-8 flex flex-col items-center min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-2 text-gray-200">Your Influence Profile</h1>
        {results.length > 0 ? (
          <>
            <p className="text-lg text-gray-400 mb-8 text-center max-w-3xl">
              {results.length > 1 ? "You have a hybrid profile, showing strong traits across multiple influence types. Here's a breakdown of your dominant styles:" : "Based on your answers, your dominant influence type is:"}
            </p>
            <div className="w-full max-w-4xl space-y-6">
              {results.map(result => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center bg-gray-800 p-8 rounded-lg shadow-2xl mt-8">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Not enough information</h2>
            <p className="text-gray-400">We couldn't determine a dominant influence type from your answers. You may have a very balanced profile, or your answers were mostly neutral. Try the test again to get a clearer result.</p>
          </div>
        )}
        <div id="results-actions" className="flex items-center gap-4 mt-12">
            <button
              onClick={handleStartQuiz}
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              Take the Test Again
            </button>
            <button
              onClick={handleSaveAsImage}
              disabled={isSavingImage}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-wait"
            >
              {isSavingImage ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Save as Image
                </>
              )}
            </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen text-center text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-100">Discover Your Influence</h1>
      <p className="text-xl md:text-2xl font-light text-cyan-300 mb-6">How do you naturally make an impact?</p>
      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10">
        Everyone leaves a mark on the world, often in ways we don't fully recognize. Whether you're leading a team, challenging ideas, or offering quiet support, your influence has a unique signature. This insightful test is designed to help you discover that personal style. By exploring how you react to different situations, you'll receive a detailed profile revealing your core strengths and how you can use them more consciously.
      </p>
      <button
        onClick={handleStartQuiz}
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
      >
        Start the Test
      </button>

      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-200">The Six Types of Influence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {INFLUENCE_TYPES.map(type => (
            <div key={type.id} className={`p-6 rounded-lg border-2 ${type.color}`}>
              <div className="flex items-center mb-3">
                <type.icon className={`w-8 h-8 mr-3 ${type.textColor}`} />
                <h3 className={`text-2xl font-bold ${type.textColor}`}>{type.name}</h3>
              </div>
              <p className="text-gray-300">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;