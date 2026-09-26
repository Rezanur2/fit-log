"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={
            pathname === "/"
              ? "text-my-brand rounded-4xl p-4 badge"
              : "text-[#9CA3AF] p-4"
          }
          href="/"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={
            pathname === "/myPlan"
              ? "text-my-brand rounded-4xl p-4 badge"
              : "text-[#9CA3AF] p-4"
          }
          href="/myPlan"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#0f0b0b] border-b border-[#44484f] ">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="md:hidden dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-[#9CA3AF]"
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
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt={"Fit-Log"}
              className="max-sm:w-5 max-sm:h-5"
            />
            <h2 className="text-white font-black max-sm:text-[16px] text-[20px] tracking-[0.9px] leading-7 font-oswald">
              FITLOG
            </h2>
          </div>
          <ul className="flex items-center gap-2 max-md:hidden font-semibold text-[14px]">
            {links}
          </ul>
          <div className="flex max-sm:text-sm justify-center max-sm:gap-1 gap-6">
            <button className="p-1 text-[#D1D5DB] font-medium">
              Plan{" "}
              <span className="bg-my-brand text-black font-bold max-sm:text-sm text-lg btn btn-ghost btn-circle max-sm:w-6 max-sm:h-6 w-8 h-8 ml-2">
                0
              </span>
            </button>
            <button className="p-1 text-[#9CA3AF] font-medium">
              Saved{" "}
              <span className="bg-black border-[#D1D5DB] text-[#D1D5DB] font-bold max-sm:text-sm text-lg btn btn-ghost btn-circle max-sm:w-6 max-sm:h-6 w-8 h-8 ml-2">
                0
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
