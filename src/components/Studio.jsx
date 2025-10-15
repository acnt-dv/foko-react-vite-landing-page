import aboutUsImage from '../statics/png/about-us.png';
import profileImage from '../statics/png/about-us.png'; //
import ProfileCard from "./ProfileCard";

const AboutUs = () => {
    return (<div className="flex flex-col h-full items-end mt-0 lg:mt-[18.52vh]">
            <div className="flex flex-col box-border px-0">
                <div className="flex flex-col-reverse lg:flex-row justify-end">

                    {/* ABOUT US */}
                    <div className="flex flex-col mt-[5.92vh] lg:mt-0 lg:w-[49.48vw] lg:h-[60.19vh] lg:justify-between">
                        <div className='flex w-full justify-end'>
                            <div className='w-fit ml-[7.69vw] mr-[7.69vw] lg:ml-0 lg:mr-[2.6vw]'>
                                <h1 className="font-rubik text-right text-[clamp(10px,1.4vw,30px)]">
                                    ABOUT <br/> US
                                </h1>
                            </div>
                            <div className='w-[61.54vw] lg:w-[27.08vw] mr-[7.69vw] lg:mr-[10.42vw]'>
                                <p className="text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-wide">
                                    FOKO Studio is a Los Angeles-based architecture and interior design firm. Our studio
                                    specializes in crafting bespoke, high-end residential and commercial spaces that are
                                    as thoughtful as they are visually compelling.
                                </p>
                                <br/>
                                <p className="text-[clamp(10px,0.83vw,16px)] text-justify  leading-loose tracking-[0.005em]">
                                    At FOKO Studio, we are deeply committed to our clients' specific needs. From
                                    intimate interiors to large scale architectural projects, we combine creative
                                    problem-solving with a holistic design approach, navigating the layered complexities
                                    of each project. By considering every detail, we design environments that are
                                    perfectly tailored to the unique lifestyle and aspirations of our clients.
                                </p>
                            </div>
                        </div>

                        {/* OUR PHILOSOPHY */}

                        <div className='flex w-full justify-end mt-[5.92vh] lg:mt-0'>
                            <div
                                className='grid w-fit ml-[7.69vw] mr-[7.69vw] lg:ml-0 lg:mr-[2.6vw] justify-end items-start max-h-[50px]'>
                                <p className="font-rubik text-right text-[clamp(10px,1.4vw,30px)]">
                                    OUR
                                </p>
                                <p className="font-rubik text-right text-[clamp(10px,1.4vw,30px)]">
                                    PHILOSOPHY
                                </p>
                            </div>
                            <div className='w-[61.54vw] lg:w-[27.08vw] mr-[7.69vw] lg:mr-[10.42vw]'>
                                <p className="text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em]">
                                    At the heart of our practice is the belief that design should create meaningful
                                    spaces that enrich the lives of those who inhabit them. We combine critical
                                    thinking, technical skill, and a deep respect for context to transform challenges
                                    into opportunities and ideas into reality. Whether addressing spatial constraints,
                                    aesthetic aspirations, or functional needs, our creative solutions aim to enhance
                                    both the experience and impact of each space.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* COVER IMAGE */}
                    <div className="flex w-full lg:w-[33.85vw] mr-0 lg:mr-[10.42vw]">
                        <img
                            src={aboutUsImage}
                            alt="aboutUsImage"
                            className="w-full lg:w-[33.85vw] h-auto max-h-[60.19vh] object-cover"
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-[5.92vh] lg:mt-[20.52vh]">
                    <div className='grid w-fit mx-[7.69vw] lg:mr-[2.6vw] justify-end items-start max-h-[50px]'>
                        <p className="font-rubik text-right text-[clamp(10px,1.4vw,30px)]">
                            THE
                        </p>
                        <p className="font-rubik text-right text-[clamp(10px,1.4vw,30px)]">
                            FOUNDERS
                        </p>
                    </div>
                    <div className='w-[61.54vw] lg:w-[27.08vw] mr-[7.69vw] lg:mr-[54.6vw]'>
                        <p className="text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.005em]">
                            FOKO Studio was founded by Jenny Fontenot and Pegah Koulaeien, two seasoned design
                            professionals with a shared passion for creating inspiring spaces. With diverse backgrounds
                            in architecture and interior design, Jenny and Pegah bring a unique blend of technical
                            expertise and creative intuition to every project. Their collaboration fosters a dynamic,
                            multidisciplinary approach that excels across projects of all scales.
                        </p>
                    </div>
                </div>

                <ProfileCard
                    name="Jenny Fontenot"
                    title="Co-Founder"
                    profileImg={profileImage}
                    description={[`Jenny is the co-founder and Architectural Director of FOKO Studio. She is a licensed architect with a passion for creating positive impact for individuals and communities through shaping the built environment. With over 10 years of experience in various typologies and scales, including retail, institutional, residential, workplace, and adaptive-reuse projects, Jenny has developed a diverse portfolio that showcases her versatility and expertise.`, `As a licensed architect in both New York and California, Jenny brings a wealth of knowledge and understanding of different building regulations, allowing her to navigate complex projects while seeking innovative design solutions. Jenny sees the value in every detail and approaches each design challenge with an enthusiastic mindset, eager to unravel its puzzle-like nature.`, `Extending beyond traditional architecture, Jenny’s interests include furniture and product design. She believes in creating holistic and captivating experiences for users through design and collaboration at all scales.`]}
                    education={[{
                        degree: "Masters of Architecture",
                        institution: "Yale University"
                    }, {degree: "Bachelor of Architecture", institution: "Pratt Institute"}]}
                />

                <ProfileCard
                    name="PEGAH KOULAEIAN"
                    title="Co-Founder"
                    profileImg={profileImage}
                    description={[`Pegah, the co-founder and Interior Architecture Director of FOKO Studio, brings over a decade
                        of experience in architecture and interior design to her role. Her expertise spans diverse
                        projects in hospitality, workplace, and residential environments around the world. Committed
                        to crafting immersive design experiences that authentically capture the essence of a location,
                        Pegah strives to create standout projects aligned with the unique brand, market, and business
                        aspirations of each property.`, `Pegah effortlessly moves between different aspects of architecture, from big-picture planning
                        to detailed furniture design. Her keen design sense and problem-solving skills make it easy for
                        her to understand what clients want and involve them in the creative process.`, `Driven by a passion for learning about diverse cultures and technologies, Pegah actively
                        incorporates these elements into her designs. Her innate design intuition and adept problem-
                        solving skills enable her to grasp a client’s aspirations and engage them in a collaborative
                        creative journey.`]}
                    education={[{
                        degree: "Masters of Architecture II",
                        institution: "University of California"
                    }, {
                        degree: "Masters of Architecture",
                        institution: "University of Tehran"
                    }, {degree: "Bachelor of Architecture", institution: "University of Mazandaran"}]}
                />

                <span className="mb-[18.52vh]"/>
            </div>
        </div>)
}

export default AboutUs;