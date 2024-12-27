import React from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";

export default function DashboardLayout ({ children }) {
  return (
    <div>
      <div className="md:w-64 md:block hidden h-screen fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

