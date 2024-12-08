import { getCurrent } from "@/features/auth/action";
import { LoginCard } from "@/features/auth/components/login-card";
import { redirect } from "next/navigation";

const LoginPage = async () => {
    const user = await getCurrent();

    if (user) redirect("/dashboard");

    return ( 
         <LoginCard />
     );
}
 
export default LoginPage;