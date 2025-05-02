import aboutUsImage from '../statics/png/about-us.png';
import right from "../statics/svg/arrow-right.svg";

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row h-full md:h-screen items-start justify-center">
            <h1 className="text-end text-30 font-rubik hidden md:block absolute left-[50px] mt-[20px]">About <br/> FOKO</h1>

            <div className='flex'>
                <h1 className="text-end text-16 font-rubik block md:hidden absolute left-[30px] mt-foko">About <br/> FOKO</h1>
                <span className="flex flex-col w-full justify-start items-center text-justify my-foko md:my-0">
                    <p className="mx-[30px] md:mx-[50px] text-16 w-7/12 self-end md:self-center max-w-[450px] mt-[30px]">
                        FOKO Studio is a Los Angeles-based architecture and interior design firm.
                        Our studio specializes in crafting bespoke, high-end residential and commercial
                        spaces that are as thoughtful as they are visually compelling.
                    </p>

                    <p className="mx-[30px] md:mx-[50px] hidden md:block w-7/12 self-end md:self-center text-16 max-w-[450px] my-foko">
                        At FOKO Studio, we are deeply committed to our clients' specific needs.
                        From intimate interiors to large-scale architectural projects,
                        we combine creative problem-solving with a holistic design approach,
                        navigating the layered complexities of each project. By considering every detail,
                        we design environments that are perfectly tailored to the unique lifestyle and
                        aspirations of our clients.
                    </p>
                    <h2 className="flex font-rubik w-7/12 max-w-[450px] self-end md:self-center mx-[30px] md:mx-[50px] md:justify-self-start text-10 md:text-20 mt-foko cursor-pointer">
                        MORE &nbsp; &nbsp; &nbsp;
                        <img src={right} alt="Right Image"/>
                    </h2>
                </span>
                <img src={aboutUsImage} alt={'aboutUsImage'}
                     className="hidden md:block filter grayscale mb-foko md:mx-foko"/>
            </div>
            <img src={aboutUsImage} alt={'aboutUsImage'}
                 className="block md:hidden filter grayscale mb-foko md:mx-foko"/>
        </div>)
}

export default AboutUs;