'use client';
import clsx from 'clsx';
import { GoHome } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function DashboardSideBar() {
    const pathname = usePathname();

    return (
        <div className="desktop:block hidden h-full">
            <div className="sticky top-0 flex h-full max-h-screen flex-col gap-[3rem] py-[2rem] 
                text-white bg-[#0B3004] border-r">
                <div className="flex h-[55px] items-center justify-between px-3 w-full">
                    <div className="flex items-center gap-5">
                        <Image
                            src="/logo.png"
                            alt="LOGO"
                            width={55}
                            height={75}
                            className="rounded-full"
                        />
                        <p className="flex flex-col text-4xl font-serif">E-SCAN 
                            <span className="text-sm text-gray-400">
                                Your wellness, decoded
                            </span>
                            </p>
                    </div>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start pl-5 text-md font-semiBold">
                        <div className='flex flex-col gap-3'>
                            <Link
                                href="/dashboard/admin"
                                className={clsx(
                                    "flex items-center gap-4 rounded-lg px-3 py-2  transition-all",
                                    pathname === '/dashboard/admin' && "text-[#F79E1B]"
                                )}
                            >
                                <GoHome className="" />
                                Home
                            </Link>
                            <Link
                                href="/dashboard/admin/registerproduct"
                                className={clsx(
                                    "flex items-center gap-4 rounded-lg px-3 py-2 transition-all hover:text-[#F79E1B]",
                                    pathname.startsWith('/dashboard/admin/registerproduct') && "text-[#F79E1B]"
                                )}
                            >
                                <LuShoppingCart className="" />
                                Register product
                            </Link>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
