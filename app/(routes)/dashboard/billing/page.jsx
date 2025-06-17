"use client";
import Link from "next/link";
import axios from "axios";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { eq } from "drizzle-orm";

function UpgradePage() {
  const [userDetails, setUserDetails] = useState();
  const { user } = useUser();

  const onCheckoutClick = async () => {
    try {
      const result = await axios.post("/api/payment/checkout", {
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
      });
      console.log(result.data);
      console.log("Stripe Checkout URL:", result.data?.url);
      window.location.href = result.data?.url;
    } catch (error) {
      console.log("Failed to open stripe payment page");
      console.log(error);
    }
  };

  useEffect(() => {
    user && GetUserDetails();
  }, [user]);


  const GetUserDetails = async () => {
    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress.emailAddress));
    console.log(result);
    setUserDetails(result[0]);
  };

  

  const onPaymentManage = async () => {
    try {
      const result = await axios.post("/api/payment/manage-payment", {
      customerId: userDetails?.customerId,
    });
    console.log(result.data);
    window.location.href = result.data?.url;
      
    } catch (error) {
      console.log(error)
      
    }
    
  };
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-white sm:text-4xl">
          Unlock the Full Potential of AI Study Material Generation
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 sm:px-8 lg:p-12 bg-white dark:bg-gray-800">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Free
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  0$
                </strong>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  /month
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 dark:text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  Limited Access to AI Tools{" "}
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 dark:text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  Limited Number of Generations{" "}
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 dark:text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  Standard Support{" "}
                </span>
              </li>
            </ul>

            <Link
              href="/dashboard"
              className="mt-8 block rounded-full border bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-violet-700 focus:outline-none"
            >
              Get Started
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 sm:px-8 lg:p-12 bg-white dark:bg-gray-800">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Premium
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  9.99$
                </strong>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  /month
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 dark:text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  Unlimited Access to AI Tools
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 dark:text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  Unlimited Generations
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700 dark:text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  Priority Support
                </span>
              </li>
            </ul>

            {userDetails?.isMember === false ? (
              <Link
                onClick={() => onCheckoutClick()}
                href={"/"}
                className="mt-12 block rounded-full border border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-900 px-12 py-3 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:ring-1 hover:ring-indigo-600 dark:hover:ring-indigo-400 focus:outline-none focus:ring active:text-indigo-500 dark:active:text-indigo-400"
              >
                Buy Now
              </Link>
            ) : (
              <Button
                onClick={() => onPaymentManage()}
                className="mt-[3.5rem] text-white rounded-full  px-12 py-3 text-center"
              >
                Manage Payment
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpgradePage;
