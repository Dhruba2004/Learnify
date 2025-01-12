"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function DashboardHeader() {
    const router = useRouter()
  return (
    <div className="p-4 shadow-md flex items-center justify-between border-b">
      {/* <div className="flex items-center" onClick={()=>router.back()}> */}
        <Link href={'/'}><Image src={"/logo.svg"} width={40} height={40} alt="logo" /></Link>
        {/* <Button className="text-white">Go Back</Button> */}
      {/* </div> */}
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
