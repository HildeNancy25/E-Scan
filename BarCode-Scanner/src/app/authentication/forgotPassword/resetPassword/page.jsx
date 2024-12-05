'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const resetForgotPassword = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        if (!password) {
            setErrorMessage('Please enter your password to reset your password.');
            return;
        }

        try {
            const response = await fetch('https://iro-website-bn-vx04.onrender.com/api/Inventory/users/forgot-Password', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                throw new Error('Failed to send reset password password');
            }

            setSuccessMessage('Check your password to reset your password.');

        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center md:px-4 px-2 pt-10 md:pt-24 bg-white">
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-l max-w-2xl w-full mx-4">
                <div className="w-full md:w-2/5 bg-[#0B3004] text-white flex flex-col justify-center items-center p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                    <Image
                        src="/logo.png"
                        alt="Igire Rwanda Organisation"
                        width={100}
                        height={100}
                        priority={true}
                        className="md:w-36 md:h-36 w-24 h-24"
                    />
                    <h1 className="text-lg md:text-xl font-bold mt-4">Igire Rwanda</h1>
                    <p className="text-md md:text-lg mt-2">Organisation</p>
                </div>

                <div className="w-full md:w-3/5 flex justify-center items-center p-6 md:p-8">
                    <div className="w-full max-w-xs md:max-w-sm">
                        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
                            Reset Password
                        </h2>
                        {successMessage && (
                            <p className="my-4 text-center text-green-600">{successMessage}</p>
                        )}
                        {errorMessage && (
                            <p className="mb-4 text-center text-red-600">{errorMessage}</p>
                        )}
                        <form  className="bg-gray-100 p-6 md:p-10 rounded-lg">
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700">
                                    New password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter new password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700">
                                    Confirm new password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Confirm new password"
                                    value={password}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <a href='/authentication/login'>
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 text-white font-semibold py-2 md:py-3 rounded-md hover:bg-green-600"
                                >
                                    Reset 
                                </button></a>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
