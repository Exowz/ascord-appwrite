"use client";

import { Analytics } from "@/components/analytics";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { UseGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";

export const ProjectIdClient = () => {
    const projectId = useProjectId();
    const { data: project, isLoading: isLoadingProject } = useGetProject({ projectId });
    const { data: analytics, isLoading: isLoadingAnalytics } = UseGetProjectAnalytics({ projectId })

    const isLoading = isLoadingProject || isLoadingAnalytics;

    if (isLoading) {
        return <PageLoader />
    }

    if (!project) {
        return <PageError message="Project not found" />
    }

    return(
        <div className="flex flex-col gap-y-4 shadow-md dark:shadow-input-dark rounded-xl">
            {analytics ? (
                <Analytics data={analytics} />
            ) : null}
            <TaskViewSwitcher hideProjectFilter />
         </div>
    )
}