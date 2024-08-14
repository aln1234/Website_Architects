import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-16 bg-slate-50 flex gap-12">
      <section className="my-12 ml-20 basis-3/5">
        <div className="flex gap-12">
          <div className="flex flex-col relative">
            <Image
              src="/assets/images/about_1.png"
              alt="About_Image"
              height={400}
              width={350}
            />
            <Image
              src="/assets/images/about_3.png"
              alt="About_Image"
              height={100}
              width={400}
              className="absolute -bottom-20"
            />
          </div>
          <Image
            src="/assets/images/about_2.png"
            alt="About_Image"
            height={400}
            width={350}
            className="mt-16"
          />
        </div>
      </section>
      <section className="my-12 basis-3/5">
        <h1 className="text-7xl font-extralight text-[#BDBDBD]">About</h1>
        <p className="mr-20 mt-4 font-mono font-extralight">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>
    </div>
  );
};

export default About;
