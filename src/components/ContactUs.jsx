const ContactUs = () => {
    return (
        <div className="flex w-full lg:max-w-11/12 flex-col lg:flex-row w-full h-full lg:h-screen justify-start items-center lg:items-start mb-32">
            <span className="flex w-1/5 justify-end hidden lg:block">
                <h1 className="text-30 font-rubik text-end hidden lg:block mr-[50px] mt-[-10px]">Contact <br /> Us</h1>
            </span>
            <span className="flex w-full lg:w-4/5">
                <div className='flex w-full text-justify justify-center lg:justify-start items-start'>
                    <h1 className="text-16 font-rubik text-end block lg:hidden mx-[30px]">Contact <br /> Us</h1>
                    <div className="col">
                        <p className="mr-[30px] lg:mr-[150px] lg:max-w-[450px] lg:self-center text-10 lg:text-16 mt-[4px] lg:mt-0">
                        Whether you're looking to start a new project, have questions about our services, or just want to say hello, our team is here to assist. Please reach out to us directly using the information below, and we’ll get back to you as soon as possible.
                        </p>
                        <p className="mt-[50px] lg:mt-[100px] text-10 lg:text-16">Pegah Koulaeian</p>
                        <p className="text-10 lg:text-16">pegah@fokostudio.com</p>
                        <p className="text-10 lg:text-16">949-502-1482</p>
                        <p className="mt-[50px] text-10 lg:text-16">Jenny Fontenot</p>
                        <p className="text-10 lg:text-16">jenny@fokostudio.com</p>
                        <p className="text-10 lg:text-16">718-984-8018</p>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default ContactUs;