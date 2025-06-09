import menuIcon from '../statics/svg/menu-icon.svg';
import logo from '../statics/png/foko-logo.png';
import { useNavigate } from 'react-router-dom';

export const Header = ({ menuToggle, hideLogo }) => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 flex justify-between w-full z-10">
            <div className={`transition-opacity duration-300 ${hideLogo ? "opacity-0" : "opacity-100"} cursor-pointer`}>
                <img src={logo} alt="logo" className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] m-[30px] lg:m-[50px]" onClick={() => navigate('/')} />
            </div>
            <button onClick={menuToggle} className="cursor-pointer">
                <img src={menuIcon} alt="menuIcon" className="w-[30px] h-[20px] m-[30px] lg:m-[50px]" />
            </button>
        </div>
    )
}

export default Header;