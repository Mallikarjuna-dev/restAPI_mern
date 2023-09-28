"use client";

import Header from "@/Components/Header";
import React from "react";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "@/redux/features/auth/authSlice";
import Spinner from "@/Components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const router = useRouter();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, IsError, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  useEffect(() => {
    if (IsError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      router.push("/");
    }

    dispatch(reset());
  }, [user, isSuccess, IsError, message, router, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="container">
        <section className="heading">
          <div className="flex gap-2 justify-center items-baseline">
            <FaSignInAlt className="text-2xl" />
            <h1>Login</h1>
          </div>
          <p>Log-on to your account</p>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Login
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
