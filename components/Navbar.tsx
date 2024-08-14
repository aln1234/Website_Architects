import { navItems } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-row gap-4 justify-center  items-center my-16">
      <header className="basis-1/4 cursor-pointer">
        <Image src="/assets/icons/logo.png" alt="Logo" height={44} width={80} />
      </header>
      <main className=" basis-4/5">
        <ul className="flex gap-24 uppercase  text-slate-800 text-lg cursor-pointer font-normal tracking-widest">
          {navItems.map((item, index) => (
            <li className="relative group" key={index}>
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Navbar;
