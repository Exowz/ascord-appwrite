"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { WorkspaceAvatar } from "../features/workspaces/components/workspace-avatar";
import { useRouter } from "next/navigation";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useCreateWorkspaceModal } from "@/features/workspaces/hooks/use-create-workspace-modal";
import { RiAddCircleFill } from "react-icons/ri";

export const WorkspaceSwitcher = () => {
    const workspaceId = useWorkspaceId();
    const router = useRouter();
    const { data: workspaces } = useGetWorkspaces();
    const { open } = useCreateWorkspaceModal();

    const onSelect = (id: string) => {
        router.push(`/dashboard/workspaces/${id}`);
    };

    return (
        <nav className="fixed top-4 w-full left-0">
        <div className="flex justify-center items-center p-3 rounded-xl mx-8 shadow-md bg-neutral-100 dark:bg-neutral-900">
            <Select onValueChange={onSelect} value={workspaceId}>
                <SelectTrigger className="flex items-center justify-between gap-3 bg-neutral-100 dark:bg-neutral-900 font-medium text-sm pl-12 rounded-md">
                    <SelectValue placeholder="Select a workspace" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-100 dark:bg-neutral-900 left-4 right-4">
                    {workspaces?.documents.map((workspace) => (
                        <SelectItem key={workspace.$id} value={workspace.$id}>
                            <div className="flex justify-start items-center gap-3 font-medium">
                                <WorkspaceAvatar name={workspace.name} image={workspace.imageUrl} />
                                <span className="truncate">{workspace.name}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <RiAddCircleFill
                className="ml-4 text-neutral-500 dark:text-neutral-300 text-2xl cursor-pointer hover:opacity-75 transition"
                onClick={open} // Call the modal open function
            />
        </div>
        </nav>
    );
};