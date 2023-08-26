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
      <div className="flex flex-col w-full m-8">
        {/* Top Navbar */}
        <nav className="flex justify-between">
          <div className="flex items-center mr-10 space-x-4">
            <h1 className="text-2xl font-bold">Config Dashboard</h1>

            <button className="flex items-center gap-2 p-2 ml-2 font-medium text-white transition-all rounded-lg bg-primary hover:bg-primary400">
              <FiEdit3 fontSize='1.3rem' />
              <p>Edit Config</p>
            </button>
          </div>

          <div className="flex items-center gap-6">
            <ToggleSwitch />

            <button className="flex items-center ml-2">
              <Image src={logo} alt="user" width={40} height={40} className="p-1 bg-gray-200 rounded-full" />
              <p className="ml-3 mr-2 text-lg font-semibold">Kartik</p>
              <BsChevronDown />
            </button>
          </div>
        </nav>

        <hr className="w-full mt-4" />

        <div className="flex justify-between mt-8 space-x-8">
          {/* Theme Selector Panel */}
          <div className="w-full h-fit p-8 space-y-4 bg-white rounded-lg dark:bg-darkblue">
            <Accordion title="Player" themes={PlayerThemes} />
            <Accordion title="Home" themes={HomeThemes} />
          </div>

          {/* Config Selection Panel */}
          <div className="flex flex-col bg-white w-full max-w-[240px] rounded-lg h-fit min-h-[50vh] px-5 dark:bg-darkblue">
            <h1 className="mt-4 text-xl font-bold">Configs</h1>
            <hr className="w-full mt-2" />

            {
              ConfigList.map((config, index) => (
                <div key={index} className="flex items-center mt-4 mb-2 cursor-pointer">
                  <input id={config} type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                  <label htmlFor={config} className="ml-2 text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-300">{config}</label>
                </div>
              ))
            }

            <hr className="w-full mt-4" />

            <button className="flex items-center gap-1 p-2 my-4 font-medium text-white transition-all rounded-lg w-fit bg-primary hover:bg-primary400">
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