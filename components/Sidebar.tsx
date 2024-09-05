"use client"
import React from 'react'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
   const pathName = usePathname();
  return (
    <div className='sticky bg-smoke-50 left-0 top-0 flex w-fit flex-col justify-between p-6 pt-28 border border-r-smoke-200  h-screen max-sm:hidden lg:w-[264px]'>
      <div className=' flex flex-1 flex-col gap-6'>
        {sidebarLinks.map(item => {
         
          const isActive =  pathName === item.url || pathName.startsWith(`${item.url}/`)
          return (
            <Link
              href={item.url}
              key={item.label}
              className={`${
                isActive && "bg-white rounded-lg"
              } flex gap-4 items-center p-3 justify-start`}
            >
              <Image src={item.icon} alt="" width={24} height={24} />
              <div
                className={"text-blue-500 text-lg font-semibold max-lg:hidden"}
              >
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default Sidebar
