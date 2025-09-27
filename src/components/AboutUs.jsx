import aboutUsImage from '../statics/png/about-us.png';
import right from "../statics/svg/arrow-right.svg";
import rightSmall from "../statics/svg/arrow-right-small.svg";
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import getAboutUs from "../services/getAbout.jsx";

const AboutUs = () => {
    const ABOUT_US = '<p>Welcome to FOKO Studio, an architecture and interior design practice specializing in creating functional, inspiring spaces that reflect your unique vision. From residential to commercial projects, our team is dedicated to delivering exceptional design solutions.</p>';
    const navigate = useNavigate();
    const [aboutUsHtml, setAboutUsHtml] = useState(ABOUT_US);

    useEffect(() => {
        const fetchAboutUs = async () => {
            const res = await getAboutUs();
            setAboutUsHtml(res?.text ?? ABOUT_US);
        }
        fetchAboutUs().then(r => console.debug(r ?? 'fetchAboutUs successfully'));
    }, [])

    return (
        <div
            className="flex flex-col w-full lg:flex-row h-full lg:h-screen items-center lg:items-start justify-end mt-[5.92vh] lg:mt-[18.52vh]">
            <div className='flex w-full'>
                <span className="flex justify-center lg:justify-start w-full">
                    <div
                        className="flex w-full flex-col justify-end lg:justify-between items-end lg:items-start text-justify my-0">
                        <div className="flex">
                            <h1 className="flex w-fit lg:hidden text-16 font-rubik text-end">ABOUT <br/> FOKO</h1>
                            <div
                                className="w-[59.23vw] lg:w-[30.05vw] ml-[15.63vw] mr-[7.69vw] lg:mr-[7.81vw] text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.015em]"
                                dangerouslySetInnerHTML={{ __html: aboutUsHtml }}
                            />
                        </div>


                        <h2 className="hidden justify-center items-center lg:flex font-rubik w-fit ml-[15.63vw] lg:text-20 cursor-pointer lg:my-0"
                            onClick={() => {
                                navigate('/contactUs')
                            }}>
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={right} alt="Right Image" className='w-[0.42vw] h-[1.48vh]'/>
                        </h2>

                        <h2 className="flex justify-start items-center lg:hidden font-rubik text-10 cursor-pointer w-[59.23vw] mr-[7.69vw] my-[5.92vh]"
                            onClick={() => {
                                navigate('/contactUs')
                            }}>
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={rightSmall} alt="Right Image" className='w-[1.03vw] h-[1.07vh]'/>
                        </h2>
                    </div>
                    <img src={aboutUsImage} alt={'aboutUsImage'}
                         className="hidden lg:block filter grayscale w-[32.14vw] h-[47.07vh] mr-[15.63vw]"/>
                </span>

            </div>
            <img src={aboutUsImage} alt={'aboutUsImage'}
                 className="block lg:hidden filter grayscale w-full h-[61.02vh] object-cover object-[center_30%] hover:object-[center_60%] transition-[object-position] duration-700"/>
        </div>)
}

export default AboutUs;