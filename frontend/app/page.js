// "use client";

import React from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import Dashboard from "@/Components/Dashboard";
import Header from "@/Components/Header";
import GoalForm from "@/Components/GoalForm";

export default function Home() {
  // const router = useRouter();
  // const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user, router]);

  return (
    <>
      <Header />
      <Dashboard />
      {/* <>
        <section className="heading">
          <h1>Welcome {user && user.name}</h1>
          <p>Goals Dashboard</p>
        </section>

        <GoalForm />
      </> */}
    </>
  );
}
