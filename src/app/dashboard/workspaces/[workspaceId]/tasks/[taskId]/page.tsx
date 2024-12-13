import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { TaskIdClient } from "./client";

const TaskIdPage = async () => {
    const user = await getCurrent();
    if (!user) redirect ("/login");

    return ( 
        <div className="dark:bg-neutral-900 bg-neutral-100 py-8 mx-1 rounded-xl mb-8 bottom-20 fixed h-full">
            <div className="mt-4">
                <TaskIdClient />
            </div>
        </div>
     );
};
 
export default TaskIdPage;