"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import NavLink from './NavLink';


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg'>
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map(({ url, title }) => (
          <NavLink key={url} url={url} title={title} />
        ))}
      </div>

      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>M - </span>
          <span className='text-black bg-white w-12 h-8 rounded flex items-center justify-center'>Muiz</span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" width={24} height={24} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" width={24} height={24} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" width={24} height={24} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" width={24} height={24} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" width={24} height={24} alt="github" />
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className='w-10 h-8 flex flex-col justify-between z-50 relative'>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {open &&
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map(({ url, title }) => (
              <Link key={url} href={url}>{title}</Link>
            ))}
          </div>
        }
      </div>

    </div>
  )
}

export default Navbar
