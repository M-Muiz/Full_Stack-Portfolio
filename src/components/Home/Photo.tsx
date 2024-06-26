"use client";

import { motion } from "framer-motion"
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";



const Photo = () => {

    const { theme } = useTheme();
    const [color, setColor] = useState("");

    useEffect(() => {
        theme === "dark" ? setColor("#b63207") : setColor("#9a08dd");
    }, [theme])

    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
                    className="w-[298px]  first-letter: h-[298px] xl:w-[498px] xl:h-[498px] absolute">
                    <Image src="/photo.png" priority quality={100} fill alt="Muhammad Muiz" className="object-contain" />
                </motion.div>

                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle cx="253" cy="253" r="250" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo
