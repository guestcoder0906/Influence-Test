
import React from 'react';
import { InfluenceTypeId, Question, InfluenceTypeInfo, AnswerOption } from './types';

const IconA: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 10 L10 50 L42 90 Z" fill="currentColor"/>
    <path d="M58 10 L90 50 L58 90 Z" fill="currentColor"/>
    <rect x="46" y="5" width="8" height="90" fill="#111827"/>
  </svg>
);

const IconB: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L61.8 38.2 L98.1 38.2 L68.1 58.8 L79.9 91 L50 70.4 L20.1 91 L31.9 58.8 L1.9 38.2 L38.2 38.2 Z" fill="currentColor"/>
    <rect x="46" y="0" width="8" height="100" fill="#111827"/>
  </svg>
);

const IconC: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="32" height="35" fill="currentColor"/>
    <rect x="58" y="10" width="32" height="35" fill="currentColor"/>
    <rect x="10" y="55" width="32" height="35" fill="currentColor"/>
    <rect x="58" y="55" width="32" height="35" fill="currentColor"/>
    <rect x="46" y="0" width="8" height="100" fill="#111827"/>
    <rect x="0" y="47.5" width="100" height="5" fill="#111827"/>
  </svg>
);

const IconD: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L10 90 L90 90 Z" fill="currentColor"/>
    <rect x="46" y="5" width="8" height="95" fill="#111827"/>
  </svg>
);

const IconE: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 H42 V70 L26 90 L10 70 V10 Z" fill="currentColor"/>
    <path d="M58 10 H90 V70 L74 90 L58 70 V10 Z" fill="currentColor"/>
    <rect x="46" y="5" width="8" height="95" fill="#111827"/>
  </svg>
);

const IconF: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="14" fill="currentColor"/>
    <circle cx="72" cy="28" r="14" fill="currentColor"/>
    <circle cx="28" cy="72" r="14" fill="currentColor"/>
    <circle cx="72" cy="72" r="14" fill="currentColor"/>
    <rect x="28" y="24" width="44" height="8" fill="currentColor"/>
    <rect x="24" y="28" width="8" height="44" fill="currentColor"/>
    <rect x="68" y="28" width="8" height="44" fill="currentColor"/>
    <rect x="28" y="68" width="44" height="8" fill="currentColor"/>
    <rect x="46" y="0" width="8" height="100" fill="#111827"/>
  </svg>
);

interface QuestionDetail {
  text: string;
  example: string;
}

