import Image from "next/image"
import React from 'react'
import logo from '@/assets/logo.jpg'

const NavBar = () => {
    return (
        <div className="p-5 flex justify-between items-center max-w-7xl m-auto">
            <Image
                src={logo}
                width={150}
                height={100}
                alt="logo"
                className="rounded-2xl"
            />

            <div className="flex font-medium gap-8 items-center">
                <div className="text-md flex gap-6">
                    <button className="hover:text-purple-600 transition">About Us</button>
                    <button className="hover:text-purple-600 transition">Pricing</button>
                    <button className="hover:text-purple-600 transition">Documentation</button>
                </div>
                <button className="border rounded-xl p-2 hover:bg-purple-600 transition-all hover:text-white">Sign In</button>
                </div>
        </div>
    )
}

export default NavBar