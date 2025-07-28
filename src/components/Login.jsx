import logo from '../statics/png/foko-logo.png';

export const Login = ({loggedIn, setLoggedIn}) => {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-[25.64vw] h-[11.85vh] aspect-square lg:w-[6.77vw] lg:h-[12.04vh] justify-center items-center">
                <img src={logo} alt={'logo'} className="justify-self-center"/>
            </div>
            <div className="flex mt-[3.55vh] lg:mt-[12.04vh]">
                <button
                    className="text-[clamp(10px, 1.60vw, 16px)] lg:text-[clamp(10px,1.04vw,20px)] leading-none block font-rubik cursor-pointer"
                    onClick={() => setLoggedIn(!loggedIn)}
                >PASSWORD &#62;</button>
            </div>
        </div>
    )
}

export default Login;