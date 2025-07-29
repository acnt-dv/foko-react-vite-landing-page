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

            <div className="flex w-full mt-[16.23vh] lg:mt-[18.52vh] items-start justify-center text-black">
                <div className="flex-col w-full space-y-16 items-center justify-end text-black">
                    <span className='flex w-full justify-end items-baseline'>
                        <span className='flex w-fit justify-end mr-[7.69vw] lg:mr-[2.60vw]'>
                            <p className='font-rubik text-[clamp(10px,1.6vw,30px)] text-end align-text-top -mt-2 break-words'>
                                BEL AIR <br /> RESIDENTIAL
                            </p>
                        </span>
                        <span className='flex w-[59.23vw] lg:w-[58.33vw] mr-[7.69vw] lg:mr-[20.83vw]'>
                            <p className='text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em]'>
                                {textLines}
                            </p>
                        </span>
                    </span>

                    <span className='flex w-full flex-col-reverse lg:flex-row justify-end mb-[27.78vh]'>
                        <div className="flex lg:w-fit mt-[75px] mx-[7.69vw] lg:mx-[2.6vw]">
                             <div className="flex flex-row justify-end items-end w-full">
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

                        <span className='flex lg:w-[58.33vw] ml-[7.69vw] mr-[7.69] lg:ml-0 lg:mr-[20.83vw]'>
                            <MiniSlideShow />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Works;
