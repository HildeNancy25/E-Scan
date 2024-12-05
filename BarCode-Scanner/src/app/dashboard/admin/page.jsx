"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Barcode from "react-barcode";

const registeredProducts = [
  { productCode: "123456", name: "Product ALJU", company: "RSB" },
  { productCode: "123", name: "Product BNK", company: "RSB" },
  { productCode: "1234", name: "Product CCC", company: "RSB" },
  { productCode: "9876", name: "Product D", company: "RSB" },
  { productCode: "98765", name: "Product ECD", company: "RDB" },
  { productCode: "654", name: "Product FRT", company: "RDB" },
  { productCode: "7654", name: "Product GRV", company: "RSSB" },
  { productCode: "87654", name: "Product HSD", company: "RRA" },
  { productCode: "54321", name: "Product FGI", company: "RRA" },
  { productCode: "4321", name: "Product HS", company: "RRA" },
  { productCode: "321", name: "Product IH", company: "RRA" },
  { productCode: "3210", name: "Product IR", company: "RSSB" },
  { productCode: "43210", name: "Product KI", company: "RSSB" },
  { productCode: "32110", name: "Product ICV", company: "RFDA" },
  { productCode: "333221", name: "Product ITY", company: "RFDA" },
];

const BarcodeInputForm = () => {
  const [barcode, setBarcode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [validatedProducts, setValidatedProducts] = useState([]);
  const router = useRouter();

  const handleBarcodeSubmit = () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (barcode.trim() === "") {
      setErrorMessage("Please enter a valid barcode.");
      return;
    }

    const product = registeredProducts.find(
      (item) => item.productCode === barcode
    );

    if (!product) {
      setErrorMessage("Product not registered");
      return;
    }

    setValidatedProducts([...validatedProducts, product]);
    setSuccessMessage("Authenticated.");
    setBarcode("");
  };

  return (
    <div className="flex items-start min-h-screen py-6 bg-gray-50">
      <div className="w-full">
        <div className="flex w-full gap-10">
          <div className="bg-white rounded-lg shadow-md h-full mx-4 p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 text-start mb-4">
              Scan or Enter Product Barcode
            </h2>

            {successMessage && (
              <div className="text-green-600 text-center mb-4">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-red-600 text-center mb-4">
                {errorMessage}
              </div>
            )}

            <div>
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
              />
              <Button
                onClick={handleBarcodeSubmit}
                className="mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-all"
              >
                Check product
              </Button>
            </div>
          </div>
          <div className="w-3/4 pl-10">
            <h3 className="text-lg w-full font-semibold text-gray-700 mb-2">
              Scanned Products
            </h3>
            {validatedProducts.length > 0 ? (
              <ul className="gap-3 flex flex-wrap">
                {validatedProducts.map((product, index) => (
                  <li
                    key={index}
                    className="p-4 border border-gray-300 rounded-md shadow-sm"
                  >
                    <div>
                      <p className="font-semibold">
                        Name: {product.name}
                      </p>
                      <p>Registered under: {product.company}</p>
                      <p>Barcode Number: {product.productCode}</p>
                    </div>
                    <div className="mt-4">
                      <Barcode
                        value={product.productCode}
                        width={2}
                        height={50}
                        displayValue={false}
                      />
                    </div>
                    {/* <div>
                      <p></p>
                    </div> */}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">
                No products scanned yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodeInputForm;
