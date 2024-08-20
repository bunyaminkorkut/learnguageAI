"use client";
import { useRouter } from "next/navigation";
import { Button } from '@/components/button';
import { Chat } from '@/components/chat';
import RainbowText from 'react-rainbow-text';
import { Quiz } from "@/components/quiz";
import { Navbar } from "@/components/navbar";

export default function Page() {
  const router = useRouter();

  const data = [
    {
      name: "red",
      sentences: [
        "The apple is red",
        "I have a red car",
        "The rose is red",
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Solid_red.png",
        "https://images.photowall.com/products/45171/dark-red-rose.jpg?h=699&q=85",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0G8aE5AoGDOQMJGd8fcrO5rZOWWvrAVKUw&s"]
    },
    {
      name: "blue",
      sentences: [
        "The sky is blue",
        "The ocean is blue",
        "I like blue jeans",
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2048px-Solid_blue.svg.png",
        "https://magazine.scienceconnected.org/wp-content/uploads/2016/11/blue-butterfly-1-e1480308715222.jpg",
        "https://in2english.net/wp-content/uploads/2019/11/the-color-blue2-800x529.jpg"]
    },
    {
      name: "yellow",
      sentences: [
        "The sun is yellow",
        "The banana is yellow",
        "I have a yellow shirt",
      ],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDx7Z-4u20EXxhklpwJLCnWuXvRaUiLSjxqg&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Yellow_Marigold_Tennessee.jpg/273px-Yellow_Marigold_Tennessee.jpg",
        "https://99yellowcars.com/wp-content/uploads/2019/05/yellow-vw-bettle.jpg",
      ]
    },
    {
      name: "green",
      sentences: [
        "The grass is green",
        "I like green apples",
        "The tree is green",
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Light_green.PNG",
        "https://merriam-webster.com/assets/mw/images/gallery/gal-home-edpick-lg/verdant-1960-840e9b28c26a95231a6dd71f6fd6499b@1x.jpg",
        "https://www.amc.info/fileadmin/_processed_/3/e/csm_Article_17_Green_Food_Header_4f56477a7e.jpg",
      ]
    },
    {
      name: "purple",
      sentences: [
        "The flower is purple",
        "I like purple grapes",
        "The sky is purple",
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Solid_purple.svg/1024px-Solid_purple.svg.png",
        "https://images.pexels.com/photos/133464/pexels-photo-133464.jpeg?cs=srgb&dl=pexels-inspiredimages-133464.jpg&fm=jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/026/182/249/small_2x/cloud-purple-sky-copy-space-blurred-background-ai-generated-photo.jpg",
      ]
    },
    {
      name: "orange",
      sentences: [
        "The orange is orange",
        "The sunset is orange",
        "I like orange cars",
      ],
      images: [
        "https://t4.ftcdn.net/jpg/03/29/19/15/360_F_329191596_tRQiV7LZjTZtuPM09QyOS09HV1D9VimE.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Oranges_-_whole-halved-segment.jpg",
        "https://t4.ftcdn.net/jpg/00/67/24/59/360_F_67245954_ejVa8C414CwJ9X0UadIFu1QEUjeLuFnO.jpg",
      ]
    },

  ]



  return (
    <main className="flex min-h-screen flex-col items-center py-12 container mx-auto">
      <h1
        className={"font-matemasie text-6xl text-shadow mb-7"}
      >
        <RainbowText lightness={0.5} saturation={1}>
          LearnguageAI
        </RainbowText>
      </h1>
      <div className='text-center'>
        <p className='text-xl font-medium text-violet-600'>
          Let's learn a new language with AI!
        </p>
      </div>
      <Navbar />
      <div className='border rounded-lg p-2 mt-4 border-rose-800 text-white bg-gray-400 max-w-[600px]'>
        <h2 className="text-lg font-bold">Let's learn
          <span>
            <RainbowText>
              {` COLORS!`}
            </RainbowText>
          </span>
        </h2>
      </div>
      <div className="mt-10 w-full">
        <Quiz data={data} type="colors" />
      </div>
    </main>
  );
}