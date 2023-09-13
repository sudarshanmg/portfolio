import React from "react";
import Link from "next/link";
import DescriptionComponent from "@/components/DescriptionItem";
import { BiLogoGithub } from "react-icons/bi";

const Projects = () => {
  const fis_intro =
    "The Faculty Information System is a cutting-edge web application developed using a powerful tech stack consisting of Next.js, Supabase, PostgreSQL, Tailwind CSS, TypeScript, and React. This robust system is designed to streamline the management of faculty information within a college or educational institution.";

  const fis_features = [
    "Faculty Data Management: Faculty members can effortlessly upload and update their information files, including academic credentials, research publications, and other relevant documents. This ensures that their profiles are always up-to-date.",
    "Secure Authentication: The system boasts a robust authentication system, guaranteeing that only authorized users, such as faculty members and administrative staff, can access and modify the data. This ensures data privacy and security.",
    "Server-Side Rendering: Leveraging Next.js, the Faculty Information System provides fast and efficient server-side rendering, improving the overall user experience and SEO optimization.",
    "Middleware Protection: The system incorporates middleware that safeguards specific routes, controlling access and ensuring that only designated individuals, such as Heads of Departments (HoDs), can retrieve sensitive faculty information. This adds an extra layer of security.",
    "User-Friendly Interface: The user interface is designed with user experience in mind, with Tailwind CSS ensuring a clean and visually appealing design. Faculty members and HoDs can easily navigate the system to access and manage information efficiently.",
  ];

  const tech_stack = [
    "NextJS",
    "ReactJS",
    "TypeScript",
    "PostgreSQL",
    "Tailwind",
    "Supabase",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center my-8">
      <div className="w-5/6 h-[50vh] bg-gray-900 shadow-neon-orange rounded-3xl mb-16 text-center overflow-y-auto">
        <h1 className="font-acorn text-4xl p-4 text-neutral-400">
          Faculty Information System
        </h1>
        <div className="flex justify-center w-full">
          <Link
            href={"https://faculty-system.vercel.app/"}
            className="hover:underline p-2"
            target="_blank"
          >
            View Deployment
          </Link>
          <Link
            href={"https://github.com/sudarshanmg/faculty-system"}
            className="hover:underline p-2"
            target="_blank"
          >
            View Repo
          </Link>
        </div>

        <DescriptionComponent
          intro={fis_intro}
          features={fis_features}
          tech_stack={tech_stack}
        />
      </div>
      <div className="w-5/6 h-[50vh] bg-gray-900 shadow-neon-green rounded-3xl mb-16 text-center overflow-y-auto">
        <h1 className="font-acorn text-4xl p-4 text-neutral-400">
          Frogify 🐸 - Music streaming app
        </h1>
        <div className="flex justify-center w-full">
          <Link
            href={"https://frogify.vercel.app/"}
            className="hover:underline p-2"
            target="_blank"
          >
            View Deployment
          </Link>
          <Link
            href={"https://github.com/sudarshanmg/frogify"}
            className="hover:underline p-2"
            target="_blank"
          >
            View Repo
          </Link>
        </div>

        <DescriptionComponent
          intro={"A complete clone of spotify"}
          features={[]}
          tech_stack={tech_stack}
        />
      </div>
      <div className="w-5/6 h-[50vh] bg-gray-900 shadow-neon-blue rounded-3xl mb-16"></div>
    </div>
  );
};

export default Projects;
