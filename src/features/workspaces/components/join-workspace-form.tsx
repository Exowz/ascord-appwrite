"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useRouter } from "next/navigation";

interface JoinWorkspaceFormProps {
    initialValues: {
        name: string;
    }
}

export const JoinWorkspaceForm = ({
    initialValues,
}: JoinWorkspaceFormProps) => {
    const router = useRouter();
    const workspaceId = useWorkspaceId();
    const inviteCode = useInviteCode();
    const { mutate, isPending } = useJoinWorkspace();

    const onSubmit = () => {
        mutate({
            param: { workspaceId },
            json: { code: inviteCode }
        },{
            onSuccess: ({ data }) => {
                router.push(`/dashboard/workspaces/${data.$id}`)
            },
        });
    }

    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardHeader className="p-7">
                <CardTitle className="text-xl font-bold">
                    Join workspace
                </CardTitle>
                <CardDescription>
                    You&apos;ve been invite to join <strong>{initialValues.name}</strong> workspace
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7">
                <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
                    <Button
                        variant="destructive"
                        size="lg"
                        type="button"
                        asChild
                        className="w-full lg:w-fit"
                        disabled={isPending}
                    >
                        <Link href="/dashboard">
                            Cancel
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        className="w-full lg:w-fit"
                        type="button"
                        onClick={onSubmit}
                        disabled={isPending}
                    >
                        Join workspace
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}