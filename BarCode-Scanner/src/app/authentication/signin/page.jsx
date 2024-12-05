"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Signin = () => {
  const [barcode, setBarcode] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [password, setPassword] = useState("");
  const [loginMethod, setLoginMethod] = useState("companyname");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (loginMethod === "barcode") {
      if (barcode.trim() === "") {
        setErrorMessage("Please scan a valid barcode.");
        setLoading(false);
        return;
      }

      setTimeout(() => {
        setSuccessMessage("Login successful! Redirecting to your dashboard...");
        setLoading(false);
        router.push("/dashboard/admin");
      }, 1500);
    } else {
      if (companyname.trim() === "" || password.trim() === "") {
        setErrorMessage("Please enter both company name and password.");
        setLoading(false);
        return;
      }

      setTimeout(() => {
        setSuccessMessage("Login successful! Redirecting to your dashboard...");
        setLoading(false);
        router.push("/dashboard/admin");
      }, 1500);
    }
  };

  return (
    <div
      className="flex items-center justify-evenly min-h-screen bg-cover"
      style={{ backgroundImage: "url('/bg.PNG')" }}
    >
      <div className="text-white text-md flex flex-col items-start w-1/3 gap-6">
        <div className="flex gap-5">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={100}
            priority={true}
            className="mx-auto mb-4 rounded-full"
          />
          <p className="flex flex-col text-4xl font-serif">E-SCAN <span className="text-sm text-gray-400">Your wellness, decoded</span></p>
        </div>
        <p>Welcome to <span className="font-bold">E-SCAN</span>.

          Easily scan and manage barcodes with our user-friendly scanner. Whether you're tracking inventory,
          managing products, or organizing your business, this tool streamlines your operations</p>
      </div>
      <div className="bg-white text-black shadow-md rounded-lg max-w-lg w-full mx-4 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Register</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <>
           <div className="relative">
              <label
                htmlFor="companyname"
                className="block text-sm  mb-2"
              >
                Company name
              </label>
              <input
                type="text"
                id="companyname"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your company name"
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm  mb-2"
              >
                Comfirm Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Comfirm password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>

          <Button
            type="submit"
            className="w-full bg-green-500 text-white  font-semibold py-3 rounded-md hover:bg-green-600 transition-all"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner border-t-transparent border-4 border-white h-5 w-5 rounded-full animate-spin inline-block"></span>
            ) : (
              "Register"
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

        <div className="mt-6 text-center">
          <p>
            Arleady have account?{" "}
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 ml-3 font-semibold"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
