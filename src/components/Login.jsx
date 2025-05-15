import logo from '../statics/png/foko-logo.png';

export const Login = ({loggedIn, setLoggedIn})=> {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div>
            <div className="w-[75px] h-[75px] lg:w-[130px] lg:h-[130px] content justify-center items-center">
                <img src={logo} alt={'logo'} />
            </div>
        <div className="absolute top-[calc(50%-25px)] lg:top-[calc(50%-0px)]">
            <button className="text-[12px] lg:text-20 font-rubik mt-[128px] cursor-pointer"
            onClick={()=>setLoggedIn(!loggedIn)}
            >PASSWORD &#62;</button>
        </div>
            </div>
        </div>
    )
}

export default Login;