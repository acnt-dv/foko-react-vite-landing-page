import aboutUsImage from '../statics/png/about-us.png';
import right from "../statics/svg/arrow-right.svg";
import rightSmall from "../statics/svg/arrow-right-small.svg";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full lg:flex-row h-full lg:h-screen items-center lg:items-start justify-end mt-[50px] lg:mt-[150px]">
            <div className='flex w-full'>
                <span className="flex justify-center lg:justify-start w-full">
                    <div className="flex w-full flex-col justify-between items-between text-justify my-0 lg:my-0">
                        <p className="ml-[15.63vw] mr-[7.81vw] text-10 lg:text-16">
                            Welcome to FOKO Studio, an architecture and interior design practice specializing in creating functional, inspiring spaces that reflect your unique vision. From residential to commercial projects, our team is dedicated to delivering exceptional design solutions.
                        </p>

                        <h2 className="hidden lg:flex font-rubik w-full ml-[15.63vw] text-10 lg:text-20 cursor-pointer my-[50px] lg:my-0" onClick={() => { navigate('/contactUs') }}>
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={right} alt="Right Image" />
                        </h2>

                        <h2 className="block lg:hidden font-rubik lg:max-w-[450px] text-10 lg:text-20 cursor-pointer my-[50px] lg:my-0" onClick={() => { navigate('/contactUs') }}>
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={rightSmall} alt="Right Image" width="9px" height="4px" className='mt-[-2px]' />
                        </h2>
                    </div>
                    <img src={aboutUsImage} alt={'aboutUsImage'}
                        className="hidden lg:block filter grayscale w-[32.14vw] h-[69.07vh] mr-[15.63vw]" />
                </span>

            </div>
            <img src={aboutUsImage} alt={'aboutUsImage'}
                className="block lg:hidden filter grayscale mb-foko lg:mx-foko w-full px-0 sm:px-[30px] max-h-[400px] object-cover object-[center_30%] hover:object-[center_60%] transition-[object-position] duration-700" />
        </div>)
}

export default AboutUs;