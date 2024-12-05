"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Barcode from "react-barcode";

export default function ProductAdder() {
    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
        setProducts(savedProducts);
    }, []);

    const generateBarcode = () => {
        return Math.floor(100000000 + Math.random() * 900000000).toString();
    };

    const handleAddProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            barcode: generateBarcode(),
            name: productName,
            timestamp: new Date().toLocaleString(),
        };

        const updatedProducts = [newProduct, ...products];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        setProductName("");

        setSuccessMessage(`Product "${newProduct.name}" added successfully.`);
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <div className="flex">
                <Card className="w-1/3 h-full">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                        {successMessage && (
                            <p className="text-green-600 text-sm mb-4">{successMessage}</p>
                        )}
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="productName" className="text-sm font-medium">
                                    Product Name
                                </label>
                                <Input
                                    id="productName"
                                    type="text"
                                    placeholder="Enter product name"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="bg-green-500 hover:bg-green-600">
                                Add Product
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="w-3/4 pl-10">
                    <h2 className="text-xl font-semibold mb-4">Registered Products</h2>
                    <div className="flex flex-wrap gap-3">
                        {products.length === 0 ? (
                            <p className="text-gray-500 text-center">No products added yet.</p>
                        ) : (
                            products.map((product, index) => (
                                <Card key={index} className="p-4">
                                    <div className="space-y-2 w-80">
                                        <h3 className="font-medium">Product: {product.name}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Added at: {product.timestamp}
                                        </p>
                                        <div className="mt-4">
                                            <Barcode
                                                value={product.barcode}
                                                width={2}
                                                height={50}
                                            />
                                        </div>
                                        
                                    </div>
                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
