"use client";


import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import SliderButtons from "@/components/work/SliderButtons";


const projects = [
  {
    num: "01",
    category: "FullStack Project",
    title: "Foodie",
    description: "A powerful ",
    stack: [
      { name: "React Js" }, { name: "Css3" }, { name: "Node Js" }, { name: "MongoDb" }, { name: "Cloudinary" }],
    image: "/photo.png",
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
    image: "/photo.png",
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
    image: "/photo.png",
    live: "",
    github: ""
  },
];

const page = () => {

  const [project, setProject] = useState(projects[0])

  const handleChnage = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500 capitalize">{project.category}</h2>

              <p className="secondaryText">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item: any, index: number) => {
                  return (
                    <li className="text-xl text-primary" key={index}>{item.name}{index !== project.stack.length - 1 && ","}</li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full secondaryBackground flex items-center justify-center group border border-primary">
                        <BsArrowUpRight className="text-2xl text-black dark:text-white group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full secondaryBackground flex items-center justify-center group border border-primary">
                        <BsGithub className="text-2xl text-black dark:text-white group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>

            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleChnage}>
              {projects.map((item: any, index: number) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] secondaryBackground">
                      <div></div>


                      <div className="relative w-full h-full border border-primary rounded-md">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              <SliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" iconStyles="" btnStyles="secondaryBackground text- hover:text-white dark:text-white hover:bg-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all border border-primary rounded-md" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default page
