"use client"

import * as React from "react"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export function ToggleTheme() {
    const { setTheme, theme } = useTheme()
console.log(theme)

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
        <MdDarkMode className="w-5 h-5" />
    </Button>
)}
</>
    )
}
