"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ImageSwiperProps = {
    images: string[];
};

export default function ImageSwiper({ images }: ImageSwiperProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full h-full">
                        <Image src={image} alt={`Image ${index}`} width={1000} height={1000} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}