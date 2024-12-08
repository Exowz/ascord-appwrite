"use client";

import { UserButton } from "@/features/auth/components/user-button"
import ModeToggle from "./mode-toggle"
import { GoCheckCircle, GoHome } from "react-icons/go";
import { SettingsIcon, UsersIcon } from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import { TbMessage } from "react-icons/tb";

export const Dock = () => {
    const routes = [
        {
            title: "Home",
            icon: (<GoHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "",
        },
        {
            title: "Tasks",
            icon: (<GoCheckCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "/tasks",
        },
        {
            title: "Members",
            icon: (<UsersIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "/members",
        },
        {
            title: "Settings",
            icon: (<SettingsIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "/dm",
        },
        {
            title: "Direct Messages",
            icon: (<TbMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "",
        }
    ];

    return (
        <div className="fixed bottom-4 left-0 w-full">
            <div className="relative gap-4">
                <div className="fixed bottom-4 h-16 w-16 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 shadow-md md:mx-8">
                    <UserButton />
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <FloatingDock 
                items={routes}/>
            </div>
            <div className="fixed bottom-4 right-4 h-16 w-36 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 md:mx-8 shadow-md">
                <ModeToggle />
            </div>
        </div>
    )
}