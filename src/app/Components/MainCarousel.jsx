"use client";
import { Carousel } from "antd";
import { useState, useEffect } from "react";

const DEFAULT_SLIDES = [
    { src: "/Images/cocukParki.35.06.jpeg", alt: "Çocuk Parkı" },
    { src: "/Images/cocuklarElSalliyor.jpeg", alt: "El Sallayan Çocuklar" },
    { src: "/Images/partiSapkaliCocuklar.jpeg", alt: "Eğlenceli Çocuklar" },
    { src: "/Images/koliTasiyanEleman.jpeg", alt: "Yardım Kolisi" },
];

export default function MainCarousel({ state }) {
    const overlayClass = "absolute inset-0 bg-gradient-to-t from-[#062327] via-black/40 to-black/10 opacity-90";
    const heightClass = state !== 0 ? "h-[400px]" : "h-[700px]";

    const [slides, setSlides] = useState(DEFAULT_SLIDES);

    useEffect(() => {
        fetch("/api/images?keys=carousel_1,carousel_2,carousel_3,carousel_4")
            .then((r) => r.json())
            .then((data) => {
                if (data && typeof data === "object") {
                    setSlides([
                        { src: data.carousel_1 || DEFAULT_SLIDES[0].src, alt: "Carousel Slayt 1" },
                        { src: data.carousel_2 || DEFAULT_SLIDES[1].src, alt: "Carousel Slayt 2" },
                        { src: data.carousel_3 || DEFAULT_SLIDES[2].src, alt: "Carousel Slayt 3" },
                        { src: data.carousel_4 || DEFAULT_SLIDES[3].src, alt: "Carousel Slayt 4" },
                    ]);
                }
            })
            .catch(() => {});
    }, []);

    return (
        <div className="w-full">
            <Carousel arrows={true} infinite={true} draggable={true} autoplay autoplaySpeed={5000} effect="fade">
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className={`${heightClass} w-full object-cover`}
                        />
                        <div className={overlayClass} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
