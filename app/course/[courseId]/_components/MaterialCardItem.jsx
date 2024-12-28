import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MaterialCardItem({ item }) {
return (
        <div className="flex items-center flex-col text-center gap-3 h-full bg-slate-950 border p-5 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
            <h2 className="p-1 px-2 bg-green-500 text-white font-semibold rounded-full text-[10px]">
                Ready
            </h2>
            <Image src={item?.icon} alt={item.name} height={50} width={50} />
            <h2 className="font-medium text-purple-600">{item.name}</h2>
            <p className="text-gray-400 text-sm text-center">{item.desc}</p>
            <Link href={item.path}><Button variant="outline" className="text-white">
                View
            </Button></Link>
        </div>
);
}

export default MaterialCardItem;
