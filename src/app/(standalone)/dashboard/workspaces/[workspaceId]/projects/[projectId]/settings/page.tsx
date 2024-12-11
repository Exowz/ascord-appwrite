import { getCurrent } from "@/features/auth/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";

interface ProjectSettingsPageProps {
    params: {
        projectId: string;
    }
}

const ProjectIdSettingsPage = async ({
    params,
}: ProjectSettingsPageProps) => {
    const user = await getCurrent();
    if (!user) redirect("/login")

    const initialValues = await getProject({
        projectId: params.projectId,
    });

    return ( 
        <div className="w-full lg:max-w-xl">
            <EditProjectForm initialValues={initialValues}/>
        </div>
     );
}
 
export default ProjectIdSettingsPage;