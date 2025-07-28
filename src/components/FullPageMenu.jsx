import React from 'react';
import logo from "../statics/png/foko-logo.png";
import close from "../statics/png/close.png";
import {useNavigate} from "react-router-dom";

const FullPageMenu = ({isOpen, onClose}) => {
    const navigate = useNavigate();

    return (
        <div
            className={`z-10 fixed inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-90 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <button onClick={onClose}
                    className="absolute top-[37.5px] right-[30px] lg:top-[72.5px] lg:right-[50px] cursor-pointer">
                <img src={close} alt="close" width='30px' height='30px'/>
            </button>

            <div className="flex flex-col lg:flex-row w-full items-center justify-end">
                <span className='flex justify-center lg:justify-end items-center mr-0 lg:mr-[28.44vw]'>
                    <img src={logo} alt={'logo'}
                         className='w-[25.64vw] h-[11.58vh] lg:w-[6.77vw] lg:h-[12.04vh] filter brightness-0 invert'/>
                </span>

                <nav>
                    <ul className="flex flex-col mt-[18.48vh] lg:mt-0 lg:flex-row w-fit space-y-[3.65vh] lg:space-y-0 text-center">
                        <li className="text-white text-16 lg:text-20 hover:underline cursor-pointer mr-0 lg:mr-[5.21vw]">
                            <a href="#home" onClick={() => {
                                onClose();
                                navigate('/')
                            }}>HOME</a>
                        </li>
                        <li className="text-white text-16 lg:text-20 hover:underline cursor-pointer mr-0 lg:mr-[5.21vw]">
                            <a href="#work" onClick={() => {
                                onClose();
                                navigate('/categories')
                            }}>WORK</a>
                        </li>
                        <li className="text-white text-16 lg:text-20 hover:underline cursor-pointer mr-0 lg:mr-[5.21vw]">
                            <a href="#studio" onClick={() => {
                                onClose();
                                navigate('/studio')
                            }}>STUDIO</a>
                        </li>
                        <li className="text-white text-16 lg:text-20 hover:underline cursor-pointer mr-0 lg:mr-[7.81vw]">
                            <a href="#contact" onClick={() => {
                                onClose();
                                navigate('/contactUs')
                            }}>CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>);
};

export default FullPageMenu;