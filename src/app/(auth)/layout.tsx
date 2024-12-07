interface AuthLayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return ( 
        <main className="min-h-screen bg-slate-200 dark:bg-black">
            <div className="mx-atuo max-w-screen-2xl p-4">
                <div className="flex h-full flex-col items-center justify-center pt-4 pb-4 md:pt-14 md:pb-14">
                    {children}
                </div>
            </div>
        </main>
     );
}
 
export default AuthLayout;