"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [barcode, setBarcode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMethod, setLoginMethod] = useState("username");
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
      if (username.trim() === "" || password.trim() === "") {
        setErrorMessage("Please enter both username and password.");
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
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('bg.PNG')" }}
    >
      <div className="bg-white  text-black shadow-md rounded-lg max-w-lg w-full mx-4 p-8">
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
            <p className="flex flex-col text-4xl font-serif">
              E-SCAN{" "}
              <span className="text-sm text-gray-400">
                Your wellness, decoded
              </span>
            </p>
          </div>
          <h1 className="text-2xl font-bold ">Welcome Back!</h1>
          <p className=" text-sm mt-2">
            Please log in using your preferred method.
          </p>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <Button
            onClick={() => setLoginMethod("username")}
            className={`px-4 py-2 ${
              loginMethod === "username"
                ? "bg-green-500 hover:bg-green-700 "
                : "bg-gray-100  text-gray-700 hover:text-white"
            } rounded-md`}
          >
            Username/Password
          </Button>
          <Button
            onClick={() => setLoginMethod("barcode")}
            className={`px-4 py-2 ${
              loginMethod === "barcode"
                ? "bg-green-500 hover:bg-green-700"
                : "bg-gray-100  text-gray-700 hover:text-white"
            } rounded-md`}
          >
            Barcode
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          {loginMethod === "username" && (
            <>
              <div className="relative">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
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
                />
                <p className="mt-2">
                  <a
                    href="./authentication/forgotPassword"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    Forgot your password?
                  </a>
                </p>
              </div>
            </>
          )}

          {loginMethod === "barcode" && (
            <div className="relative">
              <label
                htmlFor="barcode"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Barcode
              </label>
              <input
                type="text"
                id="barcode"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Scan or enter barcode"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                required
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-green-500 text-white  font-semibold py-3 rounded-md hover:bg-green-600 transition-all"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner border-t-transparent border-4 border-white h-5 w-5 rounded-full animate-spin inline-block"></span>
            ) : (
              "Login"
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

        <div className="mt-10 text-center">
          <p>
            Don't have an account?{" "}
            <a
              href="./authentication/signin"
              className="text-blue-400 hover:text-blue-600 ml-3 font-semibold"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
