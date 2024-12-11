import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { TaskIdClient } from "./client";

const TaskIdPage = async () => {
    const user = await getCurrent();
    if (!user) redirect ("/login");

    return ( 
        <div className="dark:bg-neutral-900 bg-neutral-100 flex-1 py-8 mx-1 rounded-xl">
            <div className="mt-4">
                <TaskIdClient />
            </div>
        </div>
     );
};
 
export default TaskIdPage;