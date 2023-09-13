import Image from "next/image";
import me from "@/public/images/me.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  BiLogoDocker,
  BiLogoFigma,
  BiLogoGit,
  BiLogoGithub,
  BiLogoJava,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  SiCplusplus,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <section className="w-full min-h-fit flex flex-col items-center md:items-start p-8 md:flex-row">
          <Image
            src={me}
            alt={"AI generated pic of me"}
            className="w-[30vw] md:w-60 rounded-3xl shadow-neon-orange m-4"
          />
          <div className="m-4 font-mono text-center md:text-left">
            <h1 className="text-3xl">Sudarshan Mallibhat</h1>
            <p>Software Developer, India 🇮🇳</p>
            <p className="mt-8 text-justify">
              I am a passionate software developer with a penchant for delving
              into the intricacies of {`"why."`} My journey in the tech realm
              has been a thrilling ride, deeply rooted in the world of Full
              Stack development. 🔨 During my tenure as an intern at Signa-X, I
              had the privilege of crafting websites that seamlessly merged
              design and functionality. This experience allowed me to cultivate
              my skills and cultivate a genuine passion for creating digital
              masterpieces. 💡 My insatiable curiosity fuels my constant
              exploration of the dynamic tech landscape. I relish the challenge
              of learning new frameworks, diving into complex problems, and
              immersing myself in hands-on coding experiences. Join me as I
              continue to push the boundaries of what{`'`}s achievable in the
              software development universe. Together, we can shape the future,
              one ingenious line of code at a time! 🌟
            </p>
          </div>
        </section>
        <section className="w-full min-h-fit flex flex-col items-center md:items-start p-8 md:flex-row">
          <div className="m-4 font-mono text-center md:text-left">
            <h1 className="text-4xl">Programming Skills and toolkit</h1>
            <div>
              <p className="mt-8">Frameworks</p>
              <div className="flex items-center md:items-start justify-center md:justify-normal">
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiLogoReact size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      ReactJS
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiNextdotjs size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      NextJS
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiLogoTailwindCss size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      TailwindCSS
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiExpress size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      ExpressJS
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiNodedotjs size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      NodeJS
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-8">Languages</p>
              <div className="flex items-center md:items-start justify-center md:justify-normal">
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiJavascript size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      JavaScript
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiTypescript size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      TypeScript
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiPython size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      Python
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiCplusplus size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      {`C/C++`}
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiLogoJava size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      Java
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-8">Tools</p>
              <div className="flex items-center md:items-start justify-center md:justify-normal">
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiLogoGit size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      Git
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiLogoFigma size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      Figma
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiLogoGithub size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      GitHub
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiLogoDocker size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      Docker
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-8">Databases</p>
              <div className="flex items-center md:items-start justify-center md:justify-normal">
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiMysql size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      MySQL
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiPostgresql size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      PostgreSQL
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="m-4 ml-0 hover:cursor-pointer hover:shadow-neon-orange">
                  <HoverCard>
                    <HoverCardTrigger>
                      <SiMongodb size={30} />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit p-1">
                      MongoDB
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-fit flex flex-col items-center md:items-start p-8 md:flex-row">
          <div className="m-4 font-mono text-center md:text-left">
            <h1 className="text-4xl">Education</h1>
            <h1 className="text-2xl mt-4">
              Bachelor of Engineering in Information Science {`[2020-2024]`}
              <br />
              {`CGPA: 8.06`}
            </h1>
            <p>Malnad College of Engineering, Hassan, Karnataka</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
