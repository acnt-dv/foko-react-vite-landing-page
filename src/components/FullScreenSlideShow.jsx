import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion"; // Optional for smooth transition
import leftArrow from "../statics/svg/left-arrow.svg";
import rightArrow from "../statics/svg/right-arrow.svg";
import getSlides from "../services/getSlides.jsx";
import toast, {Toaster} from "react-hot-toast";
import LoadingOverlay from "./LoadingOverlay.jsx";

const FullScreenSlideshow = () => {
    const [index, setIndex] = useState(0);
    const [hoverZone, setHoverZone] = useState(null);
    const [slides, setSlides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                const cached = localStorage.getItem("fullSlidesCache");
                if (cached) {
                    try {
                        const parsed = JSON.parse(cached);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            setSlides(parsed);
                            setIndex(0);
                            // setIsLoading(false);
                        }
                    } catch {}
                }
                const data = await getSlides();
                if (isMounted) {
                    setSlides(Array.isArray(data) ? data : []);
                    if (Array.isArray(data)) {
                        localStorage.setItem("fullSlidesCache", JSON.stringify(data));
                    }
                    setIndex(0);
                }
            } catch (e) {
                if (isMounted) setError(e);
                toast.error('Failed to load slides!');
            } finally {
                if (isMounted) setIsLoading(false);
            }
        })();
        return () => {
            isMounted = false;
        };
    }, []);

    // Auto-slide every 5 seconds (only when we have slides)
    useEffect(() => {
        if (!slides.length) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        if (!slides.length) return;
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        if (!slides.length) return;
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
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
        <>
            <Toaster/>
            <LoadingOverlay show={isLoading} />
            <div className="relative w-full h-[75vh] lg:h-screen overflow-hidden" onMouseMove={handleMouseMove}
                 onMouseLeave={() => setHoverZone(null)}>
                {/* Image Transition */}
                {slides && slides.length > 0 &&
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={slides[index]?.image}
                            alt={`Slideshow image ${slides.length ? index + 1 : 1}`}
                            className="absolute w-full h-full object-cover"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 1}}
                        />
                    </AnimatePresence>
                }

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
        </>
    );
};

export default FullScreenSlideshow;
