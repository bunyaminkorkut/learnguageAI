import { VertexAI } from "@google-cloud/vertexai";




export async function POST(req, res) {
    console.log("vertexai");
    process.env.GOOGLE_APPLICATION_CREDENTIALS = "tmp/named-trilogy-432517-e5-138427304bb7.json";
    const body = await req.json();
    const text = body.text;
    const credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    const vertexai = new VertexAI({ project: "named-trilogy-432517-e5-138427304bb7", location: "us-central1", credentials: credentials });
    const model = vertexai.preview.getGenerativeModel({model: "gemini-pro"});
    const request = {
        contents:[{role:"user", parts:[{text:text}]}]
    };
    const result = await model.generateContent(request);
    const response = await result.response;
    return NextResponse.json({response});
}
