import React, { useState } from "react";
import image01 from "../statics/png/projects/pr01.png";
import image02 from "../statics/png/projects/pr02.png";
import image03 from "../statics/png/projects/pr03.png";
import image04 from "../statics/png/projects/pr04.png";
import image05 from "../statics/png/projects/pr05.png";
import image06 from "../statics/png/projects/pr06.png";
import image07 from "../statics/png/projects/pr07.png";
import {useNavigate} from "react-router-dom";

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
        <div className="flex w-full h-screen items-center justify-center gap-8 text-black">
            {/* Sidebar Buttons */}
            {/* removed from this div style: md:border-r md:border-gray-500 */}
            <div
                className="flex flex-col w-[10%] h-3/4 justify-end md:justify-center
                md:ml-foko bg-gradient-to-b from-black via-gray-900 to-gray-100 bg-clip-text text-transparent
                font-rubik text-16 ml-[30px]">

                {/* RESIDENTIAL Button */}
                <button
                    className={`py-2 self-start rounded-md transition-all cursor-pointer ${
                        active === "RESIDENTIAL" ? "text-black font-bold" : "text-gray-400"
                    }`}
                    onClick={() => setActive("RESIDENTIAL")}
                >
                    RESIDENTIAL
                </button>

                {/* COMMERCIAL Button */}
                <button
                    className={`py-2 self-start rounded-md transition-all cursor-pointer ${
                        active === "COMMERCIAL" ? "text-black font-bold" : "text-gray-400"
                    }`}
                    onClick={() => setActive("COMMERCIAL")}
                >
                    COMMERCIAL
                </button>

                {/* ALL Button */}
                <button
                    className={`py-2 self-start rounded-md transition-all cursor-pointer ${
                        active === "ALL" ? "text-black font-bold" : "text-gray-400"
                    }`}
                    onClick={() => setActive("ALL")}
                >
                    ALL
                </button>
            </div>

            {/* Image Grid */}
            <div className="flex flex-col w-[75%] h-3/4">
                <div className="grid auto-cols-auto grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-1 px-12 w-full max-w-8xl overflow-auto scrollbar-hide">
                    {images.map((image, index) => {
                        // Apply grayscale based on active filter
                        const isActive = active === "ALL" || active === image.category;
                        return (
                            <div
                                onClick={()=> {navigate('/works')}}
                                key={index}
                                className={`h-[208px] bg-gray-900 flex items-center justify-center text-white 
                                    bg-cover bg-center transition-all duration-500 cursor-pointer ${
                                    isActive ? "grayscale-0" : "grayscale"
                                }`}
                                style={{ backgroundImage: `url(${image.src})` }}
                            ></div>
                        );
                    })}
                </div>
            </div>

            {/* Empty Right Column */}
            <div className="flex flex-col w-[15%] h-3/4"></div>
        </div>
    );
};

export default Categories;
