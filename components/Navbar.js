"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Categories from "./Categories";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDialog } from "@/context/Context";

const Navbar = () => {
  const { setOpen } = useDialog();

  return (
    <main>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Orders</a>
              </li>
              <li>
                <a>Customize your own</a>
              </li>
              <li>
                <a>Customer Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={400}
              height={400}
              className="w-24"
            />
          </Link>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="btn btn-ghost text-2xl btn-circle"
          >
            <MdOutlineShoppingCart />
          </button>
          <button className="btn btn-ghost btn-circle">
            <SignedOut>
              <Link href={"/sign-in"} className="text-3xl">
                <IoIosLogIn />
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </button>
        </div>
      </div>
      <Categories />
    </main>
  );
};

export default Navbar;
