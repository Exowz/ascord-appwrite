import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { WorkspaceIdClient } from "./client";

const WorkspaceIdPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("/login");

    return (
        <div className="mt-4 mb-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md p-4 fixed top-20 bottom-20 left-32 right-8">
            <WorkspaceIdClient />
        </div>
    );
};

export default WorkspaceIdPage;