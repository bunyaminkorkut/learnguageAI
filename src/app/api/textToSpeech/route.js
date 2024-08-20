import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { NextResponse } from 'next/server';
import fs from 'fs';


export async function POST(req, res) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = "tmp/lucky-adviser-394710-8914344cbd84.json";
    const languageCode = 'en';
    const outputFile = 'tmp/output.mp3';    
    const body = await req.json();
    const text = body.text;
    const client = new TextToSpeechClient();

    const request = {
        input: { text: text },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    console.log(response);
    fs.writeFileSync(outputFile, response.audioContent, 'binary');
    return NextResponse.json({outputFile, response});
}


