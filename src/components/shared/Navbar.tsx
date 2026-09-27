"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutContextType } from "@/context/WorkoutContextType";

const Navbar = () => {
  const pathname = usePathname();

  const { workoutPlans, savedPlans } = useContext(
    WorkoutContext,
  ) as WorkoutContextType;

  const links = (
    <>
      <li>
        <Link
          className={
            pathname === "/"
              ? "text-my-brand rounded-4xl p-4 badge"
              : "text-gray-400 p-4"
          }
          href="/"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={
            pathname === "/my-plan"
              ? "text-my-brand rounded-4xl p-4 badge"
              : "text-gray-400 p-4"
          }
          href="/my-plan"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 text-gray-400">
      <div className="navbar bg-[#0f0b0b] border-b border-[#44484f]">
        <nav className="container mx-auto flex justify-between items-center p-3">
          <div className="md:hidden dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-gray-400"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0f0b0b] border border-[#44484f] rounded-box z-50 mt-3 w-52 p-4 shadow gap-2"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt={"Fit-Log"}
              className="max-sm:w-5 max-sm:h-5"
            />
            <h2 className="text-white font-black max-sm:text-[16px] text-[20px] tracking-[0.9px] leading-7 font-oswald">
              FITLOG
            </h2>
          </Link>
          <ul className="flex items-center gap-2 max-md:hidden ml-40 font-semibold text-[14px]">
            {links}
          </ul>
          <div className="flex max-sm:text-sm items-center justify-center max-sm:gap-1 gap-3">
            <Link href="/my-plan" className="badge px-3 py-4 sm:p-5 bg-[#0f0b0b] hover:bg-slate-900 text-[#D1D5DB] hover:text-gray-400 font-medium cursor-pointer rounded-3xl">
              Plan{" "}
              <span className="bg-my-brand text-black font-bold max-sm:text-sm text-lg btn btn-ghost btn-circle max-sm:w-6 max-sm:h-6 w-8 h-8 ml-2">
                {workoutPlans.length}
              </span>
            
            </Link>

            <Link href="/my-plan" className="badge px-3 py-4 sm:p-5 bg-[#0f0b0b] hover:bg-slate-900 text-[#D1D5DB] hover:text-gray-400 font-medium cursor-pointer rounded-3xl">
              Saved{" "}
              <span className="bg-black border-[#D1D5DB] text-[#D1D5DB] font-bold max-sm:text-sm text-lg btn btn-ghost btn-circle max-sm:w-6 max-sm:h-6 w-8 h-8 ml-2">
                {savedPlans.length}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
