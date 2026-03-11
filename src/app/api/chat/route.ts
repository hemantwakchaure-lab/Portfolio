import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { AI_CONTEXT } from '@/lib/ai-context';

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const result = await streamText({
            model: openai('gpt-4o-mini'),
            system: AI_CONTEXT,
            messages,
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response(JSON.stringify({ error: "Failed to generate response." }), { status: 500 });
    }
}
