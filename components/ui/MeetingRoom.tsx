import { cn } from '@/lib/utils'
import { CallControls, CallingState, CallParticipantsList, CallState, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList, User } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import EndCallButton from './EndCallButton'
import Loader from './Loader'

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

const MeetingRoom = () => {
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get('Personal')
    const [Layout, setLayout] = useState<CallLayoutType>('speaker-left')
    const [ShowParticipant, setShowParticipant] = useState(false)
    const {useCallCallingState} = useCallStateHooks();
    const callingState = useCallCallingState();
    if(callingState !== CallingState.JOINED) return <Loader />
    const CallLayout = () => {
        switch (Layout) {
            case 'grid':
                return <PaginatedGridLayout />
            case 'speaker-right':
                return <SpeakerLayout participantsBarPosition={'left'} />
            default:
                return <SpeakerLayout participantsBarPosition={'right'} />
        }
    }
    return (
        <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
            <div className='relative flex size-full items-center justify-center'>
                <div className='flex size-full max-w-[1000px] items-center'>
                    <CallLayout />
                </div>
                <div className={cn('h-[calc(100vh-86px)] hidden ml-2', { 'show-block': ShowParticipant })}>
                    <CallParticipantsList onClose={() => {
                        setShowParticipant(false)
                    }} />
                </div>
            </div>
            <div className='fixed bottom-0 flex w-full items-center justify-center gap-0 flex-wrap pb-1'>
                <CallControls />
                <DropdownMenu>
                    <div className='flex items-center px-2'>
                        <DropdownMenuTrigger className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
                            <LayoutList size={20} className='text-white' />
                        </DropdownMenuTrigger>
                    </div>

                    <DropdownMenuContent className='border-0 bg-black/90 text-white'>
                        {['Grid', 'Speaker-left', 'Speaker-right'].map((item, index) => (
                            <div key={index}>
                                <DropdownMenuItem className='cursor-pointer' onClick={() => { setLayout(item.toLowerCase() as CallLayoutType) }}>
                                    {item}
                                </DropdownMenuItem>
                            </div>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <CallStatsButton />
                <button onClick={() => setShowParticipant((prev) => !prev)} className='px-2'>
                    <div className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
                        <User size={20} className='text-white' />
                    </div>
                </button>
                {!isPersonalRoom && <EndCallButton/>}
            </div>
        </section>
    )
}

export default MeetingRoom