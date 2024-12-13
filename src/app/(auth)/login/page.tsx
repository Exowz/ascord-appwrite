import { getCurrent } from "@/features/auth/queries";
import { LoginCard } from "@/features/auth/components/login-card";
import { redirect } from "next/navigation";
import { AuthTabs } from "@/features/auth/components/auth-tabs";

const LoginPage = async () => {
    const user = await getCurrent();

    if (user) redirect("/dashboard");

    return ( 
         <AuthTabs />
     );
}
 
export default LoginPage;