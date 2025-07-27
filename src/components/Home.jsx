import React from "react";
import FullScreenSlideshow from "./FullScreenSlideShow";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export const Home = () => {
    /** font sample */
    // 'text-[clamp(10px,0.83vw,16px)] text-justify leading-loose tracking-[0.015em]';
    return (
        <React.Fragment>
            <FullScreenSlideshow/>
            <AboutUs/>
            <ContactUs/>
        </React.Fragment>
    )
}

export default Home;