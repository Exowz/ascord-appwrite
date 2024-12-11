"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";

import { useLogout } from "../api/use-logout";

import { useCurrent } from "../api/use-current";
import { Loader, LogOut } from "lucide-react";

export const UserButton = () => {
    const { mutate: logout } = useLogout();
    const { data: user, isLoading } = useCurrent();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center size-10 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
                <Loader className="size-4 animate-spin text-muted-foreground dark:text-neutral-400" />
            </div>
        );
    }

    if (!user) {
        return null;
    }

    const { name, email } = user;

    const avatarFallback = name
        ? name.charAt(0).toUpperCase()
        : email.charAt(0).toUpperCase() ?? "U";

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300 dark:border-neutral-700">
                    <AvatarFallback className="bg-neutral-200 dark:bg-neutral-800 font-bold text-neutral-500 dark:text-neutral-400 flex items-center justify-center">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                side="bottom"
                className="w-60 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700"
                sideOffset={10}
            >
                <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
                    <Avatar className="size-[52px] transition border border-neutral-300 dark:border-neutral-700">
                        <AvatarFallback className="bg-neutral-200 dark:bg-neutral-800 text-xl font-bold text-neutral-500 dark:text-neutral-400 flex items-center justify-center">
                            {avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                            {name || "User"}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {email}
                        </p>
                    </div>      
                </div>
                <Separator className="mb-1 dark:bg-neutral-700" />
                <DropdownMenuItem 
                    onClick={() => logout()}
                    className="h-10 flex items-center justify-center text-red-700 dark:text-red-500 font-bold cursor-pointer">
                    <LogOut className="size-4 mr-2" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};