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
    IconBrandGithub,
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

const formSchema = z.object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum of 8 characters required"),
})

export const RegisterCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({ values });
    };

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    <Logo />
                    Ascord
                </CardTitle>
                <CardDescription>
                    Sign up
                </CardDescription>
            </CardHeader>
            <div className="px-7 mb-2">
                <Separator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <FormField 
                            name="firstName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>First name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"    
                                            placeholder="Tyler"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                           <FormField 
                            name="lastName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Last name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"    
                                            placeholder="Durden"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>           
                        </div>
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
                        <FormField 
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>
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
                        <Button disabled={false} size="lg" className="w-full" variant="ghost">
                            Register
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7 mb-2">
                <Separator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={false}
                    variant="outline"
                    size="lg"
                    className="w-full"
                >
                    <IconBrandGoogle className="mr-2 size-5 text-neutral-800 dark:text-neutral-300"/>
                    Login with Google
                </Button>
                <Button
                    disabled={false}
                    variant="outline"
                    size="lg"
                    className="w-full"
                >
                    <IconBrandGithub className="mr-2 size-5 text-neutral-800 dark:text-neutral-300"/>
                    Login with Github
                </Button>
            </CardContent>
        </Card>
    )
}