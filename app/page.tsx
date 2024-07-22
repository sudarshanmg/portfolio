import Image from 'next/image';
import Star from '@/public/images/star.svg';

import Terminal from '@/components/Terminal';

export default function Home() {
  return (
    <main className="flex flex-col justify-stretch">
      <div className="text-center my-16 mx-4 max-h-fit">
        <header className="font-playfair">
          <div className="hidden lg:block relative">
            <Image
              src={Star}
              width={40}
              height={40}
              alt="star bro"
              className="right-60 absolute"
            />
          </div>
          <h1 className="lg:text-8xl sm:text-5xl md:text-7xl text-6xl font-acorn">
            <div>{`Hi. I'm Sudarshan.`}</div>
            <div className=" font-extralight">El creator.</div>
          </h1>
          <div className="hidden lg:block relative">
            <Image
              src={Star}
              width={40}
              height={40}
              alt="star bro"
              className="left-60 absolute bottom-4"
            />
          </div>
          <h2 className="md:text-md text-2xl m-4 font-mono font-semibold text-neutral-500">{`I design and build things.`}</h2>
        </header>
      </div>
      <Terminal />
    </main>
  );
}
