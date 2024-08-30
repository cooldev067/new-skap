"use client";

import React, { useEffect, useState } from "react";
import { Client, Databases, ID, Query } from "appwrite";
import Image from "next/image";
import { useDialog } from "@/context/Context";
import ProductDetailSkeleton from "@/components/ProductDetailsSkeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66cc3d01000e59e4a9d7");

const databases = new Databases(client);

const ProductDetail = ({ params }) => {
  const { slug } = params;

  const router = useRouter();

  const [Details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [showToast, setShowToast] = useState(false);

  const { addToCart } = useDialog();

  useEffect(() => {
    let promise = databases.listDocuments(
      "66cc3e4f001c0677c96c",
      "66cc3e6b003be60cf624",
      [Query.equal("slug", slug)]
    );

    promise.then(
      function (response) {
        setDetails(response.documents);
        setLoading(false);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.$id,
      name: product.Title,
      price: product.Price,
      quantity: 1,
      imageSrc: product.Image,
      imageAlt: product.Title,
    });
  };

  const handleBuyNow = (product) => {
    if (
      product.Category === "Tshirt" &&
      (!selectedSize || selectedSize === "Size")
    ) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    router.push(
      `/user-details?id=${product.$id}&title=${encodeURIComponent(
        product.Title
      )}&price=${product.Price}&image=${encodeURIComponent(
        product.Image
      )}&size=${selectedSize}`
    );

    // const data = {
    //   Title: product.Title,
    //   Image: product.Image,
    //   Slug: product.slug,
    //   ID: product.$id,
    //   Price: product.Price,
    //   Quantity: 1,
    //   Size: selectedSize,
    // };

    // const promise = databases.createDocument(
    //   "66cc3e4f001c0677c96c",
    //   "66cc666b002d3a7ce7e3",
    //   ID.unique(),
    //   data
    // );

    // console.log(data);
    // promise.then(
    //   function (response) {
    //     console.log("Order created:", response, data);
    //     // Redirect to payment or order confirmation page if needed
    //   },
    //   function (error) {
    //     console.error("Error creating order:", error);
    //   }
    // );
  };

  return (
    <main>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert text-white font-semibold alert-info">
            <span>Select a size first.</span>
          </div>
        </div>
      )}
      <section className="text-gray-600 body-font overflow-hidden">
        {loading ? (
          <ProductDetailSkeleton />
        ) : (
          Details.map((details) => (
            <div key={details.$id} className="container px-5 py-10 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <Image
                  width={600}
                  height={600}
                  alt={details.Title}
                  className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded"
                  src={details.Image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {details.Title}
                  </h1>
                  <p className="leading-relaxed">{details.Description}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex items-center">
                      {details.Category === "Tshirt" && (
                        <div className="relative">
                          <select
                            onChange={(e) => setSelectedSize(e.target.value)}
                            value={selectedSize}
                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                          >
                            <option value="Select Size">Size</option>
                            {details.Size.map((size, index) => (
                              <option key={index}>{size}</option>
                            ))}
                          </select>
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ₹{details.Price}
                    </span>
                    <div>
                      <button
                        onClick={() => handleAddToCart(details)}
                        className="btn bg-black text-white"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleBuyNow(details)}
                        className="btn bg-black text-white"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default ProductDetail;
