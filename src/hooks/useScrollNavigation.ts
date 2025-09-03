"use client";

const useScrollNavigation = () => {
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollToSection };
};

export default useScrollNavigation;
