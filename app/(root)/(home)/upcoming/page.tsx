import Calllist from '@/components/ui/Calllist'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold '>
        Upcoming
      </h1>
      <Calllist type="upcoming"/>
    </section>
  )
}

export default Upcoming