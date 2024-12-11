import { useState } from "react";
import { PencilIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { Task } from "../types";
import { useUpdateTask } from "../api/use-update-task";

interface TaskDescriptionProps {
    task: Task;
}

export const TaskDescription = ({ task }: TaskDescriptionProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(task.description);

    const { mutate, isPending } = useUpdateTask();

    const handleSave = () => {
        mutate({ 
            json: { description: value },
            param: { taskId: task.$id }
        }, {
            onSuccess: () => {
                setIsEditing(false);
            }
        });
    };


    return (
        <div className="p-4 border rounded-lg bg-muted">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Overview</p>
                <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setIsEditing((prev) => !prev)}
                >
                    {isEditing ? (
                        <XIcon className="size-4 mr-2"/>
                    ) : (
                        <PencilIcon className="size-4 mr-2"/>
                    )}
                    {isEditing ? "Cancel" : "Edit"}
                </Button>
            </div>
            <Separator className="my-4"/>
            {isEditing ? (
                <div className="flex flex-col gap-y4">
                    <Textarea
                        placeholder="Add a description" 
                        value={value}
                        rows={4}
                        onChange={(e) => setValue(e.target.value)}
                        disabled={isPending}
                    />
                    <Button
                        size="sm"
                        className="w-fit ml-auto mt-4"
                        onClick={handleSave}
                        disabled={isPending}
                    >
                        {isPending ? "Saving..." : "Save Changes"}
                    </Button>
                </div>
            ) : (
                <div>
                {task.description || (
                    <span className="text-muted-foreground">
                        No description set
                    </span>
                )}
            </div>
            )}
        </div>
    )
};