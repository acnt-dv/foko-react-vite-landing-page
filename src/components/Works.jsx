import image from '../statics/png/main-title.png';
import React, {useEffect, useRef, useState} from "react";
import MiniSlideShow from "./MiniSlideShow";
import FadingTextBoxWithMask from "./FadingTextBoxWithMask";
import {useLocation} from "react-router-dom";

export const Works = () => {
    // const [maxTranslate, setMaxTranslate] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const miniSlideRef = useRef(null);

//     const textLines =
//         `This 11 bedroom private home sits on a Hillside site in Bel Air with expansive views of Los Angeles. The contemporary style of the home incorporates subtle nods to the client’s Japanese roots through the use of natural materials that blurred the line between landscape and architecture. This projectwas unbuilt due to economic strains from the pandemic.
// `

    const location = useLocation();
    const {project} = location.state || {};

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
            <div className="w-full h-[61vh] bg-cover bg-center bg-gray-400" style={{backgroundImage: `url(${project?.images?.[0] ?? image})`}}/>

            <div className="flex w-full mt-[16.23vh] lg:mt-[18.52vh] items-start justify-center text-black">
                <div className="flex-col w-full space-y-16 items-center justify-end text-black">
                    <div className='flex w-full justify-between items-baseline mb-[18.52vh]'>
                        <div className='flex w-fit justify-end mx-[7.69vw] lg:mr-[2.60vw]'>
                            <p className='font-rubik font-black lg:font-normal text-[clamp(10px,1.6vw,30px)] text-end align-text-top break-words'>
                                {/*BEL AIR <br /> RESIDENTIAL*/}
                                {project?.title}
                            </p>
                        </div>
                        <div className='flex mr-[7.69vw] lg:mr-[20.83vw]'>
                            <p className=' w-[52.23vw] lg:w-[58.33vw] lg:-top-[4px] xl:-top-[8px] text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em]'>
                                {project?.description}
                            </p>
                        </div>
                    </div>

                    <div className='flex w-full flex-col-reverse lg:flex-row justify-end mb-[27.78vh]'>
                        <div className="flex mt-[75px] mx-[7.69vw] lg:mr-[2.6vw] lg:ml-auto">
                             <div className="flex flex-row justify-end items-end w-full">
                                <div
                                    className="w-full grid grid-cols-[auto_1fr] gap-y-1 text-left text-10 lg:text-[12px] leading-[1.8]">

                                    {project?.program &&
                                        <>
                                            <span className="font-bold">PROGRAM</span>
                                            <span className="text-right">{project?.program}</span>
                                        </>
                                    }

                                    {project?.location &&
                                        <>
                                            <span className="font-bold">LOCATION</span>
                                            <span className="text-right">{project?.location}</span>
                                        </>
                                    }

                                    {project?.size &&
                                        <>
                                            <span className="font-bold">SIZE</span>
                                            <span className="text-right">{project?.size}</span>
                                        </>
                                    }

                                    {project?.type &&
                                        <>
                                            <span className="font-bold">TYPE</span>
                                            <span className="text-right">{project?.type}</span>
                                        </>
                                    }

                                    {project?.status &&
                                        <>
                                            <span className="font-bold">STATUS</span>
                                            <span className="text-right">{project?.status}</span>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>

                        <div className='flex lg:w-[58.33vw] ml-[7.69vw] mr-[7.69vw] lg:ml-0 lg:mr-[20.83vw]'>
                            <MiniSlideShow images={project?.images}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;
