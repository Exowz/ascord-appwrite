"use client";

import { Analytics } from "@/components/analytics";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useGetMembers } from "@/features/members/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import { useGetTasks } from "@/features/tasks/api/use-get-tasks";
import { useCreateTaskModal } from "@/features/tasks/hooks/use-create-task-modal";
import { Task } from "@/features/tasks/types";
import { UseGetWorkspaceAnalytics } from "@/features/workspaces/api/use-get-workspace-analytics";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { Plus, CalendarIcon, SettingsIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/features/projects/types";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { Member } from "@/features/members/types";
import { MemberAvatar } from "@/features/members/components/member-avatar";

export const WorkspaceIdClient = () => {
    const workspaceId = useWorkspaceId();

    const { data: analytics, isLoading: isLoadingAnalytics } = UseGetWorkspaceAnalytics({ workspaceId });
    const { data: tasks, isLoading: isLoadingTasks } = useGetTasks({ workspaceId });
    const { data: projects, isLoading: isLoadingProjects } = useGetProjects({ workspaceId });
    const { data: members, isLoading: isLoadingMembers } = useGetMembers({ workspaceId });

    const isLoading =
        isLoadingAnalytics ||
        isLoadingTasks ||
        isLoadingProjects ||
        isLoadingMembers;

    if (isLoading) {
        return <PageLoader />;
    }

    if (!analytics || !tasks || !projects || !members) {
        return <PageError message="Failed to load workspace data" />;
    }

    return (
        <div className="h-full flex flex-col space-y-4">
            <div>
                <Analytics data={analytics} />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {/* Responsive grid with three sections */}
                <div className="bg-muted border dark:border-neutral-800 border-neutral-200 shadow-md rounded-xl">
                    <TaskList data={tasks.documents} total={tasks.total} />
                </div>
                <div className="bg-muted border dark:border-neutral-800 border-neutral-200 shadow-md rounded-xl">
                    <ProjectList data={projects.documents} total={projects.total} />
                </div>
                <div className="bg-muted border dark:border-neutral-800 border-neutral-200 shadow-md rounded-xl">
                    <MembersList data={members.documents} total={members.total} />
                </div>
            </div>
        </div>
    );
};

interface TaskListProps {
    data: Task[]
    total: number;
}

export const TaskList = ({ data, total }: TaskListProps) => {
    const { open: createTask } = useCreateTaskModal();
    const workspaceId = useWorkspaceId();

    return(
        <div className="flex flex-col gap-y-4 col-span-1">
            <div className="bg-muted rounded-lg dark:border-b-2 border-neutral-800 p-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                        Tasks : {total}
                    </p>
                    <Button variant="muted" size="icon" className="bg-muted" onClick={createTask}>
                        <Plus className="size-4 text-neutral-400" />
                    </Button>
                </div>
                <Separator className="my-4" />
                <ul className="flex flex-col gap-y-4">
                    {data.map((task) => (
                        <li key={task.$id}>
                            <Link href={`/dashboard/workspaces/${workspaceId}/tasks/${task.$id}`}>
                                <Card className="shadow-md dark:bg-neutral-900 rounded-lg hover:opacity-75 transition">
                                    <CardContent className="p-4">
                                        <p className="text-lg font-bold truncate">{task.name}</p>
                                        <div className="flex items-center gap-x-2">
                                            <p>{task.project?.name}</p>
                                            <div className="size-1 rounded-full bg-neutral-300"/>
                                            <div className="text-sm text-muted-foreground flex items-center">
                                                <CalendarIcon className="size-3 mr-1" />
                                                <span className="truncate">{formatDistanceToNow(new Date(task.dueDate))}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </li>
                    ))}
                    <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
                        No tasks found
                    </li>
                </ul>
                <Button variant="muted" className="mt-4 w-full" asChild>
                    <Link href={`/dashboard/workspaces/${workspaceId}/tasks`}>
                        Show all
                    </Link>
                </Button>
            </div>
        </div>
    );
}

interface ProjectListProps {
    data: Project[]
    total: number;
}

export const ProjectList = ({ data, total }: ProjectListProps) => {
    const { open: createProject } = useCreateProjectModal();
    const workspaceId = useWorkspaceId();

    return(
        <div className="flex flex-col gap-y-4 col-span-1">
            <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                        Projects : {total}
                    </p>
                    <Button variant="muted" size="icon" onClick={createProject}>
                        <Plus className="size-4 text-neutral-400" />
                    </Button>
                </div>
                <Separator className="my-4" />
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {data.map((project) => (
                        <li key={project.$id}>
                            <Link href={`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`}>
                                <Card className="shadow-md dark:bg-neutral-900  rounded-lg hover:opacity-75 transition">
                                    <CardContent className="p-4 flex items-center gap-x-4">
                                        <ProjectAvatar
                                            name={project.name}
                                            image={project.imageUrl}
                                            fallbackClassName="text-lg" 
                                            className="size-12"
                                        />
                                        <p className="text-lg font-bold truncate">
                                            {project.name}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </li>
                    ))}
                    <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
                        No projects found
                    </li>
                </ul>
            </div>
        </div>
    );
}

interface MembersListProps {
    data: Member[]
    total: number;
}

export const MembersList = ({ data, total }: MembersListProps) => {
    const workspaceId = useWorkspaceId();

    return(
        <div className="flex flex-col gap-y-4 col-span-1">
            <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                        Members : {total}
                    </p>
                    <Button variant="muted" size="icon" asChild>
                        <Link href={`/dashboard/workspaces/${workspaceId}/members`}>
                            <SettingsIcon className="size-4 text-neutral-400" />
                        </Link>
                    </Button>
                </div>
                <Separator className="my-4" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((member) => (
                        <li key={member.$id}>
                                <Card className="shadow-md dark:bg-neutral-900 rounded-lg overflow-hidden hover:opacity-75 transition">
                                    <CardContent className="p-3 flex flex-col items-center gap-x-2 gap-y-2">
                                        <MemberAvatar
                                            name={member.name}
                                            className="size-12"
                                        />
                                        <div className="flex flex-col items-center w-full overflow-hidden">
                                            <p className="text-base font-bold line-clamp-1 w-full text-center">
                                                {member.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground truncate w-full text-center">
                                                {member.email}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                        </li>
                    ))}
                    <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
                        No members found
                    </li>
                </ul>
            </div>
        </div>
    );
}