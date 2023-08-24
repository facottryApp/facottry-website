'use client'
import React from 'react';
import { FaTh, FaChartLine, FaFileAlt, FaShoppingCart, FaDollarSign, FaPhone, FaCog } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'
import logo_2 from '@/assets/logo_2.svg'

const SidebarButton = ({ href, label, icon }: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <Link href={href} className="flex items-center p-3 hover:text-primary transition">
    <span className="mr-3 text-xl">{icon}</span>
    {label}
  </Link>
);

const Sidebar = () => {
  return (
    <div className="bg-white p-8 pl-5 dark:bg-darkblue">
      <Link href={'/'} className="flex gap-2 items-center mb-8">
        <Image
          src={logo_2}
          alt="FacOTTry"
          width={50}
          height={50}
        />
        <p className="font-extrabold text-2xl text-black dark:text-white">
          Fac<span className="text-primary">OTT</span>ry
        </p>
      </Link>

      <div className="font-medium text-slate-700 dark:text-white">
        <SidebarButton href="/home" label="Dashboard" icon={<FaTh />} />
        <SidebarButton href="/home/analytics" label="Analytics" icon={<FaChartLine />} />
        <SidebarButton href="/home/docs" label="Documentation" icon={<FaFileAlt />} />
        <SidebarButton href="/home/buy-plan" label="Upgrade" icon={<FaShoppingCart />} />
        <SidebarButton href="/home/calculator" label="Bill Calculator" icon={<FaDollarSign />} />
        <SidebarButton href="/home/contact" label="Contact Us" icon={<FaPhone />} />
        <SidebarButton href="/home/settings" label="Settings" icon={<FaCog />} />
      </div>

      <hr className="mt-4 w-full"/>
    </div>
  );
};

export default Sidebar;
