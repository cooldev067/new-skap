"use client";

import React, { useEffect, useState } from "react";
import { Client, Databases, Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import CardSkeleton from "@/components/CardSkeleton";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66cc3d01000e59e4a9d7");

const PhoneCoverCard = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "66cc3e4f001c0677c96c",
      "66cc3e6b003be60cf624",
      [Query.equal("Category", "Phone-Covers")]
    );

    promise.then(
      function (response) {
        setProduct(response.documents);
        setLoading(false);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <main className="flex justify-center p-10 gap-8 flex-wrap">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        : Product.map((product) => (
            <div
              key={product.$id}
              className="card card-compact bg-base-100 w-72 shadow-xl"
            >
              <Link href={`/${product.slug}`}>
                <figure>
                  <Image
                    width={600}
                    height={600}
                    src={product.Image}
                    className="h-72 object-contain rounded-t-2xl"
                    alt={product.Title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.Title}</h2>
                  <div className="card-actions flex justify-between items-center">
                    <h1 className="text-xl font-semibold">₹{product.Price}</h1>
                    <button className="btn bg-black text-white">Buy Now</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
    </main>
  );
};

export default PhoneCoverCard;
