import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Optional for smooth transition
import image from "../statics/png/main-title.png";
import leftArrow from "../statics/svg/left-arrow.svg";
import rightArrow from "../statics/svg/right-arrow.svg";

const images = [
    image,
    image,
    image,
];

const FullScreenSlideshow = () => {
    const [index, setIndex] = useState(0);

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

    return (
        <div className="relative w-full h-[75vh] lg:h-screen overflow-hidden">
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
                className="absolute left-0 top-1/2 w-1/4 h-screen transform -translate-y-1/2 bg-opacity-0 text-white hover:bg-opacity-0"
            >
                <img src={leftArrow} alt={'previous slide'} className="m-foko-sm lg:m-foko cursor-pointer"/>
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute flex justify-end items-center right-0 top-1/2 w-1/4 h-screen transform -translate-y-1/2 bg-opacity-0 text-white hover:bg-opacity-0"
            >
                <img src={rightArrow} alt={'next slide'} className="m-foko-sm lg:m-foko cursor-pointer"/>
            </button>

        </div>
    );
};

export default FullScreenSlideshow;
