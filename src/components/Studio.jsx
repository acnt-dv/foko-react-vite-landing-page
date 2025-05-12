import aboutUsImage from '../statics/png/about-us.png';
import ProfileCard from "./ProfileCard";

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center mt-0 md:mt-[200px]">
            <div className="flex flex-col w-full h-full items-center justify-center mt-0 md:mt-[200px] box-border px-[100px]">
                <div className="flex flex-col-reverse md:flex-row w-full">
                    
                    {/* متن سمت چپ */}
                    <div className="flex flex-col w-full md:w-1/2 justify-between">
                        <div className='flex w-full '>
                            <div className='pr-[50px] min-w-[250px]'>
                                <h1 className="text-right text-10 md:text-30">
                                    About <br /> FOKO
                                </h1>
                            </div>
                            <div className='pr-[200px]'>
                                <p className="text-10 md:text-16 text-justify">
                                    At FOKO Studio, we are deeply committed to our clients' specific needs. From intimate interiors to large scale architectural projects, we combine creative problem-solving with a holistic design approach, navigating the layered complexities of each project. By considering every detail, we design environments that are perfectly tailored to the unique lifestyle and aspirations of our clients.
                                </p>
                            </div>
                        </div>

                        {/* OUR PHILOSOPHY */}

                        <div className='flex w-full '>
                            <div className='pr-[50px] min-w-[250px]'>
                                <h1 className="text-right text-16 md:text-30">
                                    OUR <br /> PHILOSOPHY
                                </h1>
                            </div>
                            <div className='pr-[200px]'>
                                <p className="text-10 md:text-16 text-justify">
                                    At the heart of our practice is the belief that design should create meaningful spaces that enrich the lives of those who inhabit them. We combine critical thinking, technical skill, and a deep respect for context to transform challenges into opportunities and ideas into reality. Whether addressing spatial constraints, aesthetic aspirations, or functional needs, our creative solutions aim to enhance both the experience and impact of each space.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* تصویر سمت راست */}
                    <div className="flex w-full md:w-1/2">
                        <img
                            src={aboutUsImage}
                            alt="aboutUsImage"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row w-full pt-[200px]">
                    <div className='flex w-full '>
                        <div className="flex w-full md:w-1/2">

                            <div className='pr-[50px] min-w-[250px]'>
                                <h1 className="text-right text-16 md:text-30">
                                    THE <br /> FOUNDERS

                                </h1>
                            </div>
                            <div className='pr-[200px]'>
                                <p className="text-10 md:text-16 text-justify">
                                    FOKO Studio was founded by Jenny Fontenot and Pegah Koulaeien, two seasoned design professionals with a shared passion for creating inspiring spaces. With diverse backgrounds in architecture and interior design, Jenny and Pegah bring a unique blend of technical expertise and creative intuition to every project. Their collaboration fosters a dynamic, multidisciplinary approach that excels across projects of all scales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <ProfileCard name='JENNY FONTENOT, RA'/>
                <ProfileCard name='PEGAH KOULAEIAN, LEED AP' />
                <span className="mb-[10px] md:mb-[200px]" />
            </div>

        </div>
    )
}

export default AboutUs;