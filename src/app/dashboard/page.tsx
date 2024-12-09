import { getCurrent } from "@/features/auth/queries";
import { UserButton } from "@/features/auth/components/user-button";
import { getWorkspaces } from "@/features/workspaces/queries";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const user = await getCurrent();
    if (!user) redirect ("/login");

    const workspaces = await getWorkspaces();
    if (workspaces.total === 0) {
        redirect("/dashboard/workspaces/create")
    } else {
        redirect(`/dashboard/workspaces/${workspaces.documents[0].$id}`);
    }
}