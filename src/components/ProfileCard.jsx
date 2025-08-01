import React from "react";
import profileImage from "../statics/png/about-us.png"; // Replace with actual image path

const ProfileCard = ({ name }) => {
    return (
        // <div className="flex-col bg-foko min-h-full justify-start w-[calc(100%-60px)] lg:w-full px-[100px] mt-[125px]">
        <div className="flex bg-foko min-h-full lg:w-full mt-[5.92vh] lg:mt-[18.52vh] justify-end">
            <div className="flex flex-col lg:flex-row w-full">
                <span className="grid w-full lg:flex justify-end">
                    <div className="w-full h-auto lg:w-[27.08vw] lg:h-[63.89vh] flex flex-col items-center justify-end mx-0 lg:ml-[15.63vw] lg:mr-[2.60vw]">
                        {/* Profile Image */}
                        <img
                            src={profileImage}
                            alt="Jenny Fontenot"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-between mt-[5.92vh] lg:0">
                        <div>
                            {/* Name and Title */}
                            <h1 className="font-rubik text-[clamp(16px,1.8vw,30px)] text-left font-bold lg:w-[41.67vw] ml-[7.69vw] lg:ml-0">{name}</h1>
                            <h2 className="font-rubik text-[clamp(16px,1.4vw,30px)] text-left font-light uppercase lg:w-[41.67vw] ml-[7.69vw] lg:ml-0 mt-[1.85vh] mb-[4.63vh]">Co-Founder</h2>

                            {/* Description */}
                            <p className="text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em] lg:w-[41.67vw] ml-[7.69vw] mr-[7.69vw] lg:ml-0 lg:mr-[10.42vw]">
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

                            <p className="text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em] lg:w-[41.67vw] ml-[7.69vw] mr-[7.69vw] lg:ml-0 lg:mr-[10.42vw]">
                                As a licensed architect in both New York and California, Jenny brings a wealth of knowledge and
                                understanding
                                of different building regulations, allowing her to navigate complex projects while seeking
                                innovative design
                                solutions. Jenny sees the value in every detail and approaches each design challenge with an
                                enthusiastic
                                mindset, eager to unravel its puzzle-like nature.
                            </p>

                            <p className="text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em] lg:w-[41.67vw] ml-[7.69vw] mr-[7.69vw] lg:ml-0 lg:mr-[10.42vw]">
                                Extending beyond traditional architecture, Jenny’s interests include furniture and product
                                design. She
                                believes in creating holistic and captivating experiences for users through design and
                                collaboration at all
                                scales.
                            </p>
                        </div>
                        <div className="flex flex-row justify-start items-end ml-[7.69vw] lg:ml-0 mt-[5.92vh] lg:mt-0">
                            <div className="text-[clamp(10px,0.83vw,16px)] text-left leading-loose tracking-[0.005em]">
                                <div className="grid grid-cols-2 gap-x-16 gap-y-1">
                                    <span className="font-bold">Masters of Architecture ||</span>
                                    <span className="text-left">Yale University</span>
                                    <span className="font-bold">Bachelor of Architecture</span>
                                    <span className="text-left">Pratt Institute</span>
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
