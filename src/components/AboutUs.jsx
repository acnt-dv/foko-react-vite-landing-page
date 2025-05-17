import aboutUsImage from '../statics/png/about-us.png';
import right from "../statics/svg/arrow-right.svg";
import rightSmall from "../statics/svg/arrow-right-small.svg";

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row h-full lg:h-screen items-center lg:items-start justify-center mt-[50px] lg:mt-[150px]">
            <div className='flex w-full lg:w-11/12'>
                <span className="flex w-1/5 hidden lg:block">
                    {/* <h1 className="text-end text-30 font-rubik hidden lg:block mr-[50px] mt-[45px]">About <br /> FOKO</h1> */}
                    {/* <h1 className="text-end text-16 font-rubik block lg:hidden absolute left-[30px] mt-[48px]">About <br /> FOKO</h1> */}
                </span>
                <span className="flex justify-center lg:justify-start w-full lg:w-4/5 px-[30px] lg:px-0">
                    <div className="flex w-full flex-col justify-between items-between text-justify my-0 lg:my-0">
                        <p className="lg:mr-[100px] xl:mr-[150px] text-10 lg:text-16 lg:max-w-[450px]">
                            Welcome to FOKO Studio, an architecture and interior design practice specializing in creating functional, inspiring spaces that reflect your unique vision. From residential to commercial projects, our team is dedicated to delivering exceptional design solutions.
                        </p>

                        <p className="mx-[30px] lg:mr-[150px] hidden lg:block self-end lg:self-center text-16 w-full my-foko">
                            {/* At FOKO Studio, we are deeply committed to our clients' specific needs.
                        From intimate interiors to large-scale architectural projects,
                        we combine creative problem-solving with a holistic design approach,
                        navigating the layered complexities of each project. By considering every detail,
                        we design environments that are perfectly tailored to the unique lifestyle and
                        aspirations of our clients. */}
                        </p>
                        <h2 className="hidden lg:flex font-rubik lg:max-w-[450px] text-10 lg:text-20 cursor-pointer my-[50px] lg:my-0">
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={right} alt="Right Image" />
                        </h2>
                        <h2 className="block lg:hidden flex font-rubik lg:max-w-[450px] text-10 lg:text-20 cursor-pointer my-[50px] lg:my-0">
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={rightSmall} alt="Right Image" width="9px" height="4px" className='mt-[-2px]'/>
                        </h2>
                    </div>
                    <img src={aboutUsImage} alt={'aboutUsImage'}
                        className="hidden lg:block filter grayscale" />
                </span>

            </div>
            <img src={aboutUsImage} alt={'aboutUsImage'}
                className="block lg:hidden filter grayscale mb-foko lg:mx-foko w-full px-0 sm:px-[30px] max-h-[400px] object-cover object-[center_30%]" />
        </div>)
}

export default AboutUs;