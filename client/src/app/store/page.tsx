import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import React from "react";

export default function Store() {
  const AllProducts = () => {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl">All Products</h1>
        <ul className="flex flex-wrap gap-2">
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
        <button className="underline">expand all products</button>
        <hr />
      </div>
    );
  };

  const CategoryProduct = () => {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl">Men's Clothing Products</h1>
        <ul className="flex flex-wrap gap-2">
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
        <button className="underline">expand men's clothing products</button>
        <hr />
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <section className="min-h-screen p-[2rem]">
        <AllProducts />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
      </section>
      <Footer />
    </>
  );
}
