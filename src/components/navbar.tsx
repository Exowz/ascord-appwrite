"use client";

import { WorkspaceSwitcher } from "./workspace-switcher";

export const Navbar = () => {
    return (
        <nav className="fixed md:top-4 left-0 w-full">
            <div className="flex justify-center">
                <div className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 p-3 md:rounded-xl w-full md:mx-8 shadow-md transition-colors duration-300">
                    <WorkspaceSwitcher />
                </div>
            </div>
        </nav>
    )
}