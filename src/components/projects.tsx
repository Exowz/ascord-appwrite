"use client";

import { Plus } from "lucide-react";
import { Separator } from "./ui/separator";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { GoHome } from "react-icons/go";

export const  Projects = () => {
    const pathname = usePathname();
    const { open } = useCreateProjectModal();
    const workspaceId = useWorkspaceId();
    const { data } = useGetProjects({
        workspaceId,
    });
    return (
        <div>
            <div className="py-3 space-y-4">
                <div className="group">
                    <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] 
                    transition-all overflow-hidden items-center justify-center group-hover:bg-blue-800">
                        <Link href={`/dashboard/workspaces/${workspaceId}`}>
                            <GoHome className="group-hover:text-white transition text-blue-800" size={25}/>
                        </Link>
                    </div>
                </div>
                <Separator
                className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
                />
            </div>
         <div className="relative flex flex-col py-3 space-y-4">
         {data?.documents.map((project) => {
             const href = `/dashboard/workspaces/${workspaceId}/projects/${project.$id}`;
             const isActive = pathname === href;

             return (
                <Link href={href} key={project.$id}>
                    <div
                        className={cn(
                            "relative flex h-[48px] w-[48px] transition-all overflow-hidden items-center justify-center cursor-pointer",
                            isActive
                                ? "rounded-[16px]" // Active shape
                                : "rounded-[24px] group-hover:rounded-[16px]" // Hover shape
                        )}
                    >
                        <ProjectAvatar
                            name={project.name}
                            image={project.imageUrl}
                        />
                    </div>
                </Link>
             )
         })}
                         <div className="group">
                    <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] 
                    transition-all overflow-hidden items-center justify-center group-hover:bg-blue-800">
                        <Plus onClick={open} className="group-hover:text-white transition text-blue-800" size={25}/>
                    </div>
                </div>
     </div>
        </div>
        
    )

}