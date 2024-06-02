import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function Home() {
  const Hero = () => {
    return (
      <div className="lg:h-[500px]">
        <div className="h-full flex flex-col-reverse lg:flex-row">
          <div className="w-full flex justify-center items-center">
            <div className="py-[2rem]">
              <h1 className="text-6xl md:text-7xl lg:text-8xl">Wallet Wise</h1>
              <p>
                Shop smart, live stylishly: Wallet Wise – where savvy meets
                chic!
              </p>
              <div className="py-[2rem]">
                <button className="bg-teal-400 px-4 py-2 rounded-lg drop-shadow-lg hover:bg-opacity-25">
                  Shop now!
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div>
              <img
                src="/images/1.jpg"
                className="rounded-lg w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <section className="min-h-screen p-[2rem]">
        <Hero />
      </section>
      <Footer />
    </>
  );
}
