import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"


const page = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">Hello I'm <br /> <span className="text-primary">Muiz Siddiqui</span></h1>
            <p className="max-w-[500px] mb-9 text-black/80 dark:text-white/80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eius excepturi quasi earum praesentium facilis!</p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles='flex gap-6' iconStyles="h-9 w-9 flex items-center justify-center border border-primary rounded-full text-primary text-base hover:bg-primary hover:text-black hover:transition-all duration-500" />
              </div>
            </div>

          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
