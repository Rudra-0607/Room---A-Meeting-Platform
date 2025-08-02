import StreamVideoProvider from '@/Providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { Children, ReactNode } from 'react'
export const metadata: Metadata = {
  title: "Room",
  description: "Create Your Own Room",
  icons:{
    icon:'/icons/logo.svg'
  }
};
const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default Rootlayout