import React from "react";
import profileImage from "../statics/png/about-us.png"; // Replace with actual image path

const ProfileCard = ({ name }) => {
    return (
        // <div className="flex-col bg-foko min-h-full justify-start w-[calc(100%-60px)] md:w-full px-[100px] mt-[125px]">
        <div className="flex bg-foko min-h-full md:w-full mt-[100px] md:mt-[200px] justify-center md:justify-end">
            <div className="flex flex-col md:flex-row w-10/12">
                <div className="relative w-full h-full aspect-[1/1.5] md:w-1/3 md:max-w-[528px] md:max-h-[698px] flex flex-col items-center">
                    {/* Profile Image */}
                    <img
                        src={profileImage}
                        alt="Jenny Fontenot"
                        className="absolute m-0 md:ml-[-25px] top-0 left-0 w-full h-full object-cover shadow-lg"
                    />
                </div>

                <div className="relative w-full md:w-2/3 px-0 my-[30px] md:my-0 md:pl-[50px] flex flex-col justify-between">
                    <div>
                        {/* Name and Title */}
                        <h1 className="font-rubik text-16 md:text-30 text-left font-bold">{name}</h1>
                        <h2 className="font-rubik text-16 md:text-30 text-left font-light uppercase mt-2">Co-Founder</h2>

                        {/* Description */}
                        <p className="mt-4 text-justify text-10 md:text-16">
                            Jenny is the co-founder and Architectural Director of FOKO Studio. She is a licensed architect
                            with a passion
                            for creating positive impact for individuals and communities through shaping the built
                            environment. With over
                            10 years of experience in various typologies and scales, including retail, institutional,
                            residential,
                            workplace, and adaptive-reuse projects, Jenny has developed a diverse portfolio that showcases
                            her versatility
                            and expertise.
                        </p>

                        <p className="mt-4 text-justify text-10 md:text-16">
                            As a licensed architect in both New York and California, Jenny brings a wealth of knowledge and
                            understanding
                            of different building regulations, allowing her to navigate complex projects while seeking
                            innovative design
                            solutions. Jenny sees the value in every detail and approaches each design challenge with an
                            enthusiastic
                            mindset, eager to unravel its puzzle-like nature.
                        </p>

                        <p className="mt-4 text-justify text-gray-800 text-10 md:text-16">
                            Extending beyond traditional architecture, Jenny’s interests include furniture and product
                            design. She
                            believes in creating holistic and captivating experiences for users through design and
                            collaboration at all
                            scales.
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-end w-full">
                        {/* جدول مشخصات پروژه */}
                        <div className="text-left mt-[30px] md:mt-0 mb-[10px] mr-[40px] text-[10px] md:text-[16px] leading-[1.8]">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 w-full">
                                <span className="font-bold">Masters of Architecture ||</span>
                                <span className="text-right">Yale University</span>
                                <span className="font-bold">Bachelor of Architecture</span>
                                <span className="text-right">Pratt Institute</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-0 md:mt-[50px] relative">

                <h3 className="text-start font-rubik text-16 md:text-30 font-semibold uppercase mb-[30px] md:my-[50px]">Education:</h3>
                <p className="text-start font-rubik text-gray-800 text-10 md:text-16 mt-1">Masters of Architecture</p>
                <p className="text-start font-rubik text-gray-800 text-10 md:text-16">Yale University</p>
                <p className="text-start font-rubik text-gray-800 text-10 md:text-16 mt-2">Masters of Architecture</p>
                <p className="text-start font-rubik text-gray-800 text-10 md:text-16 mb-[30px]">Yale University</p>
            </div> */}
        </div>
    );
};

export default ProfileCard;
