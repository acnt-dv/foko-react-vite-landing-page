import {motion} from "framer-motion";
import logo from "../statics/png/foko-logo.png";
import React from "react";

const LoadingOverlay = ({show, text = ''}) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 z-[1000] bg-black opacity-90 flex items-center justify-center">
            <motion.span
                initial={{opacity: 0.9}}
                animate={{opacity: [0.3, 1, 0.3]}}
                transition={{duration: 1.6, repeat: Infinity}}
                className="text-white text-3xl md:text-5xl font-semibold tracking-[0.5em]"
            >
                <span className='fixed top-0 left-0 flex justify-between w-full z-10'>
                    <img src={logo} alt="logo"
                         className="w-[12.82vw] h-auto aspect-square lg:w-[3.91vw] lg:h-auto m-[30px] lg:m-[50px] filter brightness-0 invert"/>
                </span>

                {text}
            </motion.span>
        </div>
    );
};

export default LoadingOverlay;