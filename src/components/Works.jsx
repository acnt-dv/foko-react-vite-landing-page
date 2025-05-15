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
        <div className="flex flex-col w-full justify-center items-center bg-foko">
            <div className="min-h-[75vh] w-full bg-cover bg-center bg-gray-400" style={{ backgroundImage: `url(${image})` }} />

            <div className="flex w-full mx-0 mt-[30px] lg:mt-[200px] items-start justify-center lg:justify-center text-black">
                <div className="flex-col w-4/5 space-y-16 items-center justify-end text-black mb-[150px]">
                    <span className='flex w-full'>
                        <span className='flex w-3/12 justify-end'>
                            <p className='font-rubik text-10 lg:text-30 font-black lg:font-normal text-end break-words pr-0 lg:pr-[50px] mt-0 lg:mt-[-10px]'>
                                BEL AIR <br /> RESIDENTIAL
                            </p>
                        </span>
                        <span className='flex w-full '>
                            <p className='text-justify w-full text-10 lg:text-16 pl-[30px] lg:pl-0'>
                                {textLines}
                            </p>
                        </span>
                    </span>

                    <span className='flex w-full flex-col-reverse lg:flex-row'>
                        <div className="flex w-full lg:w-3/12 mt-[75px] lg:mt-0">
                             <div className="flex flex-row mb-[-7px] pr-0 lg:pr-[50px] justify-end items-end w-full">
                                <div className="w-full grid grid-cols-[auto_1fr] gap-y-1 text-left text-10 lg:text-[12px] leading-[1.8]">
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

                        <span className='flex w-full w-9/12'>
                            <MiniSlideShow />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Works;
