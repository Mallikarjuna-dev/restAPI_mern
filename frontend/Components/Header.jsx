"use client";

import Link from "next/link";
import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header flex">
      <div className="logo">
        <Link href={"/"}>GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link href={"/login"}>
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link href={"/register"}>
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
