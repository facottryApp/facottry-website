import Image from "next/image"
import React from 'react'
import logo_2 from '@/assets/logo_2.svg'
import Link from "next/link"
import ToggleSwitch from "./ToggleTheme"

const NavBar = () => {
    return (
        <nav>
            {/* Desktop Navbar */}
            <div className="flex justify-between max-w-7xl items-center m-auto">
                <div className="flex gap-2 items-center">
                    <Image
                        src={logo_2}
                        alt="FacOTTry"
                        width={50}
                        height={50}
                    />
                    <p className="font-extrabold text-2xl">
                        Fac<span className="text-primary">OTT</span>ry
                    </p>
                </div>
                <div className="space-x-4 hidden lg:flex font-semibold">
                    <Link href={'#about'} className="hover:text-primary transition-all">About</Link>
                    <Link href={'#demo'} className="hover:text-primary transition-all">Demo</Link>
                    <Link href={'#videos'} className="hover:text-primary transition-all">Videos</Link>
                    <Link href={'#testimonial'} className="hover:text-primary transition-all">Testimonial</Link>
                    <Link href={'#pricing'} className="hover:text-primary transition-all">Pricing</Link>
                    <Link href={'#contact'} className="hover:text-primary transition-all">Contact</Link>
                </div>
                <div className="flex gap-8 items-center">
                    <div className="-mb-1">
                        <ToggleSwitch />
                    </div>

                    <Link href='/login' className="flex-shrink-0 border border-black px-10 py-2 rounded-full hover:bg-black hover:text-white transition">
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar