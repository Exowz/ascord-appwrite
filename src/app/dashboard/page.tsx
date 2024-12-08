import { getCurrent } from "@/features/auth/action";
import { UserButton } from "@/features/auth/components/user-button";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const user = await getCurrent();

    if (!user) redirect ("/login");

    return (
        <div>
            <CreateWorkspaceForm/>
        </div>
    )
}