import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="w-full sticky top-0 bg-white">
      <div className="w-full flex flex-col md:flex-row p-[2rem]">
        <div className="flex justify-start items-center w-full md:w-1/4  border-b md:border-none border-black">
          <Link href={"/"}>WalletWise.</Link>
        </div>
        <div className="flex justify-start md:justify-center items-center w-full md:w-1/2 border-b md:border-none border-black py-2 md:py-0 overflow-hidden">
          <ul className="flex flex-col md:flex-row  gap-1 md:gap-8">
            <li>
              <Link href={"/"}>home</Link>
            </li>
            <li>
              <Link href={"/store"}>store</Link>
            </li>
            <li className="flex border-b border-black">
              <img src="/icons/search.svg" width={25} height={25} alt="" />
              <input
                type="text"
                placeholder="search products here.."
                className="focus:outline-none px-1"
              />
            </li>
          </ul>
        </div>
        <div className="flex justify-start md:justify-end items-center w-full md:w-1/4  border-b md:border-none border-black">
          <ul className="flex flex-col md:flex-row gap-1 md:gap-8">
            <li>
              <Link href={"/authentication/signin"}>signin</Link>
            </li>
            <li>cart</li>
          </ul>
        </div>
      </div>
      <div className="px-[2rem] hidden md:block">
        <hr className="bg-black h-[2px]" />
      </div>
    </nav>
  );
}
