import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { ToggleTheme } from '../ToggleTheme'

const Header = () => {
  return (
    <header className='py-8 xl:py-12'>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>M-
            <span className="text-primary">
              Muiz
            </span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button>Hire Me</Button>
          <ToggleTheme />
        </div>



        <div className="xl:hidden">
          <MobileNav />
        </div>


      </div>
    </header>
  )
}

export default Header