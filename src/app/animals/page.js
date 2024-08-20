"use client";
import { Quiz } from "@/components/quiz";
import { Navbar } from "@/components/navbar";
import { ColorfulText } from "@/utils/service";

export default function Page() {

  const data = [
    {
      name: "bear",
      sentences: [
        "The bear is big and fluffy",
        "The bear loves eating sweet honey",
        "The sleepy bear takes long naps"
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg",
      ]
    },
    {
      name: "camel",
      sentences: [
        "The camel is tall and proud",
        "The camel carries its hump through sandy deserts",
        "Camels walk across hot deserts under the bright sun"
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg"
      ]
    },
    {
      name: "donkey",
      sentences: [
        "The donkey is stubborn but strong",
        "The gray donkey trots along with heavy loads",
        "Donkeys help carry things up and down the hills"
      ],
      images: [
        "https://cdn.britannica.com/68/143568-050-5246474F/Donkey.jpg",
      ]
    },
    {
      name: "rabbit",
      sentences: [
        "The rabbit hops around super fast",
        "The rabbit’s long ears help it listen carefully",
        "Rabbits love munching on crunchy carrots"
      ],
      images: [
        "https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg",
      ]
    },
    {
      name: "zebra",
      sentences: [
        "The zebra has black and white stripes like a cool pattern",
        "The zebra’s stripes help it hide in the tall grass",
        "Zebras run wild and free across Africa"
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/d/dd/Burchell%27s_Zebra_%28Etosha%29.jpg",
      ]
    },
    {
      name: "elephant",
      sentences: [
        "The elephant is big and strong",
        "The elephant’s trunk is like a long wiggly hose",
        "Elephants flap their big ears to stay cool"
      ],
      images: [
        "https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg",
      ]
    },
    {
      name: "giraffe",
      sentences: [
        "The giraffe’s long neck reaches the treetops",
        "Giraffes are the tallest animals in the world",
        "The giraffe munches on tasty green leaves"
      ],
      images: [
        "https://d1jyxxz9imt9yb.cloudfront.net/animal/112/meta_twitter_image/regular/WR202206_GiraffeTranslocation_012_360559_reduced.jpg",
      ]
    },
    {
      name: "hippo",
      sentences: [
        "The hippo is big and round",
        "The hippo loves splashing in the water",
        "Hippos show their big teeth when they yawn"
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Portrait_Hippopotamus_in_the_water.jpg"
      ]
    },
    {
      name: "lion",
      sentences: [
        "The lion is the king of the jungle",
        "The lion has a thick mane",
        "The lion roars loudly to show its power"
      ],
      images: [
        "https://safariavventura.com/wp-content/uploads/2019/06/African-lion.jpg",
      ]
    }
  ]



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
          ANIMALS!
        </h2>
      </div>
      <div className="mt-10 w-full">
        <Quiz data={data} type="animals" />
      </div>
    </main>
  );
}