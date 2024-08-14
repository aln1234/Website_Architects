"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Card from "./ui/card";
import { imagesName } from "@/constants";

const Projects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <section>
        <h1 className="text-6xl font-extralight text-[#BDBDBD]">
          Our Projects
        </h1>
      </section>
      <section className="my-12">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="">
            {imagesName.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-2/3 cursor-pointer  lg:basis-1/2"
              >
                <Card src={item.src} alt={item.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default Projects;
