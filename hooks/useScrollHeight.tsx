import { useEffect, useState } from "react";

export default function useScrollHeight() {
  const [scrollThershold, setScrollThershold] = useState(false);

  function changeNavbarColor() {
    window.scrollY >= 65 ? setScrollThershold(true) : setScrollThershold(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return { scrollThershold };
}
