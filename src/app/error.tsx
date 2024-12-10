"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react"
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="flex-col h-screen flex items-center justify-center gap-y-4">
            <AlertTriangle className="size-6 text-muted-foreground" />
            <p className="text-sm">
                Something went wrong
            </p>
            <Button variant="secondary" size="sm">
                <Link href="/dashboard">
                    Back to home
                </Link>
            </Button>
        </div>
    )
}

export default ErrorPage;