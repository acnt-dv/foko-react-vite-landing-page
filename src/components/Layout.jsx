import {React, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import FullPageMenu from "./FullPageMenu";
import BackToTop from "./BackToTop";

export const Layout = () => {
    const [loggedIn, setLoggedIn] = useState(false);
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
        <div className="flex flex-col h-[100vh] items-center justify-center bg-foko">
            {loggedIn ?
                <>
                    <Header menuToggle={toggleMenu} hideLogo={hideLogo}/>
                    <FullPageMenu isOpen={menuOpen} onClose={toggleMenu}/>
                    <Outlet />
                    <BackToTop />
                    {/* <Footer /> */}
                </>
                :
                <>
                    <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    {/* <Footer/> */}
                </>
            }
        </div>
    )
}

export default Layout;