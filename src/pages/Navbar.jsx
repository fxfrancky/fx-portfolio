import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import NavLinks from "../components/NavLinks";
import { navLinks } from "../Data";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        isTop ? "shadow-lg bg-ghostWhite" : ""
      } fixed w-full top-0 left-0 z-20 dark:bg-gray-900 ${
        props.darkMode ? "dark" : ""
      } `}
    >
      <div className="w-full dark:bg-gray-900 dark:text-ghostWhite">
        <div className="container mx-auto flex items-center justify-between py-4 px-2 ">
          <div className="flex items-center gap-2">
            <div className="rounded-full w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold">
              XO
            </div>

            <p className="text-xl font-medium">
              <span>
                &#60;Xavier <span className="opacity-70">Owona /&#62;</span>
              </span>
            </p>
          </div>

          {/* Normal Menu */}
          <div className="md:flex hidden items-center gap-6">
            {navLinks.map((navlink) => {
              return (
                <div key={navlink.id}>
                  <a
                    href={navlink.href}
                    className="transition duration-700 ease-in-out font-normal text-base md:text-lg lg:text-xl text-slate-700 hover:text-teal-500 dark:text-ghostWhite dark:opacity-80 dark:hover:text-teal-500"
                  >
                    {navlink.text}
                  </a>
                </div>
              );
            })}
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl dark:text-gray-200"
              onClick={() => {
                props.toggleDarkmode();
              }}
            />
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <HiMenuAlt3
              className="cursor-pointer text-3xl md:hidden"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
        {toggle && (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            className="fixed right-0 top-0 bg-teal-500 h-screen text-white w-80 dark:text-ghostWhite"
          >
            <div className="flex flex-col gap-8 mt-[40%] ml-[30%]">
              {navLinks.map((navlink) => {
                return (
                  <NavLinks
                    key={navlink.id}
                    {...navlink}
                    setToggle={setToggle}
                  />
                );
              })}
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl dark:text-gray-200"
                onClick={() => {
                  props.toggleDarkmode();
                }}
              />
            </div>
            <HiX
              className="absolute right-4 text-3xl top-8 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
