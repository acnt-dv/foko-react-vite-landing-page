import rightSmall from "../statics/svg/arrow-right-small.svg";
import {useNavigate} from "react-router-dom";
import ContactInfo from "./common/ContactInfo";
import {CONTACT_US_INFO} from "../assets/constants.js";

const ContactUs = ({contactsInfo}) => {
    const navigate = useNavigate();
    const contactUsInfo = contactsInfo ?? CONTACT_US_INFO;

    return (
        <div
            className="flex w-full flex-col lg:flex-row h-full lg:h-[calc(100vh-9.47vh)] justify-end items-center lg:items-start mt-[5.92vh] lg:mt-[18.52vh]">
            <span className="w-fit justify-end hidden lg:block">
                <h1 className="text-30 font-rubik text-end hidden lg:block ml-[4.69vw] mr-[4.69vw] mt-[-5px]">Contact <br/> Us</h1>
            </span>
            <span className="flex w-full">
                <div className='flex w-full text-justify items-start'>
                    <div className="flex w-full flex-col items-end lg:items-start text-right lg:text-left">
                        <span className="flex">
                        <h1 className="flex w-fit lg:hidden text-16 font-rubik text-end">Contact <br/> Us</h1>
                        <p className="w-[59.23vw] lg:w-[30.05vw] ml-[15.63vw] mr-[7.69vw] lg:ml-0 lg:mr-[7.81vw] text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.015em]">
                            {contactUsInfo?.SECTION_TEXT}
                        </p>
                            </span>
                        <span className="hidden lg:block">
                            {contactUsInfo?.CONTACTS_INFO?.map((person, index) => (
                                <ContactInfo key={index} {...person} />
                            ))}
                        </span>

                        <h2 className="flex justify-start items-center lg:hidden font-rubik text-10 cursor-pointer w-[59.23vw] mr-[7.69vw] my-[5.92vh]"
                            onClick={() => {
                                navigate('/contactUs')
                            }}>
                            MORE &nbsp; &nbsp; &nbsp;
                            <img src={rightSmall} alt="Right Image" className='w-[1.03vw] h-[1.07vh]'/>
                        </h2>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default ContactUs;