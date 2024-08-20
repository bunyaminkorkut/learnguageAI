"use client";
// import RainbowText from 'react-rainbow-text';
import { Quiz } from "@/components/quiz";
import { Navbar } from "@/components/navbar";
import { ColorfulText } from "@/utils/service";

export default function Page() {

  const data = [
    {
      name: "milk",
      sentences: [
        "Milk makes me strong like a superhero",
        "Milk is as white as fluffy clouds",
        "I love drinking milk with my cookies"
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg",
      ]
    },
    {
      name: "bread",
      sentences: [
        "Fresh bread smells yummy in the morning",
        "Bread is soft and golden, like a cozy blanket",
        "My mom makes the best sandwiches with bread"
      ],
      images: [
        "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg"
      ]
    },
    {
      name: "apple",
      sentences: [
        "Apples are crunchy and sweet like candy",
        "A red apple shines like a bright balloon",
        "I always eat apples as a healthy snack"
      ],
      images: [
        "https://www.organics.ph/cdn/shop/products/apple-washington-size-113-per-piece-fruits-vegetables-fresh-produce-509590_1024x.jpg?v=1601486996"
      ]
    },
    {
      name: "banana",
      sentences: [
        "Bananas are curved and fun to peel",
        "Bananas are yellow and super tasty",
        "I eat bananas to have lots of energy"
      ],
      images: [
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400"
      ]
    },
    {
      name: "egg",
      sentences: [
        "Eggs are round and smooth, like little moons",
        "When I crack an egg, it’s like magic",
        "I eat eggs to grow big and strong"
      ],
      images: [
        "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
      ]
    },
    {
      name: "cheese",
      sentences: [
        "Cheese is yummy and melts in my mouth",
        "Cheese is yellow and makes every bite better",
        "I like putting cheese on my pizza"
      ],
      images: [
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg?w=1155&h=1528"
      ]
    }
  ];



  return (
    <main className="flex min-h-screen flex-col items-center py-12 container mx-auto">
      <h1
        className={"font-matemasie text-6xl text-shadow mb-7"}
      >
        {ColorfulText("LearnguageAI")}
      </h1>
      <div className='text-center'>
        <p className='text-xl font-medium text-violet-600'>
          Let's learn a new language with AI!
        </p>
      </div>
      <Navbar />
      <div className='border rounded-lg p-2 mt-4 border-rose-800 text-white bg-gray-400 max-w-[600px]'>
        <h2 className="text-lg font-bold">Let's learn
          FOODS
        </h2>
      </div>
      <div className="mt-10 w-full">
        <Quiz data={data} type="foods" />
      </div>
    </main>
  );
}