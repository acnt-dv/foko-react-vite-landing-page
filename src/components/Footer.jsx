import {useEffect, useState} from "react";
import {INSTAGRAM_LINK} from "../assets/constants.js";

export const Footer = () => {
    const [, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.body.offsetHeight;
            setShowFooter(scrollPosition >= documentHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 flex justify-between w-full z-50 transition-transform duration-300`}>
            <div className="flex w-3/4 justify-start text-[7px] lg:text-10 m-[30px] lg:m-[50px]">
                <p>@ 2025 FOKO STUDIO. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex w-1/4 justify-end text-10 lg:text-16 m-[30px] lg:m-[50px] gap-2 lg:gap-4">
                {/* <p>LinkedIn</p> */}
                <p className="cursor-pointer" onClick={() => {
                    window.open(INSTAGRAM_LINK, "_blank");
                }}>Instagram</p>
            </div>
        </div>
    )
}

export default Footer;