"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";


export function ToggleTheme() {
    const { setTheme, theme } = useTheme()

    return (
        <>
            {theme === "dark" ? (
                <Button
                    variant="ghost"
                    className="w-9 h-9 p-0"
                    onClick={() => setTheme("light")}
                >
                    <MdOutlineLightMode className="w-5 h-5" />
                </Button>
            ) : (
                <Button
                    variant="ghost"
                    className="w-9 h-9 p-0"
                    onClick={() => setTheme("dark")}
                >
                    <BsMoonStarsFill className="w-5 h-5" />
                </Button>
            )}
        </>
    )
}