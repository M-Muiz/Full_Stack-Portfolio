"use client";


import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
    stack: [
      { name: "Html5" }, { name: "Css3" }, { name: "JavaScript" }],
    image: "https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?w=198&h=186&c=7&r=0&o=5&pid=1.7",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "frontend",
    title: "Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
    stack: [
      { name: "Html5" }, { name: "Html5" }, { name: "Html5" }],
    image: "https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?w=198&h=186&c=7&r=0&o=5&pid=1.7",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "frontend",
    title: "Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt ipsa exercitationem odit illum voluptatibus saepe quisquam omnis expedita aliquam.",
    stack: [
      { name: "Html5" }, { name: "Html5" }, { name: "Html5" }],
    image: "https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?w=198&h=186&c=7&r=0&o=5&pid=1.7",
    live: "",
    github: ""
  },
];


const page = () => {

  const [project, setProject] = useState(projects[0])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="min-h-[80vh] flex justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-primary transition-all duration-500 capitalize">{project.category}</h2>

              <p className="secondaryText">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item: any, index: number) => {
                  return (
                    <li className="text-xl text-primary" key={index}>{item.name}{index !== project.stack.length - 1 && ","}</li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>

              <div className="">
                <div>
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full secondaryBackground flex items-center justify-center group">
                          <BsArrowUpRight className="text-3xl text-black dark:text-white group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>


                </div>
              </div>

            </div>
          </div>
          <div className="w-full xl:w-[50%]">text</div>
        </div>
      </div>
    </motion.div>
  )
}

export default page
