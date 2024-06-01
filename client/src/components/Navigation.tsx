import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="w-full sticky top-0">
      <div className="w-full flex flex-col md:flex-row p-[2rem]">
        <div className="flex justify-start items-center w-full md:w-1/4  border-b md:border-none border-black">
          <Link href={"/"}>WalletWise.</Link>
        </div>
        <div className="flex justify-start md:justify-center items-center w-full md:w-1/2 border-b md:border-none border-black">
          <ul className="flex flex-col md:flex-row  gap-1 md:gap-8">
            <li>home</li>
            <li>collections</li>
            <li>new release</li>
          </ul>
        </div>
        <div className="flex justify-start md:justify-end items-center w-full md:w-1/4  border-b md:border-none border-black">
          <ul className="flex flex-col md:flex-row gap-1 md:gap-8">
            <li>signin</li>
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
