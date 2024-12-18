import { MoreHorizontal } from "lucide-react";
import { Task } from "../types";
import { TaskActions } from "./task-actions";
import { Separator } from "@/components/ui/separator";
import { MemberAvatar } from "@/features/members/components/member-avatar";
import { TaskDate } from "./task-date";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";

interface KanbanCardProps {
    task: Task;
};

export const KanbanCard = ({ task }: KanbanCardProps) => {
    return(
        <div className="bg-neutral-100 dark:bg-neutral-800 p-2.5 mb-1.5 rounded shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-x-2">
                <p>{task.name}</p>
                <TaskActions id={task.$id} projectId={task.projectId}>
                    <MoreHorizontal className="size-[18px] stroke-1 shrink-0 text-neutral-700 hover:opacity-75 transition"/>
                </TaskActions>
            </div>
            <Separator />
            <div className="flex items-center gap-x-1.5">
                <MemberAvatar
                    name={task.assignee.name} 
                    fallbackClassname="text-[10px]"
                />
                <div className="size-1 rounded-full bg-neutral-300 dark:bg-neutral-100"/>
                <TaskDate value={task.dueDate} className="text-xs"/>
            </div>
            <div className="flex items-center gap-x-1.5">
                <ProjectAvatar
                    name={task.project.name}
                    image={task.project.imageUrl}
                    fallbackClassName="text-[10px]"
                    className="size-5"
                />
                <span className="text-xs font-medium">{task.project.name}</span>
            </div>
        </div>
    );
};