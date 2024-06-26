"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { SiTypescript } from "react-icons/si";
import { IoLogoAngular } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql, DiNodejs } from "react-icons/di";
import { IoConstructSharp } from "react-icons/io5";


const about = {
  title: "About Me",
  description: "As a FullStack Developer.I'm dedicated to creating seamless digital experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Muiz",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 312 288 4425",
    },
    {
      fieldName: "Natinality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ year",
    },
    {
      fieldName: "Email",
      fieldValue: "mmuizsiddiqui@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Urdu, English",
    }
  ]
};

const experience: any = {
  title: "My Experience",
  items: [
    {
      company: "CodeSoft",
      position: "Frontend Developer",
      duration: "October2023 – November2023 (1month)",
    },
    {
      company: "SMIT",
      position: "FullStack Developer",
      duration: "September2023 – December2023 (4months)",
    },
    {
      company: "YamBaba",
      position: "FullStack Developer",
      duration: "January2024 – February2024 (1months)",
    },
  ]
};
const education = {
  title: "My Education",
  items: [
    {
      institue: "Saylani Mass It Training Center",
      degree: "FullStack Web & Mobile Develment Course",
      duration: "~2022 - Present",
    },
    {
      institue: "Government Superior Science Collage",
      degree: "FSC in Pre-Engineering",
      duration: "~2023 – Present",
    },
    {
      institue: "Saylani Mass It Training Center",
      degree: "JavaScript Course",
      duration: "~2022 - 1 month",
    },
    {
      institue: "Green Public High School",
      degree: "Matriculation in Science",
      duration: "~Complete in 2022 with A-One",
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "I am a quick learner and I am always looking forward to expanding my knowledge and skill set.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",

    },
    {
      icon: <FaCss3 />,
      name: "CSS",

    },
    {
      icon: <FaJs />,
      name: "JavaScript",

    },
    {
      icon: <FaReact />,
      name: "React Js",

    },
    {
      icon: <FaFigma />,
      name: "Figma",

    },
    {
      icon: <DiNodejs />,
      name: "Node Js",

    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",

    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",

    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",

    },
    {
      icon: <IoLogoAngular />,
      name: "Angular",

    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",

    },
    {
      icon: <FaGitAlt />,
      name: "Git",

    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",

    },
    {
      icon: <DiMysql />,
      name: "MySQL",

    },
  ]
};



import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const page = () => {


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs className="flex flex-col  xl:flex-row gap-[60px]" defaultValue="experience">



          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">


            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>


          <div className="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item: any, index: number) => {
                      return <li key={index} className="bg-slate-300/60 dark:bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-primary dark:text-sky-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-fit text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-primary rounded-full"></span>
                          <p className="secondaryText">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              {/* <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item: any, index: number) => {
                      return <li key={index} className="secondaryBackground h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-primary dark:text-sky-400">{item.duration}</span>
                        <h3 className="text-base max-w-[260px] min-h-fit text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-primary rounded-full"></span>
                          <p className="secondaryText text-sm">{item.institue}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>

              </div> */}

              <div className="flex items-center justify-center text-4xl xl:text-8xl gap-2">
                <IoConstructSharp />Working
              </div>

            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="secondaryText max-w-[600px] mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[340px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill: any, index: number) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] secondaryBackground rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-primary transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="secondaryText max-w-[600px] mx-auto xl:mx-0">{about.description}</p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item: any, index: number) => {
                    return (
                      <li key={index} className="flex justify-between items-center xl:justify-start gap-4">
                        <span className="secondaryText">{item.fieldName}</span>
                        <span className="text-base font-semibold">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>


              </div>
            </TabsContent>
          </div>


        </Tabs>
      </div>
    </motion.div>
  )
}

export default page


// gekki