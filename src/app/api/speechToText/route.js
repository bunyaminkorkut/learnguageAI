import fs from "fs";
import { SpeechClient } from '@google-cloud/speech';
import { NextResponse } from "next/server";




/**
 * Calls the Speech-to-Text API on a demo audio file.
 */
export async function POST(req, res) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = "tmp/lucky-adviser-394710-8914344cbd84.json";
    
    const body = await req.json();
    const client = new SpeechClient();
    const base64Audio = body.audio;

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: base64Audio,
    };
    console.log("1");
    const config = {
        encoding: 'WEBM_OPUS',
        sampleRateHertz: 48000,
        languageCode: 'en-US',
        enableSpeakerDiarization: true,

    };
    // Detects speech in the audio file
    const [response] = await client.recognize({ audio, config });
    console.log(response);
    console.log("2");
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log(`Transcription: ${transcription}`);
    return NextResponse.json({ text: transcription });
}
