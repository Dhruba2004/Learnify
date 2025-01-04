"use client";
import { Button } from "@/app/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
  
      <div className="flex items-center justify-between shadow-md p-4 container w-full max-w-[100vw] border-b bg-slate-900">
        <div>
          <Image src="/logo.svg" width={30} height={30} alt="logo" />
        </div>
        <div>
          <SignedIn>
            <Link href={"/dashboard"}>
              {" "}
              <Button className="text-white"> Go To Dashboard</Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button className="text-white">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
  );
}