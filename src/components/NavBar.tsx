import React from 'react'

const NavBar = () => {
    return (
        <div className="p-5 flex justify-between items-center max-w-7xl m-auto">
            <p className="text-2xl font-extrabold text-purple-900">FacOTTry</p>
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