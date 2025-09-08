import {useState, useEffect, useRef} from "react";
import toast, {Toaster} from "react-hot-toast";
import logo from '../statics/png/foko-logo.png';
import right from "../statics/svg/arrow-right.svg";

export const Login = ({loggedIn, setLoggedIn}) => {
    const [password, setPassword] = useState("");
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setPassword("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col h-full items-center justify-center bg-foko">
            <Toaster/>
            <div className="flex flex-col justify-center items-center h-screen">
                <div
                    className="w-[25.64vw] h-[11.85vh] aspect-square lg:w-[6.77vw] lg:h-[12.04vh] justify-center items-center">
                    <img src={logo} alt={'logo'} className="justify-self-center"/>
                </div>
                <div
                    className="flex mt-[3.55vh] lg:mt-[12.04vh] w-[25.64vw] lg:w-[6.77vw] justify-self-center justify-center items-center">
                    <div className="relative" ref={containerRef}>
                        <input
                            ref={inputRef}
                            type="password"
                            placeholder="PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    if (password === "HelloFOKO23") {
                                        toast.success("Login Successful!");
                                        setLoggedIn(true);
                                    } else {
                                        toast.error("Invalid credential");
                                    }
                                }
                            }}
                            className="w-[90%] text-[clamp(16px,1.60vw,16px)] lg:text-[clamp(10px,1.04vw,20px)] leading-none block font-rubik cursor-pointer bg-transparent pr-0 focus:outline-none focus:ring-0"
                        />
                        <button
                            onClick={() => {
                                if (password === "HelloFOKO23") {
                                    toast.success("Login Successful!");
                                    setLoggedIn(true);
                                } else {
                                    toast.error("Invalid credential");
                                }
                            }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-lg font-bold text-gray-500 cursor-pointer"
                        >
                            <img src={right} alt="Right Image" className='w-[1.5vw] lg:w-[0.42vw] lg:h-[1.48vh]'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;