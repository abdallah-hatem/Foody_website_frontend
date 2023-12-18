"use client";
import useScrollHeight from "@/hooks/useScrollHeight";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const { scrollThershold } = useScrollHeight();

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    scrollThershold && (
      <div
        onClick={handleClick}
        className="w-[43px] h-[43px] rounded-full bg-primary fixed right-5 bottom-5 flex items-center justify-center text-[22px] text-[white] cursor-pointer hover:opacity-80 duration-300"
      >
        <FaArrowUp />
      </div>
    )
  );
}
