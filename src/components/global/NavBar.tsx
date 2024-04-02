import Image from 'next/image'
import React from 'react'

type Props = {}


const NavBar = async (prps:Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40
    backdrop-blur-lg z-[100] flex items-center border-b-[1px]
    border-neutral-900 justify-between">
        <aside className='flex items-center gap-[2px]'>
        <Image
                src={"/galactico/public/galactico.png"}
                alt="Galactico Logo"
                width={15}
                height={15}
                className="shadow-sm" />
        <p className='text-3xl font-bold'>Galactico</p>
           
        </aside>
        <nav className="absolute left-[50%] top-[50%] tranform translate-x-[-50%] translate-y-[-50%] hidden md:block">
            <ul className="flex items-center gap-4 list-none">
                <li>
                    <a href="#home">Products</a>
                </li>
                <li>
                    <a href="#about">Pricing</a>
                </li>
                <li>
                    <a href="#courses">Clients</a>
                </li>
                <li>
                    <a href="#contact">Resources</a>
                </li>
                <li>
                    <a href="#contact">Documentation</a>
                </li>
                <li>
                    <a href="#contact">Enterprise</a>
                </li>
            </ul>
        </nav>

    </header>
  
  )
}

export default NavBar
