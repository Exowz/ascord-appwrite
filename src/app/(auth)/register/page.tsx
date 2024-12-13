import { getCurrent } from "@/features/auth/queries";
import { RegisterCard } from "@/features/auth/components/register-card";
import { redirect } from "next/navigation";
import { AuthTabs } from "@/features/auth/components/auth-tabs";

const RegisterPage = async () => {
    const user = await getCurrent();

    if (user) redirect("/dashboard");
    return ( 
        <AuthTabs />
     );
}
 
export default RegisterPage;