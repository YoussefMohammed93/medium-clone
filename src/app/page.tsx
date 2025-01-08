"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Main() {
  const currentUser = useQuery(api.users.currentUser);

  return (
    <main className="p-10">
      <div className="flex items-center gap-5">
        <SignInButton />
        <UserButton />
      </div>
      <div>Welcome, {currentUser?.firstName}</div>
    </main>
  );
}
