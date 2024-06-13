"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5 } from "react-icons/fa";

const about = {
  title: "About Me",
  Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
  info: [
    {
      fieldName: "Nmae",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Nmae",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Nmae",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Nmae",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Nmae",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Nmae",
      fieldValue: "John Doe",
    },
  ]
};

const experience = [
  {
    icon: "/cap.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
    items:[
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
    ]
  }
];
const education = [
  {
    icon: "/cap.svg",
    title: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
    items:[
      {
        company: "Saylani Mass It Training Center",
        degree: "FullStack Web & Mobile Develment Course",
        duration: "~2022 - Present",
      },
    ]
  }
];
const skills = [
  {
    icon: "/cap.svg",
    title: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
    skillList:[
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        
      },
    ]
  }
];



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
experience
  </TabsContent>
</div>


  </Tabs>
 </div>
    </motion.div>
  )
}

export default page

