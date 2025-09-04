import rightSmall from "../statics/svg/arrow-right-small.svg";
import {useNavigate} from "react-router-dom";
import right from "../statics/svg/arrow-right.svg";

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <div
            className="flex w-full flex-col lg:flex-row h-full lg:h-[calc(100vh-9.47vh)] justify-end items-center lg:items-start mt-[5.92vh] lg:mt-[18.52vh]">
            <span className="w-fit justify-end hidden lg:block">
                <h1 className="text-30 font-rubik text-end hidden lg:block ml-[4.69vw] mr-[4.69vw] mt-[-5px]">Contact <br/> Us</h1>
            </span>
            <span className="flex w-full">
                <div className='flex w-full text-justify items-start'>
                    {/*<h1 className="ml-[7.69vw] mr-[7.69vw] text-16 font-rubik text-end block lg:hidden">Contact <br/> Us</h1>*/}
                    <div className="flex w-full flex-col items-end lg:items-start text-right lg:text-left">
                        <span className="flex">
                        <h1 className="flex w-fit lg:hidden text-16 font-rubik text-end">Contact <br/> Us</h1>
                        <p className="w-[59.23vw] lg:w-[30.05vw] ml-[15.63vw] mr-[7.69vw] lg:ml-0 lg:mr-[7.81vw] text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.015em]">
                            Whether you're looking to start a new project, have questions about our services, or just want to say hello, our team is here to assist. Please reach out to us directly using the information below, and we’ll get back to you as soon as possible.
                        </p>
                            </span>
                        <span className="hidden lg:block">
                            <p className="mt-[50px] lg:mt-[100px] text-10 lg:text-16">Pegah Koulaeian</p>
                            <p className="text-10 lg:text-16">pegah@fokostudio.com</p>
                            <p className="text-10 lg:text-16">949-502-1482</p>
                            <p className="mt-[50px] text-10 lg:text-16">Jenny Fontenot</p>
                            <p className="text-10 lg:text-16">jenny@fokostudio.com</p>
                            <p className="text-10 lg:text-16">718-984-8018</p>
                        </span>

                        <h2 className="flex justify-center items-center lg:hidden font-rubik text-10 cursor-pointer mr-[55.28vw] md:mr-[60.28vw] my-[5.92vh]"
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