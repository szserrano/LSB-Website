"use client";
import { useState } from "react";
import { items } from "../../public/equippics.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BootStrapCarousel() {
    const { bootstrapCarousel } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => { 
        setIndex(selectedIndex);
    };

    const activeItem = bootstrapCarousel[index];

    return (
        <div className="relative w-full max-w-[500px] aspect-square mx-auto overflow-hidden rounded-lg [&_.carousel]:h-full [&_.carousel-inner]:h-full [&_.carousel-item]:h-full">
            <Carousel activeIndex={index} onSelect={handleSelect} className="h-full">
                {bootstrapCarousel.map((item) => (
                    <Carousel.Item key={item.id} className="h-full">
                        <img
                            src={item.imageURL}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* Single caption overlay at top - avoids duplicate captions overlapping during slide transition */}
            <div className="position-absolute top-0 start-0 end-0 p-3 text-white text-center bg-black/50 rounded-b">
                <h3 className="mb-1">{activeItem.title}</h3>
                <p className="mb-0">{activeItem.body}</p>
            </div>
        </div>
    );
}