"use client";
import useScrollHeight from "@/hooks/useScrollHeight";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const { scrollThershold } = useScrollHeight();
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = [
    { name: "Home", url: "#home" },
    { name: "About Us", url: "#about" },
    { name: "Products", url: "#products" },
    { name: "Constact Us", url: "#contact" },
  ];
  return (
    <nav
      className={`h-[70px] flex items-center z-10 fixed w-full duration-[400ms] ${
        scrollThershold &&
        "bg-[white] shadow-lg border-b-[1px] border-[lightgray] md:border-none"
      }`}
    >
      <div className="flex justify-between w-[93%] mx-auto">
        <h2>
          <span className="text-primary">F</span>
          <span className="text-secondary">oo</span>
          <span className="text-primary">dy</span>
        </h2>

        <ul className="hidden md:flex gap-5 items-center">
          {links.map((el, index) => (
            <Link href={el.url} key={index}>
              <li>{el.name}</li>
            </Link>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setToggleMenu((prev: boolean) => !prev)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile view */}
      <div
        className={`bg-[white] py-9 pl-5 w-full absolute shadow-md duration-500 ease-in-out -z-10 ${
          toggleMenu ? "top-[70px]" : "top-[-300px]"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {links.map((el, index) => (
            <Link
              onClick={() => setToggleMenu(false)}
              href={el.url}
              key={index}
            >
              <li>{el.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
