import React from 'react';
import logo from "../statics/png/foko-logo.png";
import close from "../statics/png/close.png";
import {useNavigate} from "react-router-dom";

const FullPageMenu = ({isOpen, onClose}) => {
    const navigate = useNavigate();

    return (
        <div
            className={`z-10 fixed inset-0 bg-black opacity-[90%] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <button onClick={onClose} className="absolute top-[37.5px] right-[30px] lg:top-[72.5px] lg:right-[50px] cursor-pointer">
                <img src={close} alt="close" width='30px' height='30px'/>
            </button>

            <div className="flex flex-col lg:flex-row w-full items-center justify-center">
                <span className='flex w-1/2 justify-center items-center m-[50px]'>
                    <img src={logo} alt={'logo'} className='w-[75px] h-[75px] lg:w-[130px] lg:h-[130px] filter brightness-0 invert'/>
                </span>

                <nav>
                    <ul className="flex flex-col lg:flex-row w-1/2 space-y-12 lg:space-y-0 lg:space-x-24 text-center m-[50px]">
                        <li className="text-white text-20 hover:underline  cursor-pointer">
                            <a href="#home" onClick={() => {
                                onClose();
                                navigate('/')
                            }}>HOME</a>
                        </li>
                        <li className="text-white text-20 hover:underline  cursor-pointer">
                            <a href="#work" onClick={() => {
                                onClose();
                                navigate('/categories')
                            }}>WORK</a>
                        </li>
                        <li className="text-white text-20 hover:underline  cursor-pointer">
                            <a href="#studio" onClick={() => {
                                onClose();
                                navigate('/studio')
                            }}>STUDIO</a>
                        </li>
                        <li className="text-white text-20 hover:underline  cursor-pointer">
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