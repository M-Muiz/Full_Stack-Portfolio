"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MdOutlineConstruction } from "react-icons/md";
import { FaAddressBook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "0311-299448820"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mmuizsiddiqui@gmal.com"
  },
  {
    icon: <FaAddressBook />,
    title: "Address",
    description: "Pakistan"
  },
];


const page = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 secondaryBackground rounded-xl">
              <h3 className="text-2xl xl:text-4xl text-primary">Let's Work Together</h3>
              <p className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, praesentium?</p>
              <div className="grid grid-cols-1 gap-6">
                <Input type="text" placeholder="Your Name" className="max-w-[350px]" />
                <Input type="email" placeholder="Email Address" className="max-w-[350px]" />
              </div>
              <Textarea className="h-[200px]" placeholder="Type your message here" />
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, ind) => {
                return <li key={ind} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] secondaryBackground text-primary rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="">
                    <p className="seondaryText">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default page
