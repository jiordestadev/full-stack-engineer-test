"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

interface PaymentServiceProps {
  name: String;
  value: String;
}

export default function CartModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  ///use effect here to disable scrolling

  const Product = () => {
    return (
      <div className="flex gap-4 border-b border-black p-2">
        <h1>product 1</h1>
        <h1>$69.00</h1>
        <h1>x9</h1>
        <h1>$9939393</h1>
      </div>
    );
  };

  const PaymentService = ({ name, value }: PaymentServiceProps) => {
    return (
      <div className="cursor-pointer px-[3rem] py-1 text-white rounded-lg bg-gray-700">
        <h1>{name}</h1>
      </div>
    );
  };

  const Modal = () => {
    return (
      <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div className="bg-white w-3/4 h-3/4 rounded-lg">
          <div className="flex relative p-[2rem] gap-[2rem]">
            <div className="w-1/2">
              <ul className="flex flex-col gap-2 max-h-[500px] overflow-auto">
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <div className="border-b border-black">
                <h1 className="text-xl uppercase">Cart Status</h1>
                <h1>Total Items: 77</h1>
                <h1>Total Price: $8823</h1>
              </div>
              <div className="border-b border-black py-2 flex gap-2">
                <div className="w-1/2">
                  <h1 className="text-xl uppercase">Cash on Delivery</h1>
                </div>
                <div className="w-1/2 flex flex-col gap-2 bg-black bg-opacity-75 p-[1rem] rounded-lg relative">
                  <PaymentService name="GCash" value="gcash" />
                  <PaymentService name="GCash" value="gcash" />
                  <div className="flex justify-center items-center w-full h-full absolute text-white">
                    <h1>under maintenance</h1>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <button className="bg-teal-400 px-[2rem] py-1 rounded-lg drop-shadow-lg text-white hover:bg-opacity-75 hover:text-black">
                  Checkout
                </button>
              </div>
            </div>
            <Link
              href={pathname}
              className="absolute top-0 right-0 translate-x-3    -translate-y-3"
            >
              <img src="/icons/close.svg" width={40} height={40} alt="" />
            </Link>
          </div>
        </div>
      </dialog>
    );
  };

  return <>{modal && <Modal />}</>;
}
