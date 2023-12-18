import React from "react";

interface Props {
  title?: string;
  style?: string;
}

export default function ButtonComp({ title, style }: Props) {
  return (
    <button
      className={`rounded-3xl px-12 py-4 text-md text-[white] hover:opacity-[85%] duration-300 ${style}`}
    >
      {title}
    </button>
  );
}
