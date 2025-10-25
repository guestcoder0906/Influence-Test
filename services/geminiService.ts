import { GoogleGenAI, Type } from "@google/genai";
import { Result } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
        strengths: {
            type: Type.STRING,
            description: "A single, flowing sentence summarizing the user's core strengths based on the list provided. It should sound like an insightful analysis, not a list.",
        },
        weaknesses: {
            type: Type.STRING,
            description: "A single, flowing sentence summarizing the user's potential blindspots based on the list provided. It should sound like an insightful analysis, not a list.",
        },
    },
    required: ['strengths', 'weaknesses'],
};


export const getInfluenceAnalysis = async (result: Result): Promise<{ strengths: string, weaknesses: string }> => {
  const prompt = `
    Analyze the following personality profile based on the Influence Framework. The user has been identified as a '${result.name}' type.

    Description: ${result.description}

    The user self-identified with these strengths:
    - ${result.strengths.join('\n- ')}

    The user self-identified with these potential weaknesses/blindspots:
    - ${result.weaknesses.join('\n- ')}

    Your task is to synthesize this information into concise, insightful summaries. Do not list the points back. Instead, create a natural language summary for each category as a single, flowing sentence. Frame the weaknesses as 'potential blindspots' to sound more constructive.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
      },
    });

    const jsonText = response.text.trim();
    const analysis = JSON.parse(jsonText);
    
    return {
        strengths: analysis.strengths,
        weaknesses: analysis.weaknesses
    };

  } catch (error) {
    console.error("Error generating influence analysis:", error);
    throw new Error("Failed to generate analysis from Gemini API.");
  }
};
