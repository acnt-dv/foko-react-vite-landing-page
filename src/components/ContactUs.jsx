const ContactUs = () => {
    return (
        <div className="flex max-w-11/12 flex-col md:flex-row w-full h-full md:h-screen justify-start items-start mb-32">
            <span className="flex w-1/5 justify-end">
                <h1 className="text-30 font-rubik text-end hidden md:block mr-[50px] mt-[-10px]">Contact <br /> Us</h1>
            </span>
            <span className="flex w-4/5">
                <div className='flex w-full text-justify items-start'>
                    <h1 className="text-16 font-rubik text-end block md:hidden mx-[30px]">Contact <br /> Us</h1>
                    <div className="col">
                        <p className="mr-[30px] md:mr-[150px] w-full max-w-[450px] md:self-center text-10 md:text-16 mt-[4px] md:mt-0">
                        Whether you're looking to start a new project, have questions about our services, or just want to say hello, our team is here to assist. Please reach out to us directly using the information below, and we’ll get back to you as soon as possible.
                        </p>
                        <p className="mt-[100px]">Pegah Koulaeian</p>
                        <p>pegah@fokostudio.com</p>
                        <p>949-502-1482</p>
                        <p className="mt-[50px]">Jenny Fontenot</p>
                        <p>jenny@fokostudio.com</p>
                        <p>718-984-8018</p>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default ContactUs;