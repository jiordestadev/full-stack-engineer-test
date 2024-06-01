import Link from "next/link";
import React from "react";

export default function Signin() {
  const class_input =
    "w-full focus:outline-none p-[1rem] bg-black bg-opacity-15 rounded-lg text-white placeholder:text-white focus:bg-opacity-5 focus:text-black focus:placeholder:text-black";
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-[1rem]">
      <h1 className="p-[2rem] text-center uppercase bg-gray-700 w-full rounded-lg text-white">
        Signin
      </h1>
      <form className="space-y-2 my-2">
        <input type="text" placeholder="username" className={class_input} />
        <input type="password" placeholder="password" className={class_input} />
        <button className="bg-teal-400 rounded-lg p-[1rem] w-full text-white drop-shadow-lg hover:bg-opacity-50 hover:text-black">
          Signin
        </button>
        <div className="flex justify-center items-center">
          <Link
            href={"/authentication/signup"}
            className="text-center underline"
          >
            i don't have an account
          </Link>
        </div>
      </form>
    </div>
  );
}
