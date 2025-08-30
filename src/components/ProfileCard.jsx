import React from "react";
import profileImage from "../statics/png/about-us.png"; // Replace with actual image path

const ProfileCard = ({ name, title, education, description, profileImg }) => {
    return (
        <div className="flex bg-foko min-h-full lg:w-full mt-[5.92vh] lg:mt-[18.52vh] justify-end">
            <div className="flex flex-col lg:flex-row w-full">
                <span className="grid w-full lg:flex justify-end">
                    <div className="ml-[7.69vw] mr-[7.69vw] h-auto lg:w-[27.08vw] lg:min-h-[63.89vh] flex flex-col items-center justify-end mx-0 lg:ml-[15.63vw] lg:mr-[2.60vw]">
                        {/* Profile Image */}
                        <img
                            src={profileImg || profileImage}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-between mt-[5.92vh] lg:mt-0">
                        <div>
                            {/* Name and Title */}
                            <h1 className="font-rubik text-[clamp(16px,1.8vw,30px)] text-left font-bold lg:w-[41.67vw] ml-[7.69vw] lg:ml-0">
                                {name}
                            </h1>
                            <h2 className="font-rubik text-[clamp(16px,1.4vw,30px)] text-left font-light uppercase lg:w-[41.67vw] ml-[7.69vw] lg:ml-0 mt-[1.85vh] mb-[4.63vh]">
                                {title}
                            </h2>

                            {/* Dynamic Description */}
                            {description &&
                                description.map((para, index) => (
                                    <p
                                        key={index}
                                        className="text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em] lg:w-[41.67vw] ml-[7.69vw] mr-[7.69vw] lg:ml-0 lg:mr-[10.42vw]"
                                    >
                                        {para}
                                    </p>
                                ))}
                        </div>

                        {/* Education Section */}
                        {education && (
                            <div className="flex flex-row justify-start items-end ml-[7.69vw] lg:ml-0 mt-[5.92vh] lg:mt-0">
                                <div className="text-[clamp(10px,0.83vw,16px)] text-left leading-loose tracking-[0.005em]">
                                    <div className="grid grid-cols-2 gap-x-16 gap-y-1">
                                        {education.map((edu, index) => (
                                            <React.Fragment key={index}>
                                                <span className="font-bold">{edu.degree}</span>
                                                <span className="text-left">{edu.institution}</span>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </span>
            </div>
        </div>
    );
};

export default ProfileCard;