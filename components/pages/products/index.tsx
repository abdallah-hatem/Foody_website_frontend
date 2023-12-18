"use client";
import { useState } from "react";
import ProductCard from "./productCard";
import "./styles.css";
import tomatoImg from "@/public/tomato-img.jpg";
import pineappleImg from "@/public/pineapple-img.jpg";

export default function Products() {
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = [
    { name: "All" },
    { name: "Vegetables" },
    { name: "Fruits" },
  ];

  const products = [
    { title: "Fresh Tomato", cat: "Vegetables", img: tomatoImg },
    { title: "Fresh Tomato", cat: "Vegetables", img: tomatoImg },
    { title: "Fresh Tomato", cat: "Vegetables", img: tomatoImg },
    { title: "Fresh Pineapple", cat: "Fruits", img: pineappleImg },
    { title: "Fresh Pineapple", cat: "Fruits", img: pineappleImg },
    { title: "Fresh Pineapple", cat: "Fruits", img: pineappleImg },
    { title: "Fresh Pineapple", cat: "Fruits", img: pineappleImg },
    { title: "Fresh Pineapple", cat: "Fruits", img: pineappleImg },
  ];

  const handleClick = (cat: string) => setSelectedCat(cat);

  return (
    <div id="products" className="w-[80%] mx-auto mt-[80px]">
      <div>
        <div className="border-[2px] w-[60px] border-primary"></div>
        <div className="border-[2px] w-[110px] border-secondary mt-2"></div>
        <h1>Our Products</h1>
        <div className="flex justify-between items-center max-[900px]:flex-col max-[900px]:items-start">
          <p className="text-[gray]">
            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
            <br />
            diam justo sed rebum vero dolor duo.
          </p>
          <div className="flex gap-2 max-[900px]:mt-5">
            {categories.map((el, index) => (
              <button
                className={`border-2 border-primary p-2 hover:bg-primary hover:text-[white] duration-300 ${
                  selectedCat === el.name && "bg-primary text-[white]"
                }`}
                onClick={() => handleClick(el.name)}
                key={index}
              >
                {el.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 max-[720px]:grid-cols-1 max-[1090px]:grid-cols-2 max-[1280px]:grid-cols-3 max-[5000px]:grid-cols-4">
        {products.map((el, index) => {
          if (selectedCat !== "All") {
            return (
              selectedCat === el.cat && (
                <ProductCard title={el.title} img={el.img} key={index} />
              )
            );
          } else {
            return <ProductCard title={el.title} img={el.img} key={index} />;
          }
        })}
      </div>
    </div>
  );
}
