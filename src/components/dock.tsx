"use client";

import { UserButton } from "@/features/auth/components/user-button";
import ModeToggle from "./mode-toggle";
import { GoCheckCircle } from "react-icons/go";
import { SettingsIcon, UsersIcon } from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import { BiSolidConversation, BiSolidMicrophone, BiSolidVideo } from "react-icons/bi";
import { BsTable } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { BsFillKanbanFill, BsCalendar2Fill } from "react-icons/bs";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useGetProjects } from "@/features/projects/api/use-get-projects";

export const Dock = () => {
    const workspaceId = useWorkspaceId();
    const pathname = usePathname();
    const { data: projects } = useGetProjects({ workspaceId });

    const isWorkspacePage = pathname?.startsWith(`/dashboard/workspaces/${workspaceId}`);
    const isProjectPage = projects?.documents.some(
        (project) => pathname?.startsWith(`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`)
    );

    const routes = [
        // Workspace-level routes
        {
            title: "Tasks",
            icon: <GoCheckCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: `/dashboard/workspaces/${workspaceId}/tasks`,
            show: isWorkspacePage && !isProjectPage,
        },
        {
            title: "Members",
            icon: <UsersIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: `/dashboard/workspaces/${workspaceId}/members`,
            show: isWorkspacePage && !isProjectPage,
        },
        {
            title: "Direct Messages",
            icon: <BiSolidConversation className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: `/dashboard/workspaces/${workspaceId}/dm`,
            show: isWorkspacePage && !isProjectPage,
        },
        {
            title: "Voice Chat",
            icon: <BiSolidMicrophone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: `/dashboard/workspaces/${workspaceId}/voicechat`,
            show: isWorkspacePage && !isProjectPage,
        },
        {
            title: "Video Chat",
            icon: <BiSolidVideo className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: `/dashboard/workspaces/${workspaceId}/videochat`,
            show: isWorkspacePage && !isProjectPage,
        },
        {
            title: "Settings",
            icon: <SettingsIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: `/dashboard/workspaces/${workspaceId}/settings`,
            show: isWorkspacePage && !isProjectPage,
        },
        // Project-specific routes
        ...(projects?.documents.flatMap((project) => [
            {
                title: "Tasks",
                icon: <GoCheckCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
                href: `/dashboard/workspaces/${workspaceId}/projects/${project.$id}`,
                show: pathname?.startsWith(`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`),
            },
            {
                title: "Messages", // Another custom route for project
                icon: <BiSolidConversation className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
                href: `/dashboard/workspaces/${workspaceId}/projects/${project.$id}/messages`,
                show: pathname?.startsWith(`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`),
            },
            {
                title: "Voice Chat", // Another custom route for project
                icon: <BiSolidMicrophone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
                href: `/dashboard/workspaces/${workspaceId}/projects/${project.$id}/vc`,
                show: pathname?.startsWith(`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`),
            },
            {
                title: "Video Chat", // Another custom route for project
                icon: <BiSolidVideo className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
                href: `/dashboard/workspaces/${workspaceId}/projects/${project.$id}/vdc`,
                show: pathname?.startsWith(`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`),
            },
            {
                title: "Settings", // Another custom route for project
                icon: <SettingsIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
                href: `/dashboard/workspaces/${workspaceId}/projects/${project.$id}/settings`,
                show: pathname?.startsWith(`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`),
            },
        ]) || []),
    ];

    const visibleRoutes = routes.filter((route) => route.show);

    return (
        <div className="fixed bottom-4 left-0 w-full">
            <div className="relative gap-4">
                <div className="fixed bottom-4 size-20 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 shadow-md md:mx-8">
                    <UserButton />
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <FloatingDock items={visibleRoutes} />
            </div>
            <div className="fixed bottom-4 right-4 h-20 w-36 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 md:mx-4 shadow-md">
                <ModeToggle />
            </div>
        </div>
    );
};