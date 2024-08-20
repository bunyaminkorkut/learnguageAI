import { GoogleGenerativeAI } from "@google/generative-ai";


// export const textToSpeech = (text) => {
//   const response = fetch("/api/textToSpeech", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       text: text,
//     }),
//   }).then((res) => res.json());
//   return response
// }

export const ColorfulText = (text) => {
  const colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#9400D3",
    "#FF1493",
    "#8B0082",
    "#FF69B4",
    "#FFC0CB",
    "#FFD700",
    "#FF8C00",
    "#FF4500",
  ]
  return (
    <span>
      {text.split("").map((char, index) => (
        <span key={index} style={{ color: colors[index % colors.length] }}>
          {char}
        </span>
      ))}
    </span>
  )
}


export const geminiAPI = async (data, text) => {
  const genAI = new GoogleGenerativeAI('AIzaSyCAmx4GHRAro7IMCZNnWzD1Dhl_xtstYhY');

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = model.startChat({
    history: data,
  });
  let result = await chat.sendMessage(text);
  return result.response.text();
}

export const speechToText = async (base64Audio) => {
  process.env.GOOGLE_APPLICATION_CREDENTIALS = "tmp/lucky-adviser-394710-8914344cbd84.json";
  const apikey = "AIzaSyCOH1rhQAJhTT0UKJd6ENhQUIuLLpU7Kps"

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: base64Audio,
  };
  const config = {
    encoding: 'WEBM_OPUS',
    sampleRateHertz: 48000,
    languageCode: 'en-US',
  };
  // Detects speech in the audio file
  // const [response] = await client.recognize({ audio, config });
  const response = await fetch(`https://speech.googleapis.com/v1/speech:recognize?key=${apikey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        config: config,
        audio: audio,
      }),
    }
  )
  const transcription = await response.json()
  const text = transcription.results.map(result => result.alternatives[0].transcript)
    .join('\n');
  return ({ text: text });
}


export const textToSpeech = async (text) => {
  const apikey = "AIzaSyCOH1rhQAJhTT0UKJd6ENhQUIuLLpU7Kps"
  const data = {
    input: { text: text },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  }
  const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apikey}`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const responseJson = await response.json();
  const audiobuffer = base64ToArrayBuffer(responseJson.audioContent);
  return audiobuffer;
}

export const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
    
  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}


function base64ToArrayBuffer(base64) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}