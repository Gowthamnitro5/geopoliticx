import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ''
);

export async function getGeopoliticalAnalysis(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(
      `Analyze the following geopolitical topic from India's perspective: ${prompt}`
    );
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating analysis:', error);
    return 'Unable to generate analysis at this time.';
  }
}
