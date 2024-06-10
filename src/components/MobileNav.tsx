"use client"

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"


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
        <CiMenuFries className="text-primary text-3xl" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className='text-4xl font-semibold'>M-
              <span className="text-primary">
                Muiz
              </span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, ind) => {
            return <Link className={`${link.path === pathname && "text-primary border-b-2 border-primary"} text-xl hover:text-primary transition-all capitalize`} href={link.path} key={ind}>{link.name}</Link>
          })}
        </nav>

      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
