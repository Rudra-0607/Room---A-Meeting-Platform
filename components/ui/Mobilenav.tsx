'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Mobilenav = () => {
    const pathname = usePathname()

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src='/icons/hamburger.svg'
                        width={36}
                        height={36}
                        alt='hamburger'
                        className='cursor-pointer sm:hidden'
                    />
                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-[#1c1f2e]'>
                    <Link href='/' className='flex items-center gap-1 px-4 pt-4'>
                        <Image
                            src="/icons/logo.svg"
                            width={32}
                            height={32}
                            alt='zoom logo'
                            className='max-sm:size-10'
                        />
                        <p className='text-[23px] font-bold text-white'>Room</p>
                    </Link>

                    <div className='flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto px-3'>
                        <SheetClose asChild>
                            <section className='flex h-full flex-col gap-6 pt-4 text-white'>
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route

                                    return (
                                        <SheetClose asChild key={link.label}>
                                            <Link
                                                href={link.route}
                                                className={cn(
                                                    'flex gap-4 items-center p-4 rounded-lg w-full transition-all',
                                                    {
                                                        'bg-[#0e78f9]': isActive,
                                                    }
                                                )}
                                            >
                                                <Image
                                                    src={link.imgUrl}
                                                    alt={link.label}
                                                    width={20}
                                                    height={20}
                                                />
                                                <p className='text-lg font-semibold'>{link.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default Mobilenav
