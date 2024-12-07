/* "use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { 
  Dialog,
  DialogContent,
  DialogTrigger
 } from "@/components/ui/dialog";
import { AuthTabs } from "./auth-tabs";

interface JoinButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const JoinButton = ({ children, mode = "redirect", asChild = false }: JoinButtonProps) => {
  const router = useRouter();

  const onClick = () => {
      router.push("/auth");
  };

  if (mode === "modal") { 
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>
          {children}
        </DialogTrigger>
        <DialogContent className="p-10 w-auto bg-transparent border-none">
          <AuthTabs />
        </DialogContent>
      </Dialog>
    )
  }

  return (
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
  );
};

*/