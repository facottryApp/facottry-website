'use client'
import React, { useState } from 'react'
import NavBar from "../landing/NavBar"
import { Quickstart } from "./Quickstart"
import { Installation } from "./Installation"
import { Configuration } from "./Configuration"
import { Usage } from "./Usage"

const tabs = [
    {
        name: 'quickstart',
        label: 'Quickstart',
    },
    {
        name: 'installation',
        label: 'Installation',
    },
    {
        name: 'configuration',
        label: 'Configuration',
    },
    {
        name: 'usage',
        label: 'Usage',
    },
]

const Documentation = () => {
    const [selectedTab, setSelectedTab] = useState('quickstart');

    return (
        <div className="bg-white">
            <div className="py-8 px-8">
                <NavBar />
            </div>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 max-w-7xl mx-auto">
                <ul className="flex flex-wrap -mb-px">
                    {tabs.map((tab, index) => (
                        <li key={index} className="mr-2">
                            <button
                                onClick={() => { setSelectedTab(tab.name) }}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 focus:text-primary focus:border-primary">
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedTab === 'quickstart' && <Quickstart />}
            {selectedTab === 'installation' && <Installation />}
            {selectedTab === 'configuration' && <Configuration />}
            {selectedTab === 'usage' && <Usage />}
        </div>
    )
}

export default Documentation