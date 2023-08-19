import Image from "next/image"
import React from 'react'
import logo from '@/assets/logo.jpg'
import Link from "next/link"

const NavBar = () => {
    const isLoggedin = false;

    return (
        <div className="p-5 flex justify-between items-center max-w-7xl m-auto">
            <Link href="/">
                <Image
                    src={logo}
                    width={150}
                    height={100}
                    alt="logo"
                    className="rounded-2xl"
                />
            </Link>

            {!isLoggedin ? (
                <div className="flex font-medium gap-8 items-center">
                    <div className="text-md flex gap-6">
                        <button className="hover:text-yellow-600 transition">About Us</button>
                        <button className="hover:text-yellow-600 transition">Pricing</button>
                        <Link href="/docs" className="hover:text-yellow-600 transition">Documentation</Link>
                    </div>
                    <button className="border rounded-xl p-2 hover:bg-yellow-600 transition-all hover:text-white">Sign In</button>
                </div>) : (
                <div className="flex font-medium gap-8 items-center">
                    <div className="text-md flex gap-6">
                        <Link href="/docs" className="hover:text-yellow-600 transition">Dashboard</Link>
                    </div>
                    <div className="text-md flex gap-6">
                        <Link href="/docs" className="hover:text-yellow-600 transition">Docs</Link>
                    </div>
                    <button className="border rounded-xl p-2 hover:bg-yellow-600 transition-all hover:text-white">Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default NavBar