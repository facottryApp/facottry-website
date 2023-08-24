import React from 'react'
import Sidebar from "./Sidebar"
import { FiEdit3 } from "react-icons/fi"
import ToggleSwitch from "../common/ToggleTheme"
import logo from '@/assets/logo_1.svg'
import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { Accordion } from "../common/Accordion"
import demo_image from '@/assets/player_theme demo.jpg'

const ConfigList = ['lg.json', 'sony.json', 'samsung.json', 'mi.json', 'oneplus.json', 'oppo.json', 'vivo.json']

const PlayerThemes = [
  {
    name: 'Theme 001',
    desc: 'Blue and white theme',
    image: demo_image
  },
  {
    name: 'Theme 002',
    desc: 'Black and white theme',
    image: demo_image
  },
]

const HomeThemes = [
  {
    name: 'Theme 001',
    desc: 'Blue and white theme',
    image: demo_image
  },
  {
    name: 'Theme 002',
    desc: 'Black and white theme',
    image: demo_image
  },
]

const Dashboard = () => {
  return (
    <div className="flex w-screen min-h-screen bg-bggray dark:bg-darkblue300">
      <Sidebar />
      
      {/* Dashboard Home */}
      <div className="flex flex-col m-8 w-full">
        {/* Top Navbar */}
        <nav className="flex justify-between">
          <div className="flex space-x-4 items-center mr-10">
            <h1 className="text-2xl font-bold">Config Dashboard</h1>

            <button className="ml-2 flex items-center gap-2 bg-primary text-white hover:bg-primary400 transition-all p-2 rounded-lg font-medium">
              <FiEdit3 fontSize='1.3rem' />
              <p>Edit Config</p>
            </button>
          </div>

          <div className="flex gap-6 items-center">
            <ToggleSwitch />

            <button className="flex items-center ml-2">
              <Image src={logo} alt="user" width={40} height={40} className="rounded-full bg-gray-200 p-1" />
              <p className="ml-3 mr-2 text-lg font-semibold">Kartik</p>
              <BsChevronDown />
            </button>
          </div>
        </nav>

        <hr className="w-full mt-4" />

        <div className="flex justify-between space-x-8 mt-8">
          {/* Theme Selector Panel */}
          <div className="w-full space-y-4">
            <Accordion title="Player" themes={PlayerThemes} />
            <Accordion title="Home" themes={HomeThemes} />
          </div>

          {/* Config Selection Panel */}
          <div className="flex flex-col bg-white w-full max-w-[240px] rounded-lg h-fit min-h-[50vh] px-5">
            <h1 className="text-xl font-bold mt-4">Configs</h1>
            <hr className="w-full mt-2" />

            {
              ConfigList.map((config, index) => (
                <div className="flex mt-4 mb-2 items-center cursor-pointer">
                  <input id={config} type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />

                  <label htmlFor={config} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{config}</label>
                </div>
              ))
            }

            <hr className="w-full mt-4" />

            <button className="my-4 w-fit flex items-center gap-1 bg-primary text-white hover:bg-primary400 transition-all p-2 rounded-lg font-medium">
              <AiOutlinePlus fontSize='1.3rem' />
              <p>Add Config</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard