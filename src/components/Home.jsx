import React from "react";
import FullScreenSlideshow from "./FullScreenSlideShow";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export const Home = () => {
    return (
        <React.Fragment>
            <FullScreenSlideshow/>
            <AboutUs/>
            <ContactUs/>
        </React.Fragment>
    )
}

export default Home;