"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { MdVerified } from "react-icons/md";
import { GiSkullCrossedBones } from "react-icons/gi";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "0311-2884425"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mmuizsiddiqui@gmal.com"
  },
  {
    icon: <FaEarthAsia />,
    title: "Country",
    description: "Pakistan"
  },
];

const page = () => {

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await emailjs.sendForm(
        "service_bw0axwa",
        "template_e1s01s1",
        form.current as any,
        "7rZJQACfHvmnUQEgJ"

      )
      console.log(res)
      setLoading(false);
      setMessage("Your Message has been sent successfully.")

    } catch (error) {
      setLoading(false);
      setMessage("Failed to send Message.")
    }
  };


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form as any} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 secondaryBackground rounded-xl">
              <h3 className="text-2xl xl:text-4xl text-primary">Let's Work Together</h3>
              <p className="secondaryText text-sm">I am excited to contribute to a professional team and work on meaningful projects as a FullStack Web Developer.</p>
              <div className="grid grid-cols-1 gap-6">
                <Input required name="from_name" type="text" placeholder="Your Name" className="max-w-[350px]" />
                <Input required name="from_email" type="email" placeholder="Email Address" className="max-w-[350px]" />
              </div>
              <Textarea required name="message" className="h-[200px]" placeholder="Type your message here" />
              <Button
                value="Send" type="submit" size="md" className="max-w-40 disabled:opacity-60" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>
              {message &&
                <h3 className={`text-sm sm:text-base flex items-center gap-2 ${message.includes("sent") ? "text-green-600" : "text-red-600"}`}>
                  {message.includes("sent") ? <MdVerified /> : <GiSkullCrossedBones color="text-inherit" />} {message}</h3>
              }
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
