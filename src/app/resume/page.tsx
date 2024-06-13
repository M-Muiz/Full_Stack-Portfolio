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



import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";


const page = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>
      resume
    </motion.div>
  )
}

export default page

