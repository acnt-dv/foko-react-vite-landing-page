import {Fragment} from "react";
import Footer from "./Footer";
import ContactInfo from "./common/ContactInfo";
import {CONTACT_US_INFO} from "../assets/constants.js";

// Contact: Main contact page component
const Contact = ({contactsInfo}) => {
    // Contact information array for DRY principle
    const contactUsInfo = contactsInfo ?? CONTACT_US_INFO;

    return (
        <Fragment>
            {/* Main container with accessibility label */}
            <div aria-label="Contact Information"
                 className="flex w-full flex-col lg:flex-row h-screen lg:h-[calc(100vh-9.47vh)] justify-start items-center mb-32">
                <div className="flex w-full h-screen overflow-hidden lg:h-fit items-center lg:items-start">
                    {/* Sidebar with heading for large screens */}
                    <div className="flex w-0 lg:w-1/5 justify-end lg:block">
                        <h1 className="text-30 font-rubik text-end hidden lg:block mr-[50px] mt-[-10px]">Contact <br/> Us
                        </h1>
                    </div>
                    {/* Main content area */}
                    <section className="flex w-full lg:w-4/5 text-justify items-start" lang="en">
                        {/* Heading for small screens */}
                        <h1 className="text-16 font-rubik text-end block lg:hidden mx-[30px]">Contact <br/> Us</h1>
                        <div className="col">
                            {/* Introductory text */}
                            <p className="mr-[30px] lg:mr-[150px] max-w-[450px] lg:self-center text-10 lg:text-16 mt-[4px] lg:mt-0">
                                {contactUsInfo?.SECTION_TEXT}
                            </p>
                            {/* Render contact information */}
                            {contactUsInfo?.CONTACTS_INFO?.map((person, index) => (
                                <ContactInfo key={index} {...person} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Contact;