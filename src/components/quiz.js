import { useRouter, useSearchParams } from "next/navigation";
import { Microphone } from "./microphone";
import { useEffect, useState } from "react";
import { useRecordVoice } from "@/utils/record";
import { textToSpeech } from "@/utils/service";
import { Play } from "@/utils/play";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./button";


export const Quiz = ({ data, type }) => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const { recording, startRecording, stopRecording, text, loading } = useRecordVoice();
  const [recordingState, setRecordingState] = useState(null);
  const [order, setOrder] = useState(searchParams.get('order'));
  const [audio1, setAudio1] = useState();
  const [audio2, setAudio2] = useState();
  const [audio3, setAudio3] = useState();
  const [check, setCheck] = useState({
    0: null,
    1: null,
    2: null
  });
  const [recordingAudio, setRecordingAudio] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'user', parts: [{
        text:
          `I am making new sentences with the word ${data?.[searchParams.get('order')].name}, check whether the sentence I give contains the word ${data?.[searchParams.get('order')].name}. Don't accept spesificly these sentences: " ${data?.[searchParams.get('order')].sentences} ". Do not use emojis. Give me answer like talking. Speak like a human, finally give me the result as a boolean at the end. Don't use *`
      }]
    }
  ]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (recordingState) {
      startRecording();
    }
    else if (recordingState === false) {
      stopRecording();
    }
  }, [recordingState]);

  useEffect(() => {
    if (searchParams.get('order')) {
      setOrder(parseInt(searchParams.get('order')))
    } else {
      setOrder(0)
    }
  }, [searchParams.get('order')]);

  useEffect(() => {
    textToSpeech(data?.[order].sentences?.[0]).then((res) => {
      setAudio1(Buffer.from(res.response.audioContent.data));
    }).then(() => {
      textToSpeech(data?.[order].sentences?.[1]).then((res) => {
        setAudio2(Buffer.from(res.response.audioContent.data));
      })
    }).then(() => {
      textToSpeech(data?.[order].sentences?.[2]).then((res) => {
        setAudio3(Buffer.from(res.response.audioContent.data));
      })
    }
    )
    setChatMessages([
      {
        role: 'user', parts: [{
          text:
            `I am making new sentences with the word ${data?.[searchParams.get('order')].name}, check whether the sentence I give contains the word ${data?.[searchParams.get('order')].name}.Do not accept answers that are exactly the same as these sentences: " ${data?.[searchParams.get('order')].sentences} ". Do not use emojis. Give me answer like talking. Speak like a human. Give me the result as a boolean at the end!. Don't use *`
        }]
      }
    ])
    setCheck({
      0: null,
      1: null,
      2: null
    })
  }, [order]);

  useEffect(() => {
    if (text) {
      if (data?.[order].sentences?.[recordingAudio].toLowerCase() === text.toLowerCase()) {
        setCheck((prev) => ({ ...prev, [recordingAudio]: true }))
      } else {
        setCheck((prev) => ({ ...prev, [recordingAudio]: false }))
      }
    }
  }, [text]);


  return (
    <div className=' bg-gray-200 mt-10 rounded-lg w-full border border-gray-300 pb-4'>
      <div className='border-b border-gray-300 p-2 text-center capitalize'>
        {type} Quiz 🎨
      </div>
      {!finished ? <div className="mx-[10%] flex flex-col ">
        <div className="mx-auto min-w-[500px]">
          <h3 className={"text-4xl capitalize text-center mb-4 "}
            style={{ color: `${data?.[order]?.name}` }}
          >
            {data?.[order].name}
          </h3>
          <div className="flex gap-y-2 justify-between items-center gap-x-2 w-full">
            {data?.[order].images.map((img, index) =>
              <img className="max-h-[120px] rounded-lg mx-auto" src={img} />)}
          </div>
          <h2 className="mt-4 text-xl">Let's listen and repeat this sentences!</h2>
          <div className="flex flex-col gap-y-4 mt-4">
            {data?.[order].sentences.map((sentence, index) =>
              <div className="flex gap-x-2 items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <p key={index} className="text-lg">{sentence}</p>
                  <Play audioBuffer={
                    index === 0 ? audio1 :
                      index === 1 ? audio2 :
                        index === 2 ? audio3 : null
                  } autoPlayOff={true} />
                  {check?.[index] && <FontAwesomeIcon icon={faCheck} size="2x" className="text-green-500" />}
                  {check?.[index] === false && <FontAwesomeIcon icon={faXmark} size="2x" className="text-red-500" />}
                </div>
                <button
                  onClick={() => {
                    setRecordingState((prev) => !prev);
                    setRecordingAudio(index)
                  }}
                  className="border-none bg-transparent w-10 flex justify-center relative"
                  disabled={loading && recordingAudio === index || check?.[index]}
                >
                  <div className={"flex items-center justify-center bg-red-500 text-white rounded-full p-4 w-12 h-12 shrink-0  " + ((recording && recordingAudio === index) && " microphone-animation") + ((recording && recordingAudio === index) && "  animate-pulse") + (((loading && recordingAudio === index) || check[index]) && " opacity-40")}>
                    <FontAwesomeIcon icon={faMicrophone} size="2x" />
                  </div>
                  {(loading && recordingAudio === index) && <div className="absolute flex justify-center items-center h-full">
                    <div role="status">
                      <svg aria-hidden="true" class="inline w-16 h-16 text-gray-200 animate-spin fill-red-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>}
                </button>
              </div>
            )}
          </div>
          {(check?.[0] && check?.[1] && check?.[2]) &&
            <>
              <p className="text-green-500 text-lg font-medium">
                Congratulations!
              </p>
              <h2 className="text-lg mb-4">Let's create a new sentence with {data?.[order].name}!</h2>
            </>
          }
        </div>
        {(check?.[0] && check?.[1] && check?.[2]) &&
          <>
            <div className="mt-4">
              {<Microphone chatMessages={chatMessages} setChatMessages={setChatMessages} disabled={chatMessages?.[chatMessages.length - 1]?.parts?.[0]?.text.includes("True") || chatMessages?.[chatMessages.length - 1]?.parts?.[0]?.text.includes("true")} />}
              <div className="mt-4">
                {chatMessages.map((message, index) => {
                  if (index === 0) {
                    return
                  }
                  return (
                    <div onClick={() => { console.log(chatMessages); }} key={index} className={`flex ${message.role === 'model' ? 'justify-start' : 'justify-end'} mt-2`}>
                      <div className="flex flex-col">
                        <div className={` bg-blue-500 text-white px-2 py-1 rounded-lg`}>
                          {message?.parts?.[0]?.text}
                        </div>
                        {message?.audio && <Play audioBuffer={message?.audio} />}
                      </div>
                    </div>
                  )
                }
                )}
              </div>
            </div>
            {(chatMessages?.[chatMessages.length - 1]?.parts?.[0]?.text.includes("True") || chatMessages?.[chatMessages.length - 1]?.parts?.[0]?.text.includes("true")) && <button
              onClick={() => {
                if (data?.length === order + 1) {
                  setFinished(true)
                } else
                  router.push(`/${type}?order=${order + 1}`)
              }}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 w-[100px] mx-auto"
            >
              Next
            </button>
            }
          </>
        }
      </div > :
        <div>
          <div className="flex justify-center items-center h-[10vh] text-2xl">
            Congratulations! You have completed the quiz!
          </div>
          <div className="flex justify-center my-4">
            <Button type={"primary"} className={"text-white"} size={"large"} onClick={() => { router.push("/") }}>
              Main Page
            </Button>
          </div>
        </div>
      }
    </div >

  );
}