"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    setTimeout(() => {
      setSuccessMessage("Password sent to your email...");
      setLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/bg.PNG')" }} 
    >
      <div className="bg-white shadow-md rounded-lg max-w-lg w-full mx-4 p-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-5 mb-10">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={100}
              priority={true}
              className=" mb-4 rounded-full"
            />
            <p className="flex flex-col text-4xl font-serif">E-SCAN 
              <span className="text-sm text-gray-400">Your wellness, decoded</span>
              </p>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Forgot password?</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-600 transition-all"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner border-t-transparent border-4 border-white h-5 w-5 rounded-full animate-spin inline-block"></span>
            ) : (
              "Send password"
            )}
          </Button>

          {successMessage && (
            <div className="text-green-600 text-center mt-5">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-600 text-center">{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
