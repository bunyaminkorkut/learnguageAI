import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI('AIzaSyCAmx4GHRAro7IMCZNnWzD1Dhl_xtstYhY');

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const body = await req.json();
    console.log("gem");
    console.log(body.data);
    console.log(body.text);

    const chat = model.startChat({
        history: body.data,
    
    });
    console.log("chat");
    let result = await chat.sendMessage(body.text);
    console.log("ini");
    const response = await result.response;
    console.log("res");
    const text = response.text();
    console.log(text);
    return NextResponse.json( text);
}
