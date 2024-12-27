"use client"
import { Button } from "@/app/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function DashboardHeader() {
    const router = useRouter()
  return (
    <div className="p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center" onClick={()=>router.back()}>
        <Button className="text-white">Go Back</Button>
      </div>
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-10 h-10",
          },
        }}
      />
    </div>
  );
}

export default DashboardHeader;
