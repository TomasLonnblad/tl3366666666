"use client"

import { GlassButton } from '@/components/ui/glass-button'
import '@/app/globals2.css'
const GlassButtonDemo = () => {
  return (
       <div className="flex h-[3rem] w-[8rem]  align-middle absolute bottom-0 left-40 h-16 w-16">
    <div className='flex size-full items-center justify-center rounded-xl bg-gray-800'>
      <GlassButton>Glass Button</GlassButton>
    </div></div>
  )
}

export default GlassButtonDemo
