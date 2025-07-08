import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("home");

  const menuItems = ["home", "services", "projects", "about", "Blogs"];

  const scrollToSection = (sectionId) => {
    setActive(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (
      sectionId === "projects" ||
      sectionId === "about" ||
      sectionId === "blogs"
    ) {
      // For sections that don't exist yet, scroll to services as fallback
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black h-[80px] w-full pt-[10px] relative z-50">
      <div className="h-[60px] w-[650px] border-[#c8c8c8] border rounded-4xl  fixed top-0 left-0 ml-[400px] mt-[20px]  flex items-center bg-black font-[Inter] text-sm md:text-base tracking-wide">
        <ul className="flex justify-evenly items-center w-full h-full">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === item.toLowerCase()
                  ? "bg-[#262424] text-[#BE6A26]"
                  : "text-white hover:text-[13px] hover:bg-[#4f4e4e]"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
