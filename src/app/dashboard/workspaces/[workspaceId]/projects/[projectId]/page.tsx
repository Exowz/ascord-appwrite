import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getProject } from "@/features/projects/queries"
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";

interface ProjectIdPagePros {
    params: { projectId: string };
}

const ProjectIdPage = async ({ params, }: ProjectIdPagePros) => {
    const user = await getCurrent();

    if(!user) redirect("/login");

    const initialValues = await getProject({
        projectId: params.projectId,
    })

    if(!initialValues) {
        throw new Error("Project not found");
    };

    return (
        <div className="flex flex-col gap-y-4 shadow-md dark:shadow-input-dark rounded-xl">
            <TaskViewSwitcher />
        </div>
    );
};

export default ProjectIdPage;