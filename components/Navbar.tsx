import Image from 'next/image';
import React from 'react'
import MobileNav from './MobileNav';
import Link from 'next/link';

const Navbar = () => {
  
  return (
    <div className="bg-smoke-50 flex justify-between items-center h-20  p-6 z-50 border border-b-smoke-200">
      <Link href={'/home'} className='flex justify-center items-center gap-1'>
        <Image
          src={"/bubble-logo.svg"}
          width={48}
          height={48}
          alt="Brand Logo"
        />

        <div className='text-2xl font-bold text-smoke-950 max-sm:hidden'>Bubble</div>
      </Link>
      <div className='flex justify-center items-center gap-4'>
        <div>
         <MobileNav/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
