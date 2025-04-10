import menuIcon from '../statics/svg/menu-icon.svg';
import logo from '../statics/png/foko-logo.png';

export const Header = ({menuToggle})=> {
    return (
        <div className="fixed top-0 left-0 flex justify-between w-full z-10">
            <img src={logo} alt="logo" className="w-[30px] h-[30px] m-[30px] md:m-[50px]"/>
            <button onClick={menuToggle} className="cursor-pointer">
                <img src={menuIcon} alt="menuIcon" className="w-[30px] h-[30px] m-[30px] md:m-[50px]"/>
            </button>
        </div>
    )
}

export default Header;