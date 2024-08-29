import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <main>
      <ul className="flex px-5 bg-white text-black border-2 text-nowrap gap-5 text-lg font-medium items-center md:justify-center h-12 w-full overflow-x-scroll md:overflow-hidden">
        <li>
          <Link href={"/Tshirts/new-tshirts"}>T-Shirts</Link>
        </li>
        <li>
          <Link href={"/stickers/new-stickers"}>Stickers</Link>
        </li>
        <li>
          <Link href={"/mugs-cups/mugs-and-cups"}>Mugs & Cups</Link>
        </li>
        <li>
          <Link href={"/bottles/new-bottles"}>Bottles</Link>
        </li>
        <li>
          <Link href={"/phone-covers/new-covers"}>Phone Covers</Link>
        </li>
        <li>
          <Link href={"/"}>Customize Your Own</Link>
        </li>
      </ul>
    </main>
  );
};

export default Categories;
