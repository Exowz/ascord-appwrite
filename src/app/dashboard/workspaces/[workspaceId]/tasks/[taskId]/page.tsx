import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { TaskIdClient } from "./client";

const TaskIdPage = async () => {
    const user = await getCurrent();
    if (!user) redirect ("/login");

    return ( 
        <div>
            <div className="mt-4">
                <TaskIdClient />
            </div>
        </div>
     );
};
 
export default TaskIdPage;