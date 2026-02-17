import { useState } from "react";
import { items } from "../../public/items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Carousel.module.css";

export default function BootStrapCarousel() {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
    return (
        <Carousel>
            {items.items.bootstrapCarousel.map((item) => (
                <Carousel.Item key={item.id}>
                    <Image src={item.image} alt={item.alt} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}