import { useRef, useState } from "react";

const useTabsScroll = () => {
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const container = tabContainerRef.current;

    if (container) {
      const scrollAmount = 200;
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return { tabContainerRef, handleScroll, setScrollPosition };
};

export default useTabsScroll;
