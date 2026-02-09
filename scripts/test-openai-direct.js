const { OpenAI } = require("openai");

// Load from .env.local logic simulation
const apiKey = "sk-kxvvt8GwJNwFs03bhiBOgXG6i363ugqpBK28Z5QSEEjITEpT";
const baseURL = "https://geekai.co/api/v1";

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: baseURL,
});

async function main() {
    console.log("Testing OpenAI Client Direct Connection...");
    console.log(`Base URL: ${baseURL}`);
    console.log(`Model: gpt-4o-mini`);

    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: "Say hello" }],
            stream: true,
        });

        console.log("Stream started:");
        for await (const chunk of response) {
            console.log("Chunk:", JSON.stringify(chunk));
            if (chunk.choices && chunk.choices[0].delta && chunk.choices[0].delta.content) {
                process.stdout.write(chunk.choices[0].delta.content);
            }
        }
        console.log("\nStream finished.");
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
