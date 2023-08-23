import React from 'react'
import Sidebar from "../interfaces/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex justify-between w-screen h-screen bg-slate-200">
        <Sidebar />

        <div className="w-full bg-white rounded-xl m-10">

        </div>

    </div>
  )
}

export default Dashboard