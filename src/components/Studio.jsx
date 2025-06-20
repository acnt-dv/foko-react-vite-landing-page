import aboutUsImage from '../statics/png/about-us.png';
import ProfileCard from "./ProfileCard";

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center mt-0 lg:mt-[200px]">
            <div className="flex flex-col w-full h-full items-center justify-center mt-0 lg:mt-[200px] box-border px-0 lg:px-[100px]">
                <div className="flex flex-col-reverse lg:flex-row w-full">

                    {/* ABOUT US */}
                    <div className="flex flex-col w-full lg:w-3/5 justify-between">
                        <div className='flex w-full mt-[50px] lg:mt-0'>
                            <div className='w-1/5'>
                                <h1 className="text-right text-10 lg:text-30">
                                    ABOUT <br /> US
                                </h1>
                            </div>
                            <div className='w-4/5 px-[30px] lg:pl-[50px] lg:pr-[30px] lg:pr-[50px] lg:pr-[100px] 2lg:pr-[150px]'>
                                <p className="text-10 lg:text-16 text-justify">
                                    FOKO Studio is a Los Angeles-based architecture and interior design firm. Our studio specializes in crafting bespoke, high-end residential and commercial spaces that are as thoughtful as they are visually compelling.
                                    At FOKO Studio, we are deeply committed to our clients' specific needs. From intimate interiors to large scale architectural projects, we combine creative problem-solving with a holistic design approach, navigating the layered complexities of each project. By considering every detail, we design environments that are perfectly tailored to the unique lifestyle and aspirations of our clients.
                                </p>
                            </div>
                        </div>

                        {/* OUR PHILOSOPHY */}

                        <div className='flex w-full mt-[50px] lg:mt-20'>
                            <div className='w-1/5 grid justify-end items-start max-h-[50px]'>
                                <p className="text-right text-10 lg:text-30">
                                    OUR
                                </p>
                                <p className="text-right text-10 lg:text-30">
                                    PHILOSOPHY
                                </p>
                            </div>
                            <div className='w-4/5 px-[30px] lg:pl-[50px] lg:pr-[30px] lg:pr-[50px] lg:pr-[100px] 2lg:pr-[150px]'>
                                <p className="text-10 lg:text-16 text-justify">
                                    At the heart of our practice is the belief that design should create meaningful spaces that enrich the lives of those who inhabit them. We combine critical thinking, technical skill, and a deep respect for context to transform challenges into opportunities and ideas into reality. Whether addressing spatial constraints, aesthetic aspirations, or functional needs, our creative solutions aim to enhance both the experience and impact of each space.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* COVER IMAGE */}
                    <div className="flex w-full lg:w-2/5">
                        <img
                            src={aboutUsImage}
                            alt="aboutUsImage"
                            className="w-full h-auto max-h-[575px] object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row w-full pt-[50px] lg:pt-[200px]">
                    <div className='flex w-full '>
                        <div className="flex w-full lg:w-3/5">

                            <div className='w-1/5 grid justify-end items-start max-h-[50px]'>
                                <p className="text-right text-10 lg:text-30">
                                    THE
                                </p>
                                <p className="text-right text-10 lg:text-30">
                                    FOUNDERS
                                </p>
                            </div>
                            <div className='w-4/5 px-[30px] lg:pl-[50px] lg:pr-[30px] lg:pr-[50px] lg:pr-[100px] 2lg:pr-[150px]'>
                                <p className="text-10 lg:text-16 text-justify">
                                    FOKO Studio was founded by Jenny Fontenot and Pegah Koulaeien, two seasoned design professionals with a shared passion for creating inspiring spaces. With diverse backgrounds in architecture and interior design, Jenny and Pegah bring a unique blend of technical expertise and creative intuition to every project. Their collaboration fosters a dynamic, multidisciplinary approach that excels across projects of all scales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <ProfileCard name='JENNY FONTENOT, RA' />
                <ProfileCard name='PEGAH KOULAEIAN, LEED AP' />
                <span className="mb-[200px]" />
            </div>

        </div>
    )
}

export default AboutUs;