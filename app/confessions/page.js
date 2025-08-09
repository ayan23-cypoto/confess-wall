import React from 'react'
import Input from '../components/Input'
import ConfessionsCard from '../components/ConfessionsCard'
import ConfessionList from '../components/ConfessionsList'

export const metadata = {
  title: "AnonConfess ⋅ Wall",
  description: "Read Confessions",
};

const Confessions = () => {
  return (
    <div className='py-4 md:py-12 flex flex-col gap-8 sm:gap-10'>
      <h1 className={`text-5xl sm:text-6xl md:text-7xl text-center`}>Confession Wall</h1>
      <Input />
      <ConfessionList />
    </div>
  )
}

export default Confessions