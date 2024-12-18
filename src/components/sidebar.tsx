"use client";

import { Separator } from "@radix-ui/react-separator";
import Logo from "./logo";
import { Projects } from "./projects";

export const Sidebar = () => {
    return (
        <aside className="rounded-xl mx-8 mt-4 mb-8 fixed top-20 bottom-20 bg-neutral-100 dark:bg-neutral-900 p-4 flex-col text-center shadow-md flex py-3">
            <div>
                <Projects />
            </div>
        </aside>
    );
};