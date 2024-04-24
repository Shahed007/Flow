
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
       <form className='relative'>
        <Search className='absolute top-2.5 left-2.5 h-4 w-4'/>
        <Input className='pl-8'/>
       </form>
    </header>
  )
}
