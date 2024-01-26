import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_TOKEN,
});

export async function POST(req: Request) {

  const { key, element } = await req.json();

  let prompt = `I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS: ${key}: ${element}`

  const image = await openai.images.generate({ 
    prompt: prompt,
    size: "256x256"
  });

  return new Response(image.data[0].url);
}
