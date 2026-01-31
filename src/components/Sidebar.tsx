"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-neutral-200 dark:border-neutral-800 bg-background">
            <div className="h-full px-3 py-4 overflow-y-auto">
                <div className="mb-10 px-2 mt-4">
                    <h1 className="text-xl font-bold tracking-tight">Ahmet Z. Devran</h1>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        Electrical & Electronics Eng. Student
                    </p>
                </div>

                <ul className="space-y-2 font-medium">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center p-2 rounded-lg group transition-colors duration-200 ${isActive
                                            ? "bg-orange-50 dark:bg-orange-950/20 text-accent"
                                            : "text-foreground hover:bg-orange-50 dark:hover:bg-neutral-900"
                                        }`}
                                >
                                    <span className={`ms-3 ${isActive ? 'font-semibold' : ''}`}>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="absolute bottom-10 px-5 w-full">
                    <div className="flex gap-4 text-neutral-500">
                        {/* Social Icons could go here */}
                        {/* Minimalist text links for now */}
                        <a href="https://github.com/adevran" target="_blank" className="hover:text-accent transition-colors">GitHub</a>
                        <a href="https://linkedin.com/in/adevran" target="_blank" className="hover:text-accent transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </aside>
    );
}
