"use client";

import Link from "next/link";
import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/");
  };

  return (
    <header className="header flex">
      <div className="logo">
        <Link href={"/"}>GoalSetter</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
