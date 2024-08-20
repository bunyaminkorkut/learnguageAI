"use client"
import { Chat } from '@/components/chat';
import { Navbar } from '@/components/navbar';
import { ColorfulText } from '@/utils/service';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center py-12 container mx-auto">
      <div className=' mb-5'>
        <h1
          className={"font-matemasie text-6xl text-shadow"}
        >
          {ColorfulText("LearnguageAI")}
        </h1>
        <p className='text-sm font-sans text-end cursor-pointer mt-4' onClick={() => { router.push("https://github.com/bunyaminkorkut") }}> by Bunyamin Korkut</p>
      </div>
      <div className='text-center'>
        <p className='text-xl font-medium text-violet-600'>
          Let's learn a new language with AI!
        </p>
        <div className='border rounded-lg p-2 mt-2 border-rose-800 text-white bg-rose-600 max-w-[600px]'>
          <h2 className="text-lg font-bold">What is LearnguageAI?</h2>
          <p className="mt-1">
            LearnguageAI is a project that uses AI to help you learn a new language for childs. You can learn colors, numbers, animals, foods, and more!
          </p>
        </div>
      </div>
      <Navbar />
      <Chat />
    </main>
  );
}
