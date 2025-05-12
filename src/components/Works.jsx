import image from '../statics/png/main-title.png';
import React, { useEffect, useRef, useState } from "react";
import MiniSlideShow from "./MiniSlideShow";
import FadingTextBoxWithMask from "./FadingTextBoxWithMask";

export const Works = () => {
    // const [maxTranslate, setMaxTranslate] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const miniSlideRef = useRef(null);

    const textLines =
        `This 11 bedroom private home sits on a Hillside site in Bel Air with expansive views of Los Angeles. The contemporary style of the home incorporates subtle nods to the client’s Japanese roots through the use of natural materials that blurred the line between landscape and architecture. This projectwas unbuilt due to economic strains from the pandemic.
`

    useEffect(() => {
        let maxTranslate = 0;
        if (window.innerWidth <= 768) {
            // 'md' breakpoint in Tailwind (768px)
            maxTranslate = (window.innerHeight * 0.47);
        } else {
            maxTranslate = (window.innerHeight * 0.75);
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
                style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="flex w-full mx-0 mt-[200px] items-start justify-center md:justify-center text-black">
                {/* <div className="flex items-center mt-[30px] md:mt-[50px] md:w-1/5">
                    <p className="mt-[30px] md:mt-[160px] mx-[30px] md:mx-0 md:absolute md:left-[50px] font-rubik text-10 md:text-30 text-end break-words -translate-y-1/2 text-gray-900 transition-transform duration-300" style={{transform: `translateY(${translateY}px)`,}}></p>
                    
                </div> */}
                <div className="relative flex-col w-3/5 space-y-16 items-center justify-end mr-[30px] md:mr-0 text-black mb-[150px]">
                    <p className='absolute left-[-275px] top-[50px] font-rubik text-16 md:text-30 text-end break-words md:mt-[10px]'>
                        BEL AIR <br /> RESIDENTIAL
                    </p>
                    <p className='text-justify mt-[60px] w-full text-10 md:text-16'>
                        {textLines}
                    </p>
                    <div className='absolute left-[-350px] bottom-[-90px]'>
                        <div className="flex flex-row justify-between items-end w-full px-6">
                            {/* جدول مشخصات پروژه */}
                            <div className="text-left mb-[10px] mr-[40px] text-[12px] leading-[1.8]">
                                <div className="grid grid-cols-[80px_auto] gap-x-4 gap-y-1 p-2 w-fit">
                                    <span className="font-bold">PROGRAM</span>
                                    <span className="text-right">Single Family Residential</span>
                                    <span className="font-bold">LOCATION</span>
                                    <span className="text-right">Bel Air</span>
                                    <span className="font-bold">SIZE</span>
                                    <span className="text-right">24,000 Sf</span>
                                    <span className="font-bold">TYPE</span>
                                    <span className="text-right">New Construction</span>
                                    <span className="font-bold">STATUS</span>
                                    <span className="text-right">Unbuilt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MiniSlideShow />
                </div>
            </div>
        </div>
    )
}

export default Works;

