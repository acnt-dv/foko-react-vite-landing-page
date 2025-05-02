import aboutUsImage from '../statics/png/about-us.png';
import ProfileCard from "./ProfileCard";

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center mt-0 md:mt-[200px]">
            <div className="flex flex-col-reverse md:flex-row w-full">

                <div className="flex-col w-full md:w-1/2 h-full items-center justify-center">
                    <div className='flex'>
                        <h1 className="text-16 md:text-30 font-rubik block absolute left-[30px] text-right mt-[25px] md:mt-[40px]">About <br /> FOKO
                        </h1>
                        <span className="flex flex-col w-full justify-center items-center text-justify my-[30px] md:my-foko">
                            <p className="mx-[30px] md:mx-[50px] text-10 md:text-16 w-1/2 self-end md:self-center ">
                                FOKO Studio is a Los Angeles-based architecture and interior design firm.
                                Our studio specializes in crafting bespoke, high-end residential and commercial
                                spaces that are as thoughtful as they are visually compelling.
                            </p>

                            <p className="mx-[30px] md:mx-[50px] w-1/2 self-end md:self-center text-10 md:text-16 my-foko">
                                At FOKO Studio, we are deeply committed to our clients' specific needs.
                                From intimate interiors to large-scale architectural projects,
                                we combine creative problem-solving with a holistic design approach,
                                navigating the layered complexities of each project. By considering every detail,
                                we design environments that are perfectly tailored to the unique lifestyle and
                                aspirations of our clients.
                            </p>
                        </span>
                    </div>
                    <div className='flex'>
                        <h1 className="text-16 md:text-30 font-rubik block absolute left-[30px] text-right mt-[47px] md:mt-[40px]">OUR <br /> PHILOSOPHY
                        </h1>
                        <span className="flex flex-col w-full justify-center items-center text-justify my-foko">
                            <p className="mx-[30px] md:mx-[50px] text-10 md:text-16 w-1/2 self-end md:self-center">
                                At the heart of our practice is the belief that design should create meaningful spaces that enrich the lives of those who inhabit them. We combine critical thinking, technical skill, and a deep respect for context to transform challenges into opportunities and ideas into reality. Whether addressing spatial constraints, aesthetic aspirations, or functional needs, our creative solutions aim to enhance both the experience and impact of each space.
                            </p>
                        </span>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2">
                    <img src={aboutUsImage} alt={'aboutUsImage'} className="w-fit h-fit mb-0 md:mb-foko md:m-foko" />
                </div>
            </div>
            <div className='flex w-full mb-[30px] md:mb-[50px]'>
                <h1 className="text-16 font-rubik block absolute left-[30px] text-right mt-[47px]">OUR <br/> TEAM</h1>
                <span className="flex flex-col w-full justify-center items-center text-justify my-foko">
                    <p className="mx-[30px] md:mx-[50px] text-10 md:text-16 w-1/2 md:w-9/12 self-end md:self-center">
                        FOKO Studio was founded by Jenny Fontenot and Pegah Koulaeien, two seasoned design professionals with a shared passion for creating inspiring spaces. With diverse backgrounds in architecture and interior design, Jenny and Pegah bring a unique blend of technical expertise and creative intuition to every project. Their collaboration fosters a dynamic, multidisciplinary approach that excels across projects of all scales.
                    </p>
                </span>
            </div>

            <ProfileCard name='JENNY FONTENOT, RA' />
            <ProfileCard name='PEGAH KOULAEIAN, LEED AP' />
            <span className="mb-[50px] md:mb-[50px]" />
        </div>
    )
}

export default AboutUs;