import Logo from "@/components/logo";
import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface StandaloneLayoutProps {
    children: React.ReactNode;
};

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
    return ( 
        <main className="bg-white dark:bg-black min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center h-[73px]">
                    <Link href="/">
                        <Logo className="h-10 w-10" />
                    </Link>
                    <UserButton />
                </nav>
                <div className="flex flex-col items-center justify-center py-4">
                    {children}
                </div>
            </div>
        </main>
     );
}
 
export default StandaloneLayout;