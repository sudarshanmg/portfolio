import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center my-8">
      <div className="w-5/6 h-[50vh] bg-gray-900 shadow-neon-orange rounded-3xl mb-16 text-center">
        <h1 className="font-acorn text-4xl p-4 text-neutral-400">
          Faculty Information System
        </h1>
        <Link
          href={"https://faculty-system.vercel.app/"}
          className="hover:underline"
          target="_blank"
        >
          View Deployment
        </Link>
        <p className="text-justify p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          natus autem cum, tempore, incidunt laudantium earum quibusdam qui ut
          commodi numquam dolorum aperiam cupiditate, ratione voluptate
          blanditiis in inventore asperiores minima neque. Explicabo eum
          doloribus tempore, natus quo asperiores commodi rerum exercitationem
          deleniti, ipsum vitae vel provident illo recusandae aliquam.
        </p>
      </div>
      <div className="w-5/6 h-[50vh] bg-gray-900 shadow-neon-blue rounded-3xl mb-16"></div>
      <div className="w-5/6 h-[50vh] bg-gray-900 shadow-neon-green rounded-3xl mb-16"></div>
    </div>
  );
};

export default About;
