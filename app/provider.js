"use client";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema.js";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();
  useEffect(() => {
    user && checkIsNewUser();
  }, [user]);

  const checkIsNewUser = async () => {
    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
      console.log(result);

      if(result?.length == 0){
        const userResp = await db.insert(USER_TABLE).values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        }).returning({id:USER_TABLE.id});
        console.log(userResp[0]);
      }
  };
 
  return <div>{children}</div>;
}

export default Provider;
