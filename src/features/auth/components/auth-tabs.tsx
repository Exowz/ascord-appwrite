"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LoginCard } from "@/features/auth/components/login-card";
import { RegisterCard } from "@/features/auth/components/register-card";

export const AuthTabs = () => {
  return (
    <div className="w-[400px] shadow-md rounded-none md:rounded-2xl">
      <Tabs defaultValue="login" className="w-full">
        {/* Tabs Header */}
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        {/* Login Card */}
        <TabsContent value="login">
              <LoginCard />
        </TabsContent>

        {/* Register Card */}
        <TabsContent value="register">
              <RegisterCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};