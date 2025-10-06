import { Fragment } from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";

// ContactInfo: Reusable component for displaying individual contact details
const ContactInfo = ({ name, email, phone }) => (
    <div className="mt-[15px] first:mt-[50px]">
        <p className="text-10 lg:text-16">{name}</p>
        <p className="text-10 lg:text-16">
            <a href={`mailto:${email}`} className="hover:text-gray-500">{email}</a>
        </p>
        <p className="text-10 lg:text-16">
            <a href={`tel:${phone}`} className="hover:text-gray-500">{phone}</a>
        </p>
    </div>
);

ContactInfo.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

// Contact: Main contact page component
const Contact = () => {
    // Contact information array for DRY principle
    const contacts = [
        { name: 'Pegah Koulaeian', email: 'pegah@fokostudio.com', phone: '949-502-1482' },
        { name: 'Jenny Fontenot', email: 'jenny@fokostudio.com', phone: '718-984-8018' },
    ];

    return (
        <Fragment>
            {/* Main container with accessibility label */}
            <div aria-label="Contact Information" className="flex w-full flex-col lg:flex-row h-screen lg:h-[calc(100vh-9.47vh)] justify-start items-center mb-32">
                <div className="flex w-full h-screen overflow-hidden lg:h-fit items-center lg:items-start">
                    {/* Sidebar with heading for large screens */}
                    <div className="flex w-0 lg:w-1/5 justify-end lg:block">
                        <h1 className="text-30 font-rubik text-end hidden lg:block mr-[50px] mt-[-10px]">Contact <br /> Us</h1>
                    </div>
                    {/* Main content area */}
                    <section className="flex w-full lg:w-4/5 text-justify items-start" lang="en">
                        {/* Heading for small screens */}
                        <h1 className="text-16 font-rubik text-end block lg:hidden mx-[30px]">Contact <br /> Us</h1>
                        <div className="col">
                            {/* Introductory text */}
                            <p className="mr-[30px] lg:mr-[150px] max-w-[450px] lg:self-center text-10 lg:text-16 mt-[4px] lg:mt-0">
                                Whether you're looking to start a new project, have questions about our services, or just want to say hello, our team is here to assist. Please reach out to us directly using the information below, and we’ll get back to you as soon as possible.
                            </p>
                            {/* Render contact information */}
                            {contacts.map((person, index) => (
                                <ContactInfo key={index} {...person} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Contact;