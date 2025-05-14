import aboutUsImage from '../statics/png/about-us.png';
import right from "../statics/svg/arrow-right.svg";

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full md:flex-row h-full md:h-screen items-start justify-center mt-[50px] md:mt-[150px]">
            <div className='flex w-full md:w-11/12'>
                <span className="flex w-1/5 hidden md:block">
                    {/* <h1 className="text-end text-30 font-rubik hidden md:block mr-[50px] mt-[45px]">About <br /> FOKO</h1> */}
                    {/* <h1 className="text-end text-16 font-rubik block md:hidden absolute left-[30px] mt-[48px]">About <br /> FOKO</h1> */}
                </span>
                <span className="flex w-full md:w-4/5 px-[30px] md:px-0">
                    <div className="flex flex-col justify-between items-between text-justify my-0 md:my-0">
                        <p className="md:mr-[150px] text-10 md:text-16 max-w-[450px]">
                            Welcome to FOKO Studio, an architecture and interior design practice specializing in creating functional, inspiring spaces that reflect your unique vision. From residential to commercial projects, our team is dedicated to delivering exceptional design solutions.
                        </p>

                        <p className="mx-[30px] md:mr-[150px] hidden md:block self-end md:self-center text-16 max-w-[450px] my-foko">
                            {/* At FOKO Studio, we are deeply committed to our clients' specific needs.
                        From intimate interiors to large-scale architectural projects,
                        we combine creative problem-solving with a holistic design approach,
                        navigating the layered complexities of each project. By considering every detail,
                        we design environments that are perfectly tailored to the unique lifestyle and
                        aspirations of our clients. */}
                        </p>
                        <h2 className="flex font-rubik max-w-[450px] text-10 md:text-20 cursor-pointer my-[50px] md:my-0">
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={right} alt="Right Image" />
                        </h2>
                    </div>
                    <img src={aboutUsImage} alt={'aboutUsImage'}
                        className="hidden md:block filter grayscale" />
                </span>

            </div>
            <img src={aboutUsImage} alt={'aboutUsImage'}
                className="block md:hidden filter grayscale mb-foko md:mx-foko" />
        </div>)
}

export default AboutUs;