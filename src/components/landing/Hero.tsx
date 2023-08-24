import React from 'react'
import hero_illustration from '@/assets/hero_illustration.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <div id="hero" className="flex flex-col-reverse items-center justify-between h-full max-w-7xl mx-10 sm:flex-row sm:mt-14 xl:mx-auto">
      <div className="sm:w-[40%] lg:w-[35%] space-y-4 mt-10 sm:mt-0">
        {/* Text */}
        <h1 className="text-5xl text-black font-bold font-lexend xl:text-6xl">
          <p>OTT Factory,<span className=""> For All Your Needs</span></p>

        </h1>
        <p className="text-body font-light text-slate-500">
          A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!
        </p>

        {/* Button */}
        <Link href="/auth/signup" className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-cyan-600 rounded-full shadow-2xl group">
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-500 bg-primary rounded-full blur-md ease"></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-90 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-sky-500 rounded-full blur-md"></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-primary rounded-full blur-md"></span>
          </span>
          <span className="relative text-white">Sign Up</span>
        </Link>
      </div>

      {/* Hero Image */}
      <Image
        src={hero_illustration}
        alt="logo"
        title="Hero Image"
        priority={true}
        className="w-[45vh] sm:w-[45%] mt-5 sm:mt-0"
      />
    </div>
  )
}
