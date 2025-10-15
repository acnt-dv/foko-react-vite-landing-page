import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from './Header';
import FullPageMenu from "./FullPageMenu";
import BackToTop from "./BackToTop";
import Footer from "./Footer.jsx";

export const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hideLogo, setHideLogo] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
            setHideLogo(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col h-full items-center justify-center bg-foko">
            <Header menuToggle={toggleMenu} hideLogo={hideLogo}/>
            <FullPageMenu isOpen={menuOpen} onClose={toggleMenu}/>
            <Outlet/>
            <BackToTop/>
            <Footer/>
        </div>
    )
}

export default Layout;