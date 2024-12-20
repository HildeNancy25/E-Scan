'use client';

import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { GoHome } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { usePathname } from 'next/navigation';

export default function DashboardNavBar({ children }) {

    const pathname = usePathname();
    const getPageTitle = () => {
        switch (pathname) {
            case '/dashboard/admin/registerproduct':
                return 'Register product';
            default:
                return 'Dashboard';
        }
    };

    return (
        <div className="flex flex-col">
            <header className="sticky top-0 flex h-14 desktop:h-[55px] items-center gap-4 bg-slate-100 px-6 py-[2.5rem]">
                <Sheet>
                    <SheetTrigger className="min-[1024px]:hidden p-2 transition">
                        <HamburgerMenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <Link href="/">
                                <SheetTitle>Dashboard</SheetTitle>
                            </Link>
                        </SheetHeader>
                        <div className="flex-col items-start space-y-3 mt-[50px] bg-white">
                            <DialogClose asChild>
                                <Link href="/dashboard/admin">
                                    <Button variant="outline" className="w-full flex justify-start pl-4 gap-3">
                                        <GoHome className="h-3 w-3" />
                                        Home
                                    </Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/dashboard/admin/registerproduct">
                                    <Button variant="outline" className="w-full flex justify-start pl-4 gap-3">
                                        <HiOutlineUsers className="h-3 w-3" />
                                        regiser product
                                    </Button>
                                </Link>
                            </DialogClose>
                        </div>
                    </SheetContent>
                </Sheet>

                <div className="flex-1 px-6 z-99">
                    <p className="flex text-yellow-600 items-center justify-between">
                        <span className="text-lg font-semibold">{getPageTitle()}</span>
                    </p>
                </div>

                <nav className="hidden items-center gap-46">
                    <Link href="/dashboard/admin">
                        <Button variant="ghost">Home</Button>
                    </Link>
                    <Link href="/dashboard/admin/registerproduct">
                        <Button variant="ghost">Register product</Button>
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    )
}
