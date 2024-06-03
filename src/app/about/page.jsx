"use client"

import React from 'react'
import { motion } from "framer-motion"

const page = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="">

        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          <div className="flex flex-col gap-12 justify-center">
            <h1>BIOGRAPHY</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae corrupti, excepturi enim adipisci sed molestiae, facilis iure tenetur labore eum, assumenda quis voluptate ea. Ipsum obcaecati accusantium labore ullam veritatis!</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque incidunt accusamus non.</span>
            <div className="">
              <svg width="362" height="170" viewBox="0 0 362 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.99999 43C-3.48286 40.5689 18.735 16.2016 21.3333 13.6667C28.2565 6.91232 36.2718 2.73968 46 2.22222C56.2439 1.67733 70.3592 3.47098 79.1111 9.11111C83.5872 11.9957 85.3478 20.2241 86.3333 25C88.3928 34.9804 87.5278 47.3511 87 57.5556C86.5853 65.5734 79.1516 69.7662 75.4444 75.7778C73.7046 78.5991 72.6878 82.1831 70 84.3333C69.0556 85.0888 66.299 86.5453 69.2222 84.7778C77.1477 79.9856 85.6443 71.0901 90.7778 63.4444C95.0055 57.1478 101.124 52.4396 105.222 46.2222C108.486 41.2697 114.497 37.3646 118.778 33.2222C123.555 28.5987 128.114 22.7464 133.778 19.2222C138.145 16.5049 143.42 14.7648 147.556 11.7778C150.444 9.69177 153.004 7 156.778 7C158.534 7 163.01 6.226 163.778 8.22222C165.361 12.3384 165.146 18.4068 165 22.7778C164.434 39.7463 148.684 51.0566 144.556 66.4444C142.277 74.9372 135.154 83.7837 130 91C127.438 94.5874 127.955 99.8429 125.5 103.389C122.806 107.28 122.559 111.11 121.5 115.556C119.507 123.925 125.89 127 133.167 127C140.724 127 139.777 126.404 144.056 121.056C147.221 117.098 149.024 114.678 150 109.556C150.593 106.442 153.857 99.9129 156 97.5555C157.786 95.5905 157 91.6037 157 89.0555C157 88.1727 157.236 82.1111 158.5 82.1111C159.376 82.1111 159.103 95.3549 158.944 96.9444C158.39 102.486 151.214 109.585 154.5 115.5C155.772 117.789 158.104 118.824 160.5 119.889C161.689 120.418 163.216 119.664 164.444 120.111C166.303 120.787 166.736 122 169 122C178.492 122 186 110.127 186 101.222C186 97.8889 186 94.5556 186 91.2222C186 88.8658 186.03 89.983 186 91.8889C185.938 95.8306 184.633 97.9887 183.444 101.556C181.897 106.197 183.986 111.37 182.222 116C181.488 117.928 181.643 121.007 183 122.444C187.455 127.161 196.302 134.698 203 128C205.699 125.301 206.343 121.332 209.444 118.778C213.249 115.645 216.529 112.733 220 109.333C223.936 105.478 225.246 98.9577 228.556 94.4444C230.876 91.2808 231.572 87.9724 233.444 84.7778C236.537 79.5014 231.153 84.4115 231 87.7778C230.771 92.8054 230 97.7327 230 102.778C230 105.84 228 107.366 228 110.5C228 115.705 234.364 119.253 237.611 122.5C239.391 124.279 244.671 126.332 247 125.5C250.216 124.351 250.679 117.955 251.056 114.944C252.02 107.227 251.395 100.135 261.111 99.0555C266.189 98.4914 270.13 97 275.444 97C279.63 97 283.815 97 288 97C291.333 97 294.667 97 298 97C303.661 97 295.189 102.553 293.167 104.778C286.306 112.325 282.537 121.758 277.889 130.722C276.169 134.039 275.048 137.384 272.444 140.111C270.529 142.118 267.683 145.495 267.167 148.333C267.011 149.187 282.576 149.204 283.667 149.333C295.336 150.72 305.769 157.075 314.5 164.667C322.302 171.451 329.956 166.661 338.944 162.667C347.297 158.954 354.226 155.694 359 148.056C361.047 144.781 360.237 140.797 358 138" stroke="white" stroke-width="3" stroke-linecap="round" />
              </svg>
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          <div className="flex flex-col gap-12 justify-center">
            <h1>SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer">JavaScript</div>
            </div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1>EXPERIENCE</h1>
            <div className="">

              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>

              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

            </div>
          </div>
        </div>
        <div className="hidden"></div>
      </div>
    </motion.div>
  )
}

export default page
// changes