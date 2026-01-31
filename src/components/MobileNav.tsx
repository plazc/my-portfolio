"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 sm:hidden">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-neutral-500 rounded-lg sm:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5A.75.75 0 012.75 14h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                                ></path>
                            </svg>
                        </button>
                        <Link href="/" className="flex ms-2 md:me-24">
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                AZD
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="px-4 pb-4 bg-background border-b border-neutral-200 dark:border-neutral-800">
                    <ul className="space-y-2 font-medium mt-2">
                        <li><Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-foreground">Home</Link></li>
                        <li><Link href="/#about" onClick={() => setIsOpen(false)} className="block py-2 text-foreground">About</Link></li>
                        <li><Link href="/#experience" onClick={() => setIsOpen(false)} className="block py-2 text-foreground">Experience</Link></li>
                        <li><Link href="/#education" onClick={() => setIsOpen(false)} className="block py-2 text-foreground">Education</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
