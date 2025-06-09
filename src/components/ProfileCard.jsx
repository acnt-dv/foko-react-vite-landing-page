import React from "react";
import profileImage from "../statics/png/about-us.png"; // Replace with actual image path

const ProfileCard = ({ name }) => {
    return (
        // <div className="flex-col bg-foko min-h-full justify-start w-[calc(100%-60px)] lg:w-full px-[100px] mt-[125px]">
        <div className="flex bg-foko min-h-full lg:w-full mt-[100px] lg:mt-[200px] justify-center lg:justify-end">
            <div className="flex flex-col lg:flex-row w-full px-[30px] lg:px-0">
                <span className="flex w-[13%] hidden lg:block" />
                <span className="grid w-full lg:flex">
                    <div className="relative w-full h-full aspect-[1/1.5] lg:w-1/3 flex flex-col items-center lg:pl-[50px]">
                        {/* Profile Image */}
                        <img
                            src={profileImage}
                            alt="Jenny Fontenot"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>

                    <div className="relative w-full px-0 my-[30px] lg:my-0 lg:pl-[50px] flex flex-col justify-between">
                        <div>
                            {/* Name and Title */}
                            <h1 className="font-rubik text-16 lg:text-30 text-left font-bold">{name}</h1>
                            <h2 className="font-rubik text-16 lg:text-30 text-left font-light uppercase mt-2">Co-Founder</h2>

                            {/* Description */}
                            <p className="mt-4 text-justify text-10 lg:text-16">
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

                            <p className="mt-4 text-justify text-10 lg:text-16">
                                As a licensed architect in both New York and California, Jenny brings a wealth of knowledge and
                                understanding
                                of different building regulations, allowing her to navigate complex projects while seeking
                                innovative design
                                solutions. Jenny sees the value in every detail and approaches each design challenge with an
                                enthusiastic
                                mindset, eager to unravel its puzzle-like nature.
                            </p>

                            <p className="mt-4 text-justify text-gray-800 text-10 lg:text-16">
                                Extending beyond traditional architecture, Jenny’s interests include furniture and product
                                design. She
                                believes in creating holistic and captivating experiences for users through design and
                                collaboration at all
                                scales.
                            </p>
                        </div>
                        <div className="flex flex-row justify-start items-end w-full mt-10">
                            <div className="text-left mt-[30px] lg:mt-0 mb-[10px] mr-[40px] text-[10px] lg:text-[16px] leading-[1.8]">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 w-full">
                                    <span className="font-bold">Masters of Architecture ||</span>
                                    <span className="text-right">Yale University</span>
                                    <span className="font-bold">Bachelor of Architecture</span>
                                    <span className="text-right">Pratt Institute</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            {/* <div className="mt-0 lg:mt-[50px] relative">

                <h3 className="text-start font-rubik text-16 lg:text-30 font-semibold uppercase mb-[30px] lg:my-[50px]">Education:</h3>
                <p className="text-start font-rubik text-gray-800 text-10 lg:text-16 mt-1">Masters of Architecture</p>
                <p className="text-start font-rubik text-gray-800 text-10 lg:text-16">Yale University</p>
                <p className="text-start font-rubik text-gray-800 text-10 lg:text-16 mt-2">Masters of Architecture</p>
                <p className="text-start font-rubik text-gray-800 text-10 lg:text-16 mb-[30px]">Yale University</p>
            </div> */}
        </div>
    );
};

export default ProfileCard;
