import logo from '../statics/png/foko-logo.png';

export const Login = ({loggedIn, setLoggedIn})=> {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div>
            <div>
                <img src={logo} alt={'logo'}/>
            </div>
        <div>
            <button className="text-20 font-rubik mt-[128px] cursor-pointer"
            onClick={()=>setLoggedIn(!loggedIn)}
            >PASSWORD &#62;</button>
        </div>
            </div>
        </div>
    )
}

export default Login;