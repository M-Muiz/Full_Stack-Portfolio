"use client"

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link  from "next/link";


const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  
const MobileNav = () => {

const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <p className="text-primary text-xl">icon</p>
            </SheetTrigger>
            <SheetContent>Content</SheetContent>
        </Sheet>
    )
}

export default MobileNav
