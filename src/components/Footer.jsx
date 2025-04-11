import {useEffect, useState} from "react";

export const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

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
        <div className={`fixed bottom-0 left-0 flex justify-between w-full z-50 transition-transform duration-300 ${
            showFooter ? "translate-y-0" : "translate-y-full"}`}>
            <div className="flex w-3/4 justify-start text-[7px] md:text-10 m-[30px] md:m-[50px]">
                <p>@ 2025 FOKO STUDIO. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex w-1/4 justify-end text-10 md:text-16 m-[30px] md:m-[50px] gap-2 md:gap-4">
                {/* <p>LinkedIn</p> */}
                <p className="cursor-pointer">Instagram</p>
            </div>
        </div>
    )
}

export default Footer;