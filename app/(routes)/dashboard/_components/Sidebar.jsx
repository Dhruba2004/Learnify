"use client";
import { CourseCountContext } from "@/app/_context/CourseCountContext";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";

function Sidebar() {
  const { totalCourse, setTotalCourse } = useContext(CourseCountContext);
  const router = useRouter();
  const path = usePathname();
  if (totalCourse >= 10) {
    router.push("/dashboard/billing");
  }
  const menuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Billing",
      icon: Shield,
      path: "/dashboard/billing",
    },

    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  return (
    <div className="p-5 shadow-md h-screen border-r bg-slate-950">
      <div className="flex items-center gap-3">
        <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
        <h2 className="font-bold text-lg text-white">Easy Study</h2>
      </div>
      <div className="mt-[1rem]">
        <Link href={"/create"}>
          <Button className="bg-blue-800 w-full text-white">
            {" "}
            + Create New
          </Button>
        </Link>
        <div className="mt-5 space-y-3">
          {menuList.map((menu, index) => (
            <Link
              className={`flex items-center gap-3 hover:bg-blue-800 rounded-lg p-3 cursor-pointer text-white ${
                path == menu.path && "bg-blue-800"
              }`}
              key={index}
              href={menu.path}
            >
              <menu.icon />
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="p-5 bg-slate-950 rounded-lg mt-5 absolute bottom-10 border w-[87%]">
        <h2 className="text-lg mb-2 text-white">
          Available Credits : {10 - totalCourse}{" "}
        </h2>
        <Progress value={(totalCourse / 10) * 100} />
        <h2 className="text-sm mt-2">{totalCourse} Out of 10 Credit Used</h2>
        <Link href={"/dashboard/upgrade"} className="text-xs text-[#5242ef]">
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
