"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { FiDownload } from "react-icons/fi"

const DownloadCv = () => {
    const fileRef: any = useRef(null);
    return (
        <>
            <a ref={fileRef} href="./photo.png" download="cv.pdf" hidden ></a>
            <Button onClick={() => fileRef.current?.click()} size="lg" className="flex items-center gap-2 uppercase">
                <span> Download CV</span>
                <FiDownload className="text-xl" />
            </Button>
        </>
    )
}

export default DownloadCv
