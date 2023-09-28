"use client";

import Link from "next/link";
import React, { Suspense, useEffect, useMemo } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout, reset } from "@/redux/features/auth/authSlice";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // const memoizedUser = useMemo(() => user, [user]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/");
  };

  // useEffect(() => {}, []);

  return (
    <header className="header flex">
      <div className="logo">
        <Link href={"/"}>GoalSetter</Link>
      </div>
      <ul>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
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
        {/* </Suspense> */}
      </ul>
    </header>
  );
};

export default Header;
