import aboutUsImage from '../statics/png/about-us.png';
import right from "../statics/svg/arrow-right.svg";
import rightSmall from "../statics/svg/arrow-right-small.svg";
import {useNavigate} from 'react-router-dom';
import {useCallback, useEffect, useState} from "react";
import getAboutUs from "../services/getAbout.jsx";
import {DEFAULT_ABOUT_US_HTML} from "../assets/constants.js";
import MoreButton from "./common/MoreButton.jsx";
import login from "./Login.jsx";

/**
 * Accessible and maintainable AboutUs section.
 */
const AboutUs = () => {
    const navigate = useNavigate();
    const [aboutUsHtml, setAboutUsHtml] = useState(DEFAULT_ABOUT_US_HTML);

    // Fetch About Us section from API with error handling
    const fetchAboutUsContent = useCallback(async () => {
        try {
            const response = await getAboutUs();
            setAboutUsHtml(response?.text ?? DEFAULT_ABOUT_US_HTML);
        } catch (error) {
            console.error("Error fetching About Us content:", error);
            setAboutUsHtml(DEFAULT_ABOUT_US_HTML);
        }
    }, []);

    useEffect(() => {
        fetchAboutUsContent().then(r=> console.debug(r ?? 'fetchAboutUsContent successfully'));
    }, [fetchAboutUsContent]);

    const handleNavigate = useCallback(() => {
        navigate('/studio');
    }, [navigate]);

    return (
        <section
            className="flex flex-col w-full lg:flex-row h-full lg:h-screen items-center lg:items-start justify-end mt-[5.92vh] lg:mt-[18.52vh]"
            aria-labelledby="about-us-title"
        >
            <div className="flex w-full">
                <div className="flex justify-center lg:justify-start w-full">
                    <div
                        className="flex w-full flex-col justify-end lg:justify-between items-end lg:items-start text-justify my-0">
                        <div className="flex">
                            <h1
                                id="about-us-title"
                                className="flex w-fit lg:hidden text-16 font-rubik text-end"
                            >
                                ABOUT <br/> FOKO
                            </h1>
                            <div
                                className="w-[59.23vw] lg:w-[30.05vw] ml-[15.63vw] mr-[7.69vw] lg:mr-[7.81vw] text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.015em]"
                                dangerouslySetInnerHTML={{__html: aboutUsHtml}}
                            />
                        </div>
                        <MoreButton handleNavigate={handleNavigate} iconSmall={rightSmall} iconLarge={right}/>
                    </div>
                    {/* Desktop image */}
                    <img
                        src={aboutUsImage}
                        alt="Architectural design by FOKO Studio"
                        className="hidden lg:block filter grayscale w-[32.14vw] h-[47.07vh] mr-[15.63vw]"
                    />
                </div>
            </div>
            {/* Mobile image */}
            <img
                src={aboutUsImage}
                alt="Architectural project example"
                className="block lg:hidden filter grayscale w-full h-[61.02vh] object-cover object-[center_30%] hover:object-[center_60%] transition-[object-position] duration-700"
            />
        </section>
    );
};

export default AboutUs;