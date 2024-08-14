import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center gap-4 my-16">
      <section className="basis-1/4">
        <div className="flex flex-col gap-1">
          <h1 className="text-slate-400 font-extralight uppercase text-7xl">
            Project
          </h1>
          <h1 className="text-black font-semibold text-6xl">Lorum</h1>
        </div>
        <div className="flex items-center pt-16 gap-4">
          <div className="px-4 py-4 border border-slate-200 hover:bg-slate-200 cursor-pointer ">
            <ArrowLongLeftIcon className="w-6" />
          </div>

          <div className="border border-slate-200 px-4 py-4 hover:bg-slate-200 cursor-pointer">
            <ArrowLongRightIcon className="w-6" />
          </div>
        </div>
        <div className="flex items-center pt-16 gap-4 cursor-pointer">
          <div className="flex flex-col">
            <p className="text-slate-300 text-xl">0</p>
            <p className="text-slate-300 text-xl">1</p>
          </div>
          <span className="w-8 bg-slate-300 h-[1px] -rotate-45"></span>

          <div className="flex  flex-row">
            <p className="text-slate-300 text-xl">0</p>
            <p className="text-slate-300 text-xl">2</p>
          </div>
        </div>
      </section>
      <section
        className="bg-no-repeat bg-cover relative basis-3/5 h-[800px]"
        style={{ backgroundImage: "url(assets/images/hero_image.png)" }}
      >
        <div className="bg-white px-16 py-4 shadow-sm flex items-center justify-center gap-4  absolute bottom-0 ">
          <p className="font-mono tracking-widest uppercase font-thin text-slate-600">
            View Project
          </p>
          <ArrowLongRightIcon className="w-6" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
