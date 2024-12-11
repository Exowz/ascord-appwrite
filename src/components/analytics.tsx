import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AnalyticsCard } from "./analytics-card";
import { ScrollBar } from "./ui/scroll-area";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
    return (
        <ScrollArea className="rounded-lg w-full whitespace-nowrap shrink-0">
            <div className="w-full flex flex-row gap-4"> {/* Add gap-4 for spacing */}
                <div className="flex items-center flex-1 gap-4"> {/* Add gap-4 here as well */}
                    <AnalyticsCard 
                        title="Total tasks"
                        value={data.taskCount}
                        variant={data.taskDifference > 0 ? "up" : "down"}
                        increaseValue={data.taskDifference}
                    />
                    <AnalyticsCard 
                        title="Assigned Tasks"
                        value={data.assignedTaskCount}
                        variant={data.assignedTaskDifference > 0 ? "up" : "down"}
                        increaseValue={data.assignedTaskDifference}
                    />
                    <AnalyticsCard 
                        title="Completed Tasks"
                        value={data.completeTaskCount}
                        variant={data.completeTaskDifference > 0 ? "up" : "down"}
                        increaseValue={data.completeTaskDifference}
                    />
                    <AnalyticsCard 
                        title="Overdue Tasks"
                        value={data.overdueTaskCount}
                        variant={data.overdueTaskDifference > 0 ? "up" : "down"}
                        increaseValue={data.overdueTaskDifference}
                    />
                    <AnalyticsCard 
                        title="Incomplete Tasks"
                        value={data.incompleteTaskCount}
                        variant={data.incompleteTaskDifference > 0 ? "up" : "down"}
                        increaseValue={data.incompleteTaskDifference}
                    />
                </div>
            </div>
            <ScrollBar orientation="horizontal"/>
        </ScrollArea>
    );
}