import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = async ({ children }: { children: ReactNode }) => {

  const session = await auth();
  return (
    <main className="relative">
        <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flext min-h-screen flex-1 flex-col px-6 pb-6 pt-28">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
