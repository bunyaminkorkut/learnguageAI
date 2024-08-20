import { useState } from "react";
import { Microphone } from "./microphone"
import { Play } from "@/utils/play";

export const Chat = () => {
  const [chatMessages, setChatMessages] = useState([
    { role: 'user', parts: [{ text: "You are an English teacher so answer basicly and shortly as if you were talking to someone who is just learning English. Don't use emojis. Give an answer like speaking. Speak like a person. Your name is LearnguageAI" }] }
  ]);

  return (
    <>
      <div className=' bg-gray-200 mt-10 rounded-lg w-full border border-gray-300 overflow-scroll pb-5'>
        <div className='border-b border-gray-300 p-2 text-center'>
          Let's talk with AI! 🤖
        </div>
        <div className='h-[calc(100vh-700px)] p-2'>
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
          })
          }
        </div>
      </div>
      <div className='mt-4'>
        <p className='bg-lime-500 text-white border border-lime-600 px-2 py-1 rounded-lg'>
          Click the microphone and start talking!
        </p>
        <div className='mx-auto mt-3'>
          <Microphone chatMessages={chatMessages} setChatMessages={setChatMessages} />
        </div>
      </div>
    </>
  )
}   