import { getCurrent } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";

interface WorkspaceIdJoinPageProps {
    params: {
        workspaceId: string;
        inviteCode: string;
    };
}

const WorksapceIdJoinPage = async ({
    params,
}: WorkspaceIdJoinPageProps) => {
    const user = await getCurrent();
    if (!user) redirect ("/login"); 

    const initialValues = await getWorkspaceInfo({
        workspaceId: params.workspaceId,
    });

    if (!initialValues) {
        redirect("/dashboard");
    }


    return ( 
        <div className="w-full lg:max-w-xl">
            <JoinWorkspaceForm initialValues={initialValues}/>
        </div>
     );
}
 
export default WorksapceIdJoinPage;