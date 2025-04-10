import React, { useState, useEffect } from "react";
import arrowTop from '../statics/svg/arrow-up.svg';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll smoothly to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="flex w-full justify-center">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-[42px] md:bottom-[50px] p-3 text-white text-2xl rounded-full  transition z-40 cursor-pointer"
                >
                    <img src={arrowTop} alt={'back to top'}/>
                </button>
            )}
        </div>
    );
};

export default BackToTop;
