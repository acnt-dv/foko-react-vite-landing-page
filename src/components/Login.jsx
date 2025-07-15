import logo from '../statics/png/foko-logo.png';

export const Login = ({loggedIn, setLoggedIn})=> {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div>
            <div className="w-[6.77vw] h-[12.04vh] content justify-center items-center">
                <img src={logo} alt={'logo'} />
            </div>
        <div className="absolute top-[calc(50%-12.04%vh)] lg:top-[calc(50%-12.04%vh)]">
            <button className="text-[clamp(10px,1.04vw,20px)] leading-none block font-rubik mt-[12.04vh] cursor-pointer"
            onClick={()=>setLoggedIn(!loggedIn)}
            >PASSWORD &#62;</button>
        </div>
            </div>
        </div>
    )
}

export default Login;