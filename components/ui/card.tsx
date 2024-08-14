import Image from "next/image";
import React from "react";

type ImageProps = {
  src: string;
  alt: string;
};

const card = ({ src, alt }: ImageProps) => {
  return (
    <div className=" w-full h-96 curosor-pointer hover:bg-black relative ">
      <img src={src} alt={alt} className="h-full w-full hover:opacity-40" />
      <h1 className="text-6xl text-white hidden hover:inline-flex top-24 ml-12 absolute">
        Sample Project
      </h1>
    </div>
  );
};

export default card;
