"use client";

import MainNavigation from "@/components/MainNavigation";
import { useAuth } from "@/hooks/authlogin";
import { useState } from "react";

export default function AuthenticationComponent() {
  //Signup / Login
  const [mode, setAuthState] = useState("signup");
  const { error, triggerSubmit, emailChange, passwordChange, loading } =
    useAuth(mode);

  return (
    <>
      <div className="mx-[5%] md:mx-[20%] my-10 px-4 bg-white shadow shadow-slate-400">
        <h1 className="text-5xl">
          {mode === "login"
            ? "Login to your Account"
            : "Sign Up For a New Account"}
        </h1>
        <form method="post" className="*:block leading-9 *:my-4 my-5">
          <p>{error?.isError && error?.message}</p>
          <label className="text-2xl">Email</label>
          <input
            required
            type="email"
            onChange={emailChange}
            className={`ring-2 focus:ring-4 ring-black ring-offset-1 py-2 px-3 caret-blaack outline-none rounded w-full`}
            placeholder="Enter email address"
          />
          <label className="text-2xl">Password</label>
          <input
            name="password"
            type="password"
            onChange={passwordChange}
            className={`ring-2 focus:ring-4 ring-black ring-offset-1 py-2 px-3 caret-blaack outline-none rounded w-full`}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={triggerSubmit}
            className={`bg-black shadow-slate-600 shadow text-white py-1 px-3 hover:scale-105 focus:scale-95 text rounded-xl  
    transition-colors duration-500 ease-in-out focus:translate-y-1
      `}
          >
            {loading ? "loading..." : "Submit"}
          </button>
          <article>
            {mode === "login" ? (
              <button
                type="button"
                onClick={() => setAuthState("signup")}
                className="block m-auto hover:scale-105"
              >
                Dont have an account... Sign up
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setAuthState("login")}
                className="block m-auto hover:scale-105"
              >
                Login into your Account
              </button>
            )}
          </article>
        </form>
      </div>
    </>
  );
}
