
import List from '@/app/_components/Catalog/List'
import React from 'react'
import Application from "@/app/_components/Main/Application";

export default function page() {
  return (
    <div className='w-full bg-white flex flex-col '>
      <List />
      <Application />
    </div>
  )
}