const questionsData: { typeId: InfluenceTypeId, strengths: QuestionDetail[], weaknesses: QuestionDetail[] }[] = [
  { 
    typeId: InfluenceTypeId.A, 
    strengths: [
      { text: 'I actively shape my circumstances instead of just reacting to them', example: "Instead of waiting for an opportunity, I'll create the project and team to make it happen." },
      { text: 'I\'m quick to understand the real power dynamics in any group', example: "I can quickly identify who holds the real influence in a meeting, regardless of titles." },
      { text: 'My focused energy can shift a group\'s dynamic and direction', example: "When I join a discussion, the energy shifts and people start focusing on a solution." },
      { text: 'I create systems or plans that others naturally start to follow', example: "I set up the new workflow, and now everyone follows it without question." },
      { text: 'When I enter a room, the atmosphere often shifts and people adjust their behavior', example: "When I walk into a chaotic room, things tend to quiet down and become more orderly." }
    ], 
    weaknesses: [
      { text: 'My strong self-assurance can sometimes blind me to better ideas', example: "I was so sure my plan was right that I dismissed a better idea from a teammate." },
      { text: 'I can mistake forcing my will on others for collaborative creation', example: "I thought I was building a team, but I was just telling everyone exactly what to do." },
      { text: 'Constantly pushing my agenda can leave me feeling completely drained', example: "After pushing my agenda all week, I'm too tired to do anything else." },
      { text: 'I sometimes create exclusive groups when being more collaborative would be more effective', example: "I created a very exclusive team, but now we're isolated and lack diverse input." },
      { text: 'Pushing hard for something can create unexpected pushback from others', example: "I pushed hard for a change, and now some people are quietly sabotaging it." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.B, 
    strengths: [
      { text: 'I read the emotional atmosphere of every room I enter', example: "I knew something was wrong at the party as soon as I walked in, even though everyone was smiling." },
      { text: 'My genuine nature seems to make others trust me and open up quickly', example: "People often tell me their secrets, even if we've just met." },
      { text: 'I understand the hidden language of heart and gesture', example: "I could tell by their posture, not their words, that they were hurt." },
      { text: 'People have told me they feel truly seen and heard when talking with me', example: "A friend once told me, 'I feel like you actually see me when we talk.'" },
      { text: 'I\'m good at helping people understand each other\'s feelings during conflicts', example: "I was able to explain why two friends were misunderstanding each other, helping them reconcile." }
    ], 
    weaknesses: [
      { text: 'I often absorb the emotions of people around me, leaving me feeling what they feel', example: "After talking with a sad friend, I feel drained and sad for the rest of the day." },
      { text: 'I tend to agree to things I don\'t want to do just to avoid conflict', example: "I agreed to something I didn't want to do just to avoid a conflict." },
      { text: 'A compelling, emotional story can sometimes make me overlook the hard facts', example: "I was so convinced by their tearful story that I didn't check the facts." },
      { text: 'I worry so much about how others will feel that it\'s hard to make decisions for myself', example: "I can't make a decision for myself because I'm too worried about how it will make everyone else feel." },
      { text: 'I can become so focused on helping others that I neglect my own important responsibilities', example: "I spent all weekend helping others and forgot about my own important deadline." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.C, 
    strengths: [
      { text: 'I see the hidden patterns connecting all things', example: "I noticed a link between customer complaints and a recent software update that no one else had." },
      { text: 'I enjoy finding ways to connect different ideas or systems that seem unrelated', example: "I saw how the marketing and sales databases could be combined to create better leads." },
      { text: 'In any specific problem, I can usually spot the larger, underlying principle at play', example: "This team's conflict isn't just about this project; it's a classic example of resource scarcity." },
      { text: 'I\'m good at explaining complex ideas in a way that anyone can understand', example: "I can explain the engineer's technical concerns to the design team in a way they understand." },
      { text: 'I often create models or systems to help people grasp complex topics', example: "I created a flowchart that helped everyone understand the complex approval process." }
    ], 
    weaknesses: [
      { text: 'I can spend more time perfecting a plan on paper than actually doing the work', example: "I spent weeks perfecting a project plan but we never actually started the work." },
      { text: 'My proposed solutions can be theoretically brilliant but too difficult or costly to implement', example: "My solution was theoretically perfect but would have been too expensive and slow to implement." },
      { text: 'I can become more focused on following the correct process than on achieving a great outcome', example: "I was more focused on making sure the process was followed than on whether we got a good result." },
      { text: 'I sometimes design complex systems that are too difficult for people to actually use', example: "I designed a comprehensive organizational system, but it was too complicated for anyone to use." },
      { text: 'I can spend so much time researching how to do something that I never get around to trying it', example: "I spent so much time researching the best way to learn guitar that I never actually practiced." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.D, 
    strengths: [
      { text: 'I find profound meaning in single moments', example: "That simple moment of watching the sunset felt more important than my whole week's work." },
      { text: 'I have a talent for turning routine activities into something fun and exciting', example: "A boring trip to the grocery store with me can turn into a fun adventure." },
      { text: 'I can easily switch from having a deep, serious conversation to being playful and lighthearted', example: "We can be having a deep, philosophical conversation one minute and laughing hysterically the next." },
      { text: 'I believe that proactively seeking joy is essential for a good life', example: "I believe that actively seeking out joyful experiences is essential for a well-lived life." },
      { text: 'When plans fall apart, I\'m good at improvising and coming up with a creative new approach', example: "When our plan fell apart, I was able to quickly come up with a new, better idea on the spot." }
    ], 
    weaknesses: [
      { text: 'I often operate on a different wavelength than most people', example: "While everyone else is stressed about a deadline, I'm captivated by the pattern the rain is making on the window." },
      { text: 'I prefer to disengage from heated arguments and focus on my own inner peace', example: "Instead of arguing about politics, I'd rather just go for a walk and enjoy my own thoughts." },
      { text: 'I love brainstorming new ideas but tend to lose interest when it\'s time to focus on the details', example: "I love brainstorming new ideas with people, but I get bored when it's time to work on the tedious details." },
      { text: 'I dislike rigid schedules and prefer to work when I feel inspired', example: "I hate having a rigid schedule; I do my best work when I can follow my inspiration." },
      { text: 'I\'m great at starting new and exciting projects, but I struggle to see them through to completion', example: "I have a dozen exciting projects I've started, but I haven't finished any of them." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.E, 
    strengths: [
      { text: 'I understand influence through strategic non-action', example: "By not immediately responding to a provocative email, I let the situation calm down and resolve itself." },
      { text: 'My silence speaks louder than others\' words', example: "In a heated debate, my refusal to engage made everyone else reconsider their positions." },
      { text: 'I\'m strategic about where I spend my energy, avoiding pointless tasks or arguments', example: "I don't waste time on pointless arguments, saving my energy for what truly matters." },
      { text: 'My patience outlasts others\' urgency', example: "Everyone panicked and sold their stocks, but I waited and avoided a major loss." },
      { text: 'I create impact through precise, minimal intervention', example: "A single, well-timed question from me completely changed the direction of the meeting." }
    ], 
    weaknesses: [
      { text: 'I sometimes see a problem and choose not to get involved to save energy, even if it gets worse', example: "I saw a problem but decided it wasn't worth my energy to get involved, and it got worse." },
      { text: 'I observe life from a distance too often', example: "My friends have inside jokes from adventures I chose to watch from the sidelines." },
      { text: 'I have a tendency to wait for the \'perfect moment,\' which sometimes means I don\'t act at all', example: "I keep waiting for the 'perfect moment' to start my project, but it never seems to arrive." },
      { text: 'I sometimes believe I\'m being objective when, in reality, I\'m just emotionally disconnected', example: "I thought I was being objective, but I was just emotionally disconnected from a friend who needed support." },
      { text: 'My stillness becomes stagnation', example: "I've been in the same role for years because it's comfortable, even though I'm no longer growing." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.F, 
    strengths: [
      { text: 'In chaotic situations, people look to me as a source of calm and stability', example: "During a crisis, people come to me because my calmness helps them feel steady." },
      { text: 'When I\'m part of a conversation, it often shifts toward more meaningful topics', example: "With me, conversations often turn away from trivial gossip toward more meaningful topics." },
      { text: 'People trust me because they know I\'m reliable and always keep my word', example: "People trust me because I've always followed through on my promises, year after year." },
      { text: 'I believe that anything truly worthwhile takes slow, consistent effort over a long time', example: "I'm not looking for quick fixes; I'm willing to put in the slow, consistent work to build something that lasts." },
      { text: 'My predictable and reliable nature helps create a stable environment for others to thrive', example: "My friend knows they can call me at the same time every Sunday, and that reliability has helped them through a tough time." }
    ], 
    weaknesses: [
      { text: 'I find it hard to let go of things, even when it\'s clear that it\'s time for them to end', example: "I held on to a failing project for too long because I couldn't accept it was over." },
      { text: 'I sometimes mistake my inner compass for the only true north', example: "I was so sure my way was the 'right' way that I wasn't open to a colleague's valid alternative." },
      { text: 'My comfortable routines and habits can hold me back from new experiences', example: "My daily routines are so comforting that I've turned down opportunities for new experiences." },
      { text: 'My instinct in chaotic situations is to shut down rather than look for the opportunities within them', example: "When things get unpredictable and messy, my first instinct is to shut down rather than see the opportunity." },
      { text: 'My deep roots make transplantation to new soil painful', example: "Moving to a new city was incredibly difficult for me, even though it was a great opportunity." },
      { text: 'I can get so focused on preserving old ways of doing things that I resist new, potentially better, ideas', example: "I'm so focused on preserving our old traditions that I'm resisting new ideas that could help us grow." },
      { text: 'My commitment to structure can blind me to the magic of the unplanned', example: "A spontaneous trip invitation stressed me out because it wasn't in my schedule, so I said no." }
    ] 
  },
];

const extractedText = questionsData.reduce((acc, curr) => {
    acc[curr.typeId] = {
        strengths: curr.strengths.map(s => s.text),
        weaknesses: curr.weaknesses.map(w => w.text)
    };
    return acc;
}, {} as Record<InfluenceTypeId, {strengths: string[], weaknesses: string[]}>);


export const INFLUENCE_TYPES: InfluenceTypeInfo[] = [
  { 
    id: InfluenceTypeId.A, name: 'Imposition', title: 'Influence Imposition', 
    description: 'Influences by projecting a strong will and building structures that reshape social dynamics through direct force and presence.', 
    longDescription: 'You influence by projecting a strong will and building structures that reshape social dynamics through direct force and presence.', 
    friendships: 'Prefers relationships with clear purpose or mutual benefit. Values loyalty and competence. Can be a powerful ally but may struggle with friendships that are purely for emotional support without a shared goal.',
    examples: '"The best way to solve a problem is to take charge." "Structure and hierarchy are necessary for success." "I respect people who can execute a plan."',
    strengths: extractedText.A.strengths,
    weaknesses: extractedText.A.weaknesses,
    color: 'bg-red-900/40 border-red-700', textColor: 'text-red-400', icon: IconA 
  },
  { 
    id: InfluenceTypeId.B, name: 'Impassioned', title: 'Influence Impassioned', 
    description: 'Influences through authentic emotional attunement, understanding others deeply to build trust and translate complex feelings into connection.', 
    longDescription: 'You influence through authentic emotional attunement, understanding others deeply to build trust and translate complex feelings into connection.', 
    friendships: 'Seeks deep, emotionally intimate connections. Is the friend everyone goes to for advice and a listening ear. Values authenticity and vulnerability, but can sometimes become overly invested in friends\' problems.',
    examples: '"I can feel the energy change when someone walks into a room." "It\'s important to understand where someone is coming from emotionally." "Authenticity is everything to me."',
    strengths: extractedText.B.strengths,
    weaknesses: extractedText.B.weaknesses,
    color: 'bg-purple-900/40 border-purple-700', textColor: 'text-purple-400', icon: IconB 
  },
  { 
    id: InfluenceTypeId.C, name: 'Integrative', title: 'Influence Integrative', 
    description: 'Influences by synthesizing complex information, seeing hidden patterns, and creating intellectual frameworks that connect disparate systems and ideas.', 
    longDescription: 'You influence by synthesizing complex information, seeing hidden patterns, and creating intellectual frameworks that connect disparate systems and ideas.', 
    friendships: 'Enjoys friendships based on intellectual stimulation and shared ideas. Loves a good debate and exploring complex topics. Can sometimes seem detached if the conversation isn\'t mentally engaging.',
    examples: '"Everything is connected if you look closely enough." "Let\'s look at this from a different perspective." "I need to understand the underlying principles of how this works."',
    strengths: extractedText.C.strengths,
    weaknesses: extractedText.C.weaknesses,
    color: 'bg-blue-900/40 border-blue-700', textColor: 'text-blue-400', icon: IconC 
  },
  { 
    id: InfluenceTypeId.D, name: 'Indulgence', title: 'Influence Indulgence', 
    description: 'Influences by embodying a flexible, joyful presence that finds profound meaning in the moment and transforms ordinary experiences, often resisting rigid structures.', 
    longDescription: 'You influence by embodying a flexible, joyful presence that finds profound meaning in the moment and transforms ordinary experiences, often resisting rigid structures.', 
    friendships: 'Spontaneous and fun-loving. Seeks friends who appreciate living in the moment and don\'t take things too seriously. Brings a sense of play and joy to relationships, but may shy away from heavy emotional demands.',
    examples: '"Why worry about tomorrow when today is so beautiful?" "The best plan is no plan." "Let\'s just see where the day takes us."',
    strengths: extractedText.D.strengths,
    weaknesses: extractedText.D.weaknesses,
    color: 'bg-yellow-900/40 border-yellow-700', textColor: 'text-yellow-400', icon: IconD 
  },
  { 
    id: InfluenceTypeId.E, name: 'Indifference', title: 'Influence Indifference', 
    description: 'Influences through calculated non-action, using strategic patience, silence, and precise, minimal intervention to conserve energy and achieve impact over time.', 
    longDescription: 'You influence through calculated non-action, using strategic patience, silence, and precise, minimal intervention to conserve energy and achieve impact over time.', 
    friendships: 'Values low-maintenance, high-trust relationships. Doesn\'t need constant contact but is deeply loyal to a select few. Appreciates friends who are independent and respect their need for space and quiet observation.',
    examples: '"Sometimes the most powerful move is to do nothing at all." "I\'m just observing." "Let\'s wait and see how this plays out before we react."',
    strengths: extractedText.E.strengths,
    weaknesses: extractedText.E.weaknesses,
    color: 'bg-green-900/40 border-green-700', textColor: 'text-green-400', icon: IconE 
  },
  { 
    id: InfluenceTypeId.F, name: 'Inplaced', title: 'Influence Inplaced', 
    description: 'An anchor of profound stability and integrity for others, yet this same immovable nature makes you a fortress, resistant to the essential forces of change, chaos, and new growth.', 
    longDescription: 'You are an anchor of profound stability and integrity for others. You engage through a framework of demonstrated reliability and easy resonance. Your attention is granted to those who prove themselves consistent and relatable. While you maintain an openness to intriguing qualities in others, you experience a subtle friction when encountering perspectives that challenge your deeply-rooted systems of understanding—a slight irritation at what disturbs your established order of things.', 
    friendships: 'The bedrock of their social circle. Values stability, tradition, and reliability. Friends are often for life. Appreciates shared history and comfortable routines. Can be slow to warm up to new people.',
    examples: '"If it isn\'t broken, don\'t fix it." "Let\'s stick to what we know works." "My word is my bond."',
    strengths: extractedText.F.strengths,
    weaknesses: extractedText.F.weaknesses,
    color: 'bg-cyan-900/40 border-cyan-700', textColor: 'text-cyan-400', icon: IconF 
  },
];

let questionIdCounter = 0;
export const ALL_QUESTIONS: Question[] = questionsData.flatMap(({ typeId, strengths, weaknesses }) => 
  [...strengths, ...weaknesses].map(q => ({
    id: questionIdCounter++,
    text: q.text,
    example: q.example,
    typeId: typeId,
  }))
);


export const ANSWER_OPTIONS: AnswerOption[] = [
    { text: "Definitely not", score: -3, color: 'bg-red-700', hex: '#b91c1c' },
    { text: "No", score: -2, color: 'bg-red-500', hex: '#ef4444' },
    { text: "Maybe not", score: -1, color: 'bg-orange-500', hex: '#f97316' },
    { text: "Neutral", score: 0, color: 'bg-gray-500', hex: '#6b7280' },
    { text: "Maybe", score: 1, color: 'bg-yellow-500', hex: '#eab308' },
    { text: "Yes", score: 2, color: 'bg-green-500', hex: '#22c55e' },
    { text: "Absolutely", score: 3, color: 'bg-emerald-500', hex: '#10b981' },
];
