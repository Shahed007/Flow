"use client";
import { Modal } from '@/components/ui/Modal'
import { Input } from '@/components/ui/input'
import {     Calculator, Calendar, Command, CreditCard,  Search, Settings,  Smile, } from 'lucide-react'
import React, {  useEffect, useState } from 'react'
import User from './User';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import Mobile from './Mobile';


export default function Navbar() {
    const [searchOpen, setSearchOpen] = useState<undefined | 'search'>(undefined);

    useEffect(()=>{
        const handleKey = (e: KeyboardEvent) => {
          if((e.ctrlKey || e.metaKey ) && e.key === "k"){
            e.preventDefault();
            setSearchOpen('search')
          }
        }
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('keydown', handleKey);
            document.removeEventListener('keydown', handleKey);
        }
    }, [])
  return (
    <>
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-between">
       <div className='relative sm:block hidden'>
        <Search className='absolute top-2.5 left-2.5 h-4 w-4'/>
        <Input onClick={()=> setSearchOpen('search')} placeholder='CTRL + K' className='pl-8'/>
       </div>

       <Mobile/> 
      
       <ul className='sm:flex hidden items-center gap-6 text-base font-medium'>
        <li><Button variant={"ghost"} className='text-gray-500 hover:text-black duration-200'><Link href='/'>Home</Link></Button></li>
        <li><Button variant={"ghost"} className='text-gray-500 hover:text-black duration-200'><Link href='/documentation'>Doc</Link></Button></li>
        <li><Button variant={"ghost"} className='text-gray-500 hover:text-black duration-200'><Link href='/about-flow'>About</Link></Button></li>
    
       </ul>
       <div className='flex gap-6 items-center'>
       <Button onClick={()=> setSearchOpen('search')} variant={'outline'}  className='rounded-full text-center sm:hidden block'>
      <Search className="mr-2 h-4 w-4" /> 
       </Button>
        <User/>
      </div>
    </header>
    <Modal
       isOpen={searchOpen === 'search'} 
       closeModal={()=> setSearchOpen(undefined)}
       >
      <h1>Hello</h1>
       </Modal>
    </>
  )
}
