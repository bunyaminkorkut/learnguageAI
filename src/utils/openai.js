import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: "c4f0c9a92f3a4076bc9343bef0de059b",
    baseURL: "https://api.aimlapi.com",
    dangerouslyAllowBrowser: true
});
export async function generatePrompts(chatPrompt) {
    const chatCompletion = await openai.chat.completions.create({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: chatPrompt,
        temperature: 0.7,
        max_tokens: 128,
    });
    console.log("AI/ML API:\n", chatCompletion.choices[0].message.content);
    return chatCompletion.choices[0].message.content;
}
