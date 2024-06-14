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
      { name: "Html5" }, { name: "Html5" }, { name: "Html5" }],
      image: "https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?w=198&h=186&c=7&r=0&o=5&pid=1.7",
      live: "",
      github: ""
  },
  {
    num: "01",
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
    num: "01",
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
  return (
    <div>
      work
    </div>
  )
}

export default page
