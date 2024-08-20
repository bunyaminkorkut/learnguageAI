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
      name: "backpack",
      sentences: [
        "My backpack holds all my school treasures",
        "The backpack feels heavy because it’s full of fun things",
        "My backpack is blue like the sky"
      ],
      images: [
        "https://www.sassandbelle.co.uk/Images/ProductCategories/backpac%20cat.png"
      ]
    },
    {
      name: "book",
      sentences: [
        "I love reading my favorite book every day",
        "The book has a shiny red cover",
        "This book takes me on exciting adventures"
      ],
      images: [
        "https://cdn.britannica.com/83/78183-004-345353F4/Stack-books.jpg"
      ]
    },
    {
      name: "calculator",
      sentences: [
        "My calculator helps me solve tricky math problems",
        "The calculator is as black as night",
        "This calculator is like a magic number machine"
      ],
      images: [
        "https://ae01.alicdn.com/kf/A49c0b8d62c1444d4b661f2135f36331am.jpg_640x640q90.jpg"
      ]
    },
    {
      name: "pen",
      sentences: [
        "I use my pen to write cool stories",
        "The pen is blue like the ocean",
        "My new pen makes writing super fun"
      ],
      images: [
        "https://www.collinsdictionary.com/images/full/pen_525053431_1000.jpg"
      ]
    },
    {
      name: "marker",
      sentences: [
        "My marker is perfect for drawing big, bold pictures",
        "The green marker is my favorite color",
        "This thick marker makes everything stand out"
      ],
      images:[
        "https://cdnsta.avansas.com/mnresize/300/-/urun/54524/bic-marker-2300-kesik-uc-mavi-zoom-3.jpg"
      ]
    },
    {
      name: "pencil",
      sentences: [
        "My pencil is ready for sketching and writing",
        "The pencil is yellow like sunshine",
        "I keep my pencil sharp to draw fine lines"
      ],
      images: [
        "https://m.media-amazon.com/images/I/51Uo7kfSt0L._AC_UF350,350_QL80_.jpg"
      ]
    },
    {
      name: "ruler",
      sentences: [
        "I use my ruler to make super straight lines",
        "The ruler is long enough to measure anything",
        "My ruler is always straight and sturdy"
      ],
      images:[
        "https://m.media-amazon.com/images/I/61RdH9Lg4wL._SL1500_.jpg"
      ]
    },
    {
      name: "scissors",
      sentences: [
        "My scissors snip paper into fun shapes",
        "The scissors are sharp, so I cut carefully",
        "The shiny silver scissors are perfect for crafting"
      ],
      images:[
        "https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox"
      ]
    }
  ];



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
          SCHOOL!
        </h2>
      </div>
      <div className="mt-10 w-full">
        <Quiz data={data} type="school" />
      </div>
    </main>
  );
}