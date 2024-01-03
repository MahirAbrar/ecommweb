"use client";

import { useContext } from "react";
import { GlobalContext } from "@/context/index";

export default function Home() {
  const { isAuthUser, user } = useContext(GlobalContext);

  console.log(isAuthUser);
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background p-24 text-text">
      <h1>eCom Website root folder</h1>
    </main>
  );
}
