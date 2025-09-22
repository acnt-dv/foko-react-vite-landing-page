import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import leftArrow from "../statics/svg/left-arrow.svg";
import rightArrow from "../statics/svg/right-arrow.svg";
import close from "../statics/svg/black-close.svg";
import plusIcon from "../statics/svg/plus-btn.svg";

const MiniScreenSlideshow = ({ images = [], galleries = [] }) => {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [hoverZone, setHoverZone] = useState(null);
    const [isTouch, setIsTouch] = useState(false);
    const [isDesktopPointer, setIsDesktopPointer] = useState(true);
    const containerRef = useRef(null);

    // Build a single list of image URLs from either `images` (array of strings)
    // or `galleries` (array of objects with an `image` URL field)
    const imageList = useMemo(() => {
      const fromImages = Array.isArray(images)
        ? images.filter(Boolean).map((v) => (typeof v === 'string' ? v : (v && v.image) || null)).filter(Boolean)
        : [];
      const fromGalleries = Array.isArray(galleries)
        ? galleries.filter(Boolean).map((g) => (g && typeof g.image === 'string' ? g.image : null)).filter(Boolean)
        : [];
      const merged = [...fromImages, ...fromGalleries];
      // de-duplicate while preserving order
      return Array.from(new Set(merged));
    }, [images, galleries]);

    useEffect(() => {
        if (!imageList.length) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [index, imageList.length]);

    useEffect(() => {
        const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouch(touchDevice);
    }, []);

    useEffect(() => {
        const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
        const update = () => setIsDesktopPointer(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    const nextSlide = () => {
        if (imageList.length === 0) return;
        setIndex((prev) => (prev + 1) % imageList.length);
    };

    const prevSlide = () => {
        if (imageList.length === 0) return;
        setIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    };

    const openModal = (image) => {
      if (!image) return;
      setSelectedImage(image);
      setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    const handleMouseMove = (e) => {
      // if (!containerRef.current || !isDesktopPointer) return; // desktop-only behavior
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const third = rect.width / 3;
      if (x < third) {
        setHoverZone('left');
      } else if (x > 2 * third) {
        setHoverZone('right');
      } else {
        setHoverZone(null);
      }
    };

    const handleMouseLeave = () => {
      if (isDesktopPointer) setHoverZone(null);
    };

    const handleClickToOpen = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const third = rect.width / 3;
      if (x >= third && x <= 2 * third) {
        openModal(imageList[index]);
      }
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-auto aspect-[2/1]"
        >
            {!imageList.length && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                No images to display
              </div>
            )}
            <AnimatePresence mode="wait">
                <motion.div key={index} className="absolute w-full h-full">
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0.5, backgroundColor: "#000" }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0.5, backgroundColor: "#000" }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img
                        src={imageList[index]}
                        alt="Slideshow"
                        className="absolute w-full h-full object-cover cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={handleClickToOpen}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className={`absolute left-0 top-1/2 w-1/4 transform -translate-y-1/2 bg-opacity-0 text-white hover:bg-opacity-0 transition-opacity duration-200 z-20 ${hoverZone === 'left' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <img src={leftArrow} alt="previous slide" className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] m-[10px] lg:m-foko cursor-pointer" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className={`absolute flex justify-end items-center right-0 top-1/2 w-1/4 transform -translate-y-1/2 bg-opacity-0 text-white hover:bg-opacity-0 transition-opacity duration-200 z-20 ${hoverZone === 'right' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <img src={rightArrow} alt="next slide" className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] m-[10px] lg:m-foko cursor-pointer" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {imageList.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-[10px] h-[10px] rounded-full cursor-pointer ${index === i ? "bg-black" : "border-[1px] border-black bg-transparent"}`}
                    ></span>
                ))}
            </div>

            {/* Fullscreen Modal */}
            {showModal && (
                <div className="w-screen h-screen fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-full h-full relative bg-foko flex justify-center items-center max-w-full max-h-full">
                        <button
                            onClick={closeModal}
                            className="absolute w-[30px] h-[30px] top-[30px] right-[30px] lg:w-[1.56vw] lg:h-[2.78vh] lg:top-[7.13vh] lg:right-[2.60vw] cursor-pointer"
                        >
                            <img src={close} alt="close" width='30px' height='30px' className="filter grayscale" />
                        </button>
                        <span className="grid w-full text-start">
                            <img
                                src={selectedImage}
                                alt="Fullscreen"
                                className="w-full h-auto lg:w-[79.17vw] lg:h-[62.96vh] mx-0 lg:mx-[10.42vw] mt-[18.52vh] mb-[2.78vh] object-contain"
                            />
                            <p className="text-10 lg:text-16 ml-[10.42vw] mb-[15.72vh]">
                                Some renderings by Polynates. Work completed while at BA Collective.
                            </p>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MiniScreenSlideshow;