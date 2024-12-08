"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { WorkspaceAvatar } from "./workspace-avatar";

export const WorkspaceSwitcher = () => {
    const { data: workspaces } = useGetWorkspaces();

    return (
        <div className="flex justify-center w-full">
            <Select>
                <SelectTrigger className="flex items-center justify-between gap-3 bg-neutral-200 dark:bg-neutral-900 font-medium text-sm p-3 rounded-md w-full max-w-xl">
                        <SelectValue placeholder="Select a workspace" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-200 dark:bg-neutral-900">
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
        </div>
    );
};