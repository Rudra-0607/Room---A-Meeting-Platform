'use client'
import { Call, DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './button'

const MeetingSetup = ({setIssetupcomplete} : {setIssetupcomplete : (value:boolean)=>void}) => {
    const [IsMicCamToggleOn, setIsMicCamToggleOn] = useState(false)
    const call = useCall();
    useEffect(()=>{
        if(IsMicCamToggleOn){
            call?.camera.disable();
            call?.microphone.disable();
        }else{
            call?.camera.enable();
            call?.microphone.enable();
        }
    },[IsMicCamToggleOn, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col justify-center items-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>Setup</h1>
        <VideoPreview />
        <div className='flex h-16 items-center justify-center gap-3 '>
            <label htmlFor="" className='flex items-center justify-center gap-2 font-medium'>
                <input type="checkbox" name="" id="" checked={IsMicCamToggleOn} onChange={(e)=>{
                    setIsMicCamToggleOn(e.target.checked)
                }}/>
                Join With Mic And Camera Off
            </label>
            <DeviceSettings />
        </div>
        <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={()=>{
            call.join();
            setIssetupcomplete(true);
        }}>
                Join Meeting
        </Button>
    </div>
  )
}

export default MeetingSetup