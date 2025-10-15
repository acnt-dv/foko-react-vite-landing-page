import { useEffect, useState } from "react";
import { INSTAGRAM_LINK } from "../assets/constants.js";
import { useLocation } from "react-router-dom";

export const Footer = () => {
    const [isBottom, setIsBottom] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            setIsBottom(scrollPosition >= documentHeight - 5);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // check once on load
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isContactPage = location.pathname.toLowerCase().includes("contact");

    return (
        <footer
            className={`w-full z-50 bg-transparent ${
                isBottom ? "opacity-100" : "opacity-100"
            }`}
        >
            <div className="flex justify-between items-center px-[30px] lg:px-[50px] pb-[30px] lg:pb-[50px] text-[7px] lg:text-10">
                <p>@ 2025 FOKO STUDIO. ALL RIGHTS RESERVED.</p>

                {isContactPage && (
                    <p
                        className="cursor-pointer text-10 lg:text-16"
                        onClick={() => window.open(INSTAGRAM_LINK, "_blank")}
                    >
                        Instagram
                    </p>
                )}
            </div>
        </footer>
    );
};

export default Footer;