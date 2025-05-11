const ContactUs = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-full md:h-screen justify-start items-start mb-32">
            <h1 className="text-30 font-rubik text-end hidden md:block ml-[175px] mr-[50px] mt-[-10px]">Contact <br /> Us</h1>

            <div className='flex w-full text-justify items-start'>
                <h1 className="text-16 font-rubik text-end block md:hidden mx-[30px]">Contact <br /> Us</h1>
                <div className="col">
                    <p className="mr-[30px] md:mr-[150px] w-full max-w-[450px] md:self-center text-10 md:text-16 mt-[4px] md:mt-0">FOKO
                        Studio is here to bring your architectural dreams to life. We invite you to get in touch with us to
                        discuss your project ideas and see how we can assist you. Email us at contact@foko.studio or give us
                        a call at +123-456-7890. Our team is ready to provide you with the expertise and support you need to
                        achieve your goals.
                    </p>
                    <p className="mt-[100px]">Pegah Koulaeian</p>
                    <p>pegah@fokostudio.com</p>
                    <p>949-502-1482</p>
                    <p className="mt-[50px]">Jenny Fontenot</p>
                    <p>jenny@fokostudio.com</p>
                    <p>718-984-8018</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;