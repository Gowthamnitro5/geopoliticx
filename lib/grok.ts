import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_GROK_API_KEY,
});

const grokAI = new OpenAIApi(configuration);

export async function getGrokAnalysis(prompt: string) {
  try {
    const response = await grokAI.createCompletion({
      model: "grok-1",
      prompt: `Analyze the following geopolitical situation from a strategic perspective, considering India's interests: ${prompt}`,
      max_tokens: 1000,
      temperature: 0.7,
    });

    return response.data.choices[0]?.text || 'Unable to generate analysis.';
  } catch (error) {
    console.error('Error generating Grok analysis:', error);
    throw new Error('Failed to generate analysis');
  }
}