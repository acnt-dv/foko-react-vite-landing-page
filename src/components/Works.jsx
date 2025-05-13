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

            <div className="flex w-full mx-0 mt-[200px] items-start justify-center md:justify-center text-black">
                <div className="flex-col w-4/5 space-y-16 items-center justify-end mr-[30px] md:mr-0 text-black mb-[150px]">
                    <span className='flex'>
                        <span className='flex w-3/12'>
                            <p className='font-rubik text-16 md:text-30 text-end break-words mt-[-10px]'>
                                BEL AIR <br /> RESIDENTIAL
                            </p>
                        </span>
                        <span className='flex w-9/12'>
                            <p className='text-justify w-full text-10 md:text-16'>
                                {textLines}
                            </p>
                        </span>
                    </span>

                    <span className='flex'>
                        <div className='flex w-3/12 justify-start'>
                            <div className="flex flex-row mx-2 mb-[-7px] justify-between items-end w-full">
                                <div className="text-left text-[12px] leading-[1.8]">
                                    <div className="grid grid-cols-[80px_auto] gap-x-4 gap-y-1 w-fit">
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
                        <span className='flex w-9/12'>
                            <MiniSlideShow />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Works;
