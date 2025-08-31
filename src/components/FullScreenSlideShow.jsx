import React, { useState, useEffect } from "react";
import { motion , AnimatePresence } from "framer-motion"; // Optional for smooth transition
import { getSlideShowImages } from "../assets/mockData.js"; // adjust path if needed
import fallbackImage from "../statics/png/main-title.png";
import leftArrow from "../statics/svg/left-arrow.svg";
import rightArrow from "../statics/svg/right-arrow.svg";

const slideShowImages = getSlideShowImages();
const images = slideShowImages.length > 0
    ? slideShowImages
    : [fallbackImage, fallbackImage, fallbackImage];

const FullScreenSlideshow = () => {
    const [index, setIndex] = useState(0);
    const [hoverZone, setHoverZone] = useState(null);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const width = window.innerWidth;
        if (x < width / 3) {
            setHoverZone("left");
        } else if (x > (2 * width) / 3) {
            setHoverZone("right");
        } else {
            setHoverZone(null);
        }
    };

    return (
        <div className="relative w-full h-[75vh] lg:h-screen overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={() => setHoverZone(null)}>
            {/* Image Transition */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="Slideshow"
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className={`absolute left-0 top-1/2 w-1/4 h-screen transform -translate-y-1/2 bg-opacity-0 text-white hover:bg-opacity-0 ${hoverZone === "left" ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            >
                <img src={leftArrow} alt={'previous slide'} className="m-foko-sm lg:m-foko cursor-pointer"/>
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className={`absolute flex justify-end items-center right-0 top-1/2 w-1/4 h-screen transform -translate-y-1/2 bg-opacity-0 text-white hover:bg-opacity-0 ${hoverZone === "right" ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            >
                <img src={rightArrow} alt={'next slide'} className="m-foko-sm lg:m-foko cursor-pointer"/>
            </button>

        </div>
    );
};

export default FullScreenSlideshow;
