import image from '../statics/png/main-title.png';
import React, {useEffect, useRef, useState} from "react";
import MiniSlideShow from "./MiniSlideShow";
import FadingTextBoxWithMask from "./FadingTextBoxWithMask";

export const Works = () => {
    // const [maxTranslate, setMaxTranslate] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const miniSlideRef = useRef(null);

    const textLines =
        `Welcome to FOKO STUDIO , where innovation meets tradition in the world of architecture. Our team of passionate architects and designers is 
dedicated to transforming spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create 
environments that inspire and endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our projects... Welcome to 
FOKO STUDIO , where innovation meets tradition in the world of architecture. Our team of passionate architects and designers is dedicated to 
transforming spaces into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create environments that 
inspire and endure. At [Your Firm’s Name], we believe in the power of collaboration and creativity. Our projects...dedicated to transforming spaces
into timeless masterpieces. With a blend of cutting-edge technology and sustainable practices, we create environments that inspire and endure. At 
[Your Firm’s Name], we believe in the power of collaboration and creativity. Our project`

    useEffect(() => {
        let maxTranslate = 0;
            if (window.innerWidth <= 768) {
                // 'md' breakpoint in Tailwind (768px)
                maxTranslate=(window.innerHeight * 0.47);
            } else {
                maxTranslate=(window.innerHeight * 0.75);
            }

            const handleScroll = () => {
                // Get the current scroll position
                const position = window.scrollY;
                let maxLimit = maxTranslate;

                if (miniSlideRef.current) {
                    const slideShowRect = miniSlideRef.current.getBoundingClientRect();
                    const bottomLimit = slideShowRect.top + slideShowRect.height - 150; // Adjust offset as needed

                    if (position >= bottomLimit) {
                        maxLimit = bottomLimit;
                    }
                }

                setTranslateY(Math.min(position, maxLimit));
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []
    );

    return (
        <div className="flex flex-col w-full bg-foko">
            <div
                className="min-h-[75vh] w-full bg-cover bg-center bg-gray-400"
                style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className="flex w-full items-start justify-start sm:justify-center text-black">
                <div className="flex justify- items-center mt-[30px] md:mt-[50px]">
                    <p className="mt-[30px] md:mt-[160px] mx-[30px] md:mx-0 md:absolute md:left-[50px] font-rubik text-10 md:text-30 text-end break-words -translate-y-1/2 text-gray-900 transition-transform duration-300"
                    //    style={{transform: `translateY(${translateY}px)`,}}
                       >BEL AIR <br/> RESIDENTIAL
                    </p>
                </div>
                <div className="flex-col w-3/5 space-y-16 items-center justify-end mr-[30px] md:mr-0 text-black mb-[150px]">
                    {/* <FadingTextBoxWithMask text={textLines}/> */}
                    <p className='text-justify mt-[30px] md:mt-[50px]'>
                        {textLines}
                    </p>
                    <MiniSlideShow/>
                </div>
            </div>
        </div>
    )
}

export default Works;

