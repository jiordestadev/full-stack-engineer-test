import Link from "next/link";
import React from "react";

export default function Signup() {
  const class_input =
    "w-full focus:outline-none p-[1rem] bg-black bg-opacity-15 rounded-lg text-white placeholder:text-white focus:bg-opacity-5 focus:text-black focus:placeholder:text-black";
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-[1rem]">
      <h1 className="p-[2rem] text-center uppercase bg-gray-700 w-full rounded-lg text-white">
        Signup
      </h1>
      <form className="space-y-2 my-2">
        <input type="text" placeholder="first name" className={class_input} />
        <input type="text" placeholder="lastname" className={class_input} />
        <input type="text" placeholder="username" className={class_input} />
        <input type="password" placeholder="password" className={class_input} />
        <div className="flex justify-enter items-center">
          <div className="flex gap-2 w-1/2 justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="border border-black rounded-full p-1 w-[15px] h-[15px]" />
            </div>
            <h1>i am seller</h1>
          </div>
          <div className="flex gap-2 w-1/2 justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="border border-black rounded-full p-1 w-[15px] h-[15px]" />
            </div>
            <h1>i am buyer</h1>
          </div>
        </div>
        <button className="bg-teal-400 rounded-lg p-[1rem] w-full text-white drop-shadow-lg hover:bg-opacity-50 hover:text-black">
          Signup
        </button>
        <div className="flex justify-center items-center">
          <Link
            href={"/authentication/signin"}
            className="text-center underline"
          >
            already have an account
          </Link>
        </div>
      </form>
    </div>
  );
}
