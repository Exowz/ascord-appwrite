"use client";

import { Separator } from "@radix-ui/react-separator";
import Logo from "./logo";

export const Sidebar = () => {
    return (
        <aside className="rounded-xl mx-8 mt-4 fixed top-20 bg-neutral-100 dark:bg-neutral-900 p-4 justify-center flex-col text-center shadow-md">
            <Logo className="h-10 w-10" />
            <div className="my-4">
                <Separator/>
            </div>
            <div>
                T
            </div>
        </aside>
    );
};