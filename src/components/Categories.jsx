import React, { useState } from "react";
import image01 from "../statics/png/projects/pr01.png";
import image02 from "../statics/png/projects/pr02.png";
import image03 from "../statics/png/projects/pr03.png";
import image04 from "../statics/png/projects/pr04.png";
import image05 from "../statics/png/projects/pr05.png";
import image06 from "../statics/png/projects/pr06.png";
import image07 from "../statics/png/projects/pr07.png";
import { useNavigate } from "react-router-dom";

const images = [
    { src: image01, category: "RESIDENTIAL" },
    { src: image02, category: "RESIDENTIAL" },
    { src: image03, category: "RESIDENTIAL" },
    { src: image04, category: "COMMERCIAL" },
    { src: image05, category: "COMMERCIAL" },
    { src: image06, category: "COMMERCIAL" },
    { src: image07, category: "COMMERCIAL" },
];

const Categories = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState("ALL");

    return (
        <div className="flex w-full h-screen items-center justify-end gap-0  text-black">
            {/* Sidebar Buttons */}
            {/* removed from this div style: lg:border-r lg:border-gray-500 */}
            <div
                className="flex flex-col h-[48.82vh] lg:h-[62.96vh] justify-end lg:justify-center
                lg:ml-foko bg-gradient-to-b from-black via-gray-900 to-gray-100 bg-clip-text text-transparent
                font-rubik text-10 lg:text-16 mr-[7.69vw] lg:mr-[5.21vw]">

                {/* RESIDENTIAL Button */}
                <button
                    className={`py-2 self-end rounded-md transition-all leading-loose tracking-widest cursor-pointer ${active === "RESIDENTIAL" ? "text-black font-bold" : "text-gray-400"
                        }`}
                    onClick={() => setActive("RESIDENTIAL")}
                >
                    RESIDENTIAL
                </button>

                {/* COMMERCIAL Button */}
                <button
                    className={`py-2 self-end rounded-md transition-all leading-loose tracking-widest cursor-pointer ${active === "COMMERCIAL" ? "text-black font-bold" : "text-gray-400"
                        }`}
                    onClick={() => setActive("COMMERCIAL")}
                >
                    COMMERCIAL
                </button>

                {/* ALL Button */}
                <button
                    className={`py-2 self-end rounded-md transition-all leading-loose tracking-widest cursor-pointer ${active === "ALL" ? "text-black font-bold" : "text-gray-400"
                        }`}
                    onClick={() => setActive("ALL")}
                >
                    ALL
                </button>
            </div>

            {/* Image Grid */}
            <div className="flex flex-col w-fit h-[48.82vh] lg:h-[62.96vh] justify-center items-end mr-[7.69vw] lg:mr-[15.63vw]">
                <div className="grid auto-cols-auto grid-cols-[repeat(auto-fit,minmax(49.49vw,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(22.92vw,1fr))]  gap-0 w-full md:max-w-[40rem] xl:max-w-[95rem] overflow-auto scrollbar-hide">
                    {images.map((image, index) => {
                        // Apply grayscale based on active filter
                        const isActive = active === "ALL" || active === image.category;
                        return (
                            <div
                                onClick={() => { navigate('/works') }}
                                key={index}
                                className={`h-[16.23vh] lg:h-[21.02vh] bg-gray-900 flex items-end justify-center text-white 
                                    bg-cover bg-center transition-all duration-500 cursor-pointer ${isActive ? "grayscale-0" : "grayscale"
                                    }`}
                                style={{ backgroundImage: `url(${image.src})` }}

                            >
                                {isActive &&
                                    <div className="flex w-full h-[25px] justify-end items-center bg-foko text-10 lg:text-16 text-black opacity-75">
                                        <p className="text-right mt-1 mr-2">
                                            BA COLLECTIVE STUDIO
                                        </p>
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Empty Right Column */}
            {/*<div className="flex flex-col w-[15%] h-3/4"></div>*/}
        </div>
    );
};

export default Categories;
