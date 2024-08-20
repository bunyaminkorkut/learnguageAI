## Inspiration

I am a student living in Turkey, and one of the biggest challenges in schools here is the difficulty of learning a foreign language. The lack of sufficient speaking practice in schools makes it difficult for students to become proficient in a new language. For this reason, I came up with the idea of developing an application that helps children who are just beginning to learn English practice their speaking skills.

## What does it do?

LearnguageAI helps children practice speaking English using artificial intelligence. The AI responds just like a human, providing answers both in written and spoken form. The app also includes speaking practice activities that help children learn new words on specific topics such as colors, food, animals, and more.

## How I built this

I developed LearnguageAI as a web application using [Next.js 14](https://nextjs.org/). For styling, I used [Tailwind CSS](https://tailwindcss.com/). The project leverages Google API services for converting speech to text and text to speech. For AI-generated responses, I used Google's Gemini API service.

## Challenges I faced

Integrating Google services into my project was a bit challenging. Handling audio data in various formats required learning how to perform necessary conversions, which I eventually managed to implement effectively.

## Achievements I am proud of

I am particularly proud of successfully handling the process of detecting speech, sending it to the AI for processing, and then generating a voice response from the AI.

## What I learned

I gained experience in using AI APIs and became more proficient in working with Google Cloud services. My research during this process was extremely beneficial. While I considered using OpenAI’s services, I opted for Google’s solutions due to their free offerings.

## What's next for LearnguageAI?

Currently, LearnguageAI only supports English. In the future, it can be expanded to include additional language options. I also plan to add more content for vocabulary learning. Since I developed a small prototype in a short time, I acknowledge that the content is somewhat limited for now.
