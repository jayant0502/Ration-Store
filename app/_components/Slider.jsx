import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ sliderData }) => {
  return (
    <div>
      <Carousel >
        <CarouselContent >
          {sliderData.map((item, index) => {
            return (
              <CarouselItem key={index} >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASEURL +
                    item?.attributes?.image.data[0]?.attributes?.url
                  }
                  alt={
                    item?.attributes?.image.data[0]?.attributes?.alternativeText
                  }
                  width={1000}
                  height={350}
                  quality={100}
                  className="w-full  h-[200px] md:h-[380px] object-cover rounded-2xl "
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
