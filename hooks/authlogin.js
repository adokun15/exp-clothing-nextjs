"use client";
import { auth } from "@/firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
//mode, emailonchange, passwordonchange
import { useState } from "react";

export const useAuth = async (mode) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({ isError: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleEmailOnchange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordOnchange = (e) => {
    setPassword(e.target.value);
  };

  const triggerSubmit = async () => {
    if (mode === "signup") {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          //Store Uid in Cookies
          //Create database user:
          //redirect
          setError({ isError: null, message: null });
        })
        .catch((err) => setError({ isError: true, message: err?.code }))
        .finally(() => {
          setLoading(false);
        });
    }

    if (mode === "login") {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          //Store Uid in Cookies
          //redirect
          setError({ isError: null, message: null });
        })
        .finally(() => {
          setLoading(false);
        });
    }

    setLoading(true);
    setError({ isError: true, message: "Something went wrong!" });
  };

  return {
    triggerSubmit,
    loading,
    error,
    emailChange: handleEmailOnchange,
    passwordChange: handlePasswordOnchange,
  };
};
