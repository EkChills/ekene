"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide , useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SwiperType from 'swiper'
import { useEffect } from 'react'
import { cn } from "@/lib/utils";
import { MotionDiv } from "./MotionDiv";

type ImageSliderProps = {
  images:Array<{url:string; className?:string}>
}
export default function ImageSlider({images}:ImageSliderProps) {
  const [swiper, setSwiper] = useState<null | SwiperType>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    swiper?.on("slideChange", ({activeIndex}) => {
      setActiveIndex(activeIndex)
    })
  },[swiper])

  return (
    <MotionDiv initial={{opacity:0, y:100}}  whileInView={{opacity:1,  y:0, type:'spring'}} transition={{
      damping:5,
      stiffness:'50',
      mass:0.1,
      velocity:0.1
    }}  className="w-full overflow-hidden rounded-xl mt-6 aspect-video group relative">
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition flex items-center px-4">
        <div className="flex w-full justify-between ">
          <Button className={cn('p-2 flex items-center mr-auto justify-center rounded-full', activeIndex === 0 ? 'hidden'  : '')} onClick={() => swiper?.slidePrev()}>
            <ChevronLeft />
          </Button>
          <Button className={cn('p-2 flex items-center justify-center ml-auto rounded-full', activeIndex === 1 ? 'hidden' : '')}  onClick={() => swiper?.slideNext()}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Swiper
        className="w-full h-full"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {images.map((image, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <Image
            src={image.url}
            className={cn('w-full h-full object-center object-cover', image.className)}
            fill
            alt="project image"
          />
        </SwiperSlide>

        ) )}
      </Swiper>
    </MotionDiv>
  );
}

        // <SwiperSlide>
        //   <Image src={"/assets/surveyy4.png"} className="object-right-top object-cover" fill alt="project image" />
        // </SwiperSlide>