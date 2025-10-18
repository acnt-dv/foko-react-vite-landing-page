import menuIcon from '../statics/svg/menu-icon.svg';
import logo from '../statics/png/foko-logo.png';
import { useNavigate } from 'react-router-dom';

export const Top_Right_Fixed_Buttons = "absolute top-[37.5px] right-[30px] lg:top-[72.5px] lg:right-[50px] cursor-pointer";

export const Header = ({ menuToggle, hideLogo }) => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 flex justify-between w-full z-10">
            <div className={`transition-opacity duration-300 ${hideLogo ? "opacity-0" : "opacity-100"} cursor-pointer`}>
                <img src={logo} alt="logo" className="w-[12.82vw] h-auto aspect-square lg:w-[3.91vw] lg:h-auto m-[30px] lg:m-[50px]" onClick={() => navigate('/')} />
            </div>
            <button onClick={menuToggle}>
                <img src={menuIcon} alt="menuIcon" className={Top_Right_Fixed_Buttons} />
            </button>
        </div>
    )
}

export default Header;