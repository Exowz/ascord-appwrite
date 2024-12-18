"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    IconBrandGoogle,
} from "@tabler/icons-react";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { signUpWithGoogle } from "@/lib/oauth";

import { loginSchema } from "../schema";
import { useLogin } from "../api/use-login";

export const LoginCard = () => {
    const { mutate, isPending } = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        mutate({ json: values });
    };

    return (
        <Card className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black" suppressHydrationWarning>
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Login
                </CardTitle>
                <CardDescription className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Welcome back! Please enter your credentials to continue.
                </CardDescription>
            </CardHeader>
            <div className="px-7 mb-2">
                <Separator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField 
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"    
                                        placeholder="tyler@durden.com"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField 
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"    
                                        placeholder="••••••••"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <Button disabled={isPending} size="lg" className="w-full" variant="ghost">
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7 mb-2">
                <Separator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={isPending}
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => signUpWithGoogle()}
                >
                    <IconBrandGoogle className="mr-2 size-5 text-neutral-800 dark:text-neutral-300"/>
                    Login with Google
                </Button>
            </CardContent>
        </Card>
    )
}