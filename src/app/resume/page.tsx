"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title: "About Me",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Muiz",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 112 884 425",
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
  icon: "/cap.svg",
  title: "My Experience",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
  items: [
    {
      company: "CodeSoft",
      position: "Frontend Developer",
      duration: "~2022 - Present",
    },
    {
      company: "SMIT",
      position: "FullStack Developer",
      duration: "~2022 - Present",
    },
    {
      company: "SMIT",
      position: "FullStack Developer",
      duration: "~2022 - Present",
    },
    {
      company: "SMIT",
      position: "FullStack Developer",
      duration: "~2022 - Present",
    },
    {
      company: "SMIT",
      position: "FullStack Developer",
      duration: "~2022 - Present",
    },
  ]
};
const education = {
  icon: "/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
  items: [
    {
      institue: "Saylani Mass It Training Center",
      degree: "FullStack Web & Mobile Develment Course",
      duration: "~2022 - Present",
    },
    {
      institue: "Saylani Mass It Training Center",
      degree: "FullStack Web & Mobile Develment Course",
      duration: "~2022 - Present",
    },
    {
      institue: "Saylani Mass It Training Center",
      degree: "FullStack Web & Mobile Develment Course",
      duration: "~2022 - Present",
    },
    {
      institue: "Saylani Mass It Training Center",
      degree: "FullStack Web & Mobile Develment Course",
      duration: "~2022 - Present",
    },
    {
      institue: "Saylani Mass It Training Center",
      degree: "FullStack Web & Mobile Develment Course",
      duration: "~2022 - Present",
    },
  ]
};

const skills = {
  icon: "/cap.svg",
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
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
      icon: <FaNodeJs />,
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
                <p className="secondaryText max-w-[600px] mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item: any, index: number) => {
                      return <li key={index} className="bg-slate-300/60 dark:bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-primary dark:text-sky-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="secondaryText max-w-[600px] mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item: any, index: number) => {
                      return <li key={index} className="secondaryBackground h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-primary dark:text-sky-400">{item.duration}</span>
                        <h3 className="text-base max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-primary rounded-full"></span>
                          <p className="secondaryText text-sm">{item.institue}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="secondaryText max-w-[600px] mx-auto xl:mx-0">{skills.description}</p>
                </div>

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
                        <span className="text-base">{item.fieldValue}</span>
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


