"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
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

const Nav = () => {

  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, ind) => {
        return (
          <Link href={link.path} key={ind} className={`${link.path === pathname && "text-primary border-b-2 border-primary"} font-medium hover:text-primary transition-all capitalize}`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
