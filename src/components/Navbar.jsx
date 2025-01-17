import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import idleAvatar from "../assets/idleAvatar.svg";
import scrollAvatar from "../assets/scrollAvatar.svg";
import { navItemsEng } from "../constants/constants";
import ropebase from "../assets/ropebase.svg";
import ropeend from "../assets/ropeend.svg";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex sm:items-center fixed top-0 z-[10000] ${scrolled ? "bg-[#0e0915] py-[1.5rem]" : "bg-transparent pt-3 border-b-8 border-solid border-[#343c69]"}`}>
            <div className='w-full flex justify-between  items-center max-w-full mx-auto'>
               

                {/* Hamburger Menu Button */}
                <div className={`sm:hidden flex`} > {/* Hides on screens larger than 'sm' */}
                    <button
                        onClick={() => setToggle(!toggle)}
                        className='text-black focus:outline-none'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="1 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8 "
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={toggle ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
          </div>
          <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={scrolled ? scrollAvatar : idleAvatar} alt='logo' className={`xxs:hidden ml-2 z-50 w-24 h-24 object-contain transition-all ${scrolled ? 'avatarScrollVisible' : ''}`} />
                    <div className="xxs:hidden top-0 w-3 h-[200px] absolute ml-[3.1rem] z-50">
                        <img src={ropebase} alt="ropebase" className={`w-24 h-24 transition-all ${scrolled ? 'ropeVisible' : 'ropeHidden'}`} />
                        <img src={ropebase} alt="ropebase" className={`w-24 h-24 transition-all ${scrolled ? 'ropeVisible' : 'ropeHidden'}`} />
                        <img src={ropeend} alt="ropeend" className={`w-24 h-24 transition-all ${scrolled ? 'ropeVisible' : 'ropeHidden'}`} />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden sm:flex list-none flex-row gap-10'> {/* Shows on screens 'sm' and larger */}
                    {navItemsEng.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer font-[fff-forward]`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>&#x3c; {nav.title} /&#x3e;</a>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <ul className="flex gap-8">
                    <li className="rounded-[50%] h-12 bg-[rgb(255,255,255)]"><a href="https://www.linkedin.com/in/gabriel-karlsson-gonzalez/" target="_blank"><img src="./icons8-linkedin-480.svg" className="max-h-12" /></a></li>
                    <li className="rounded-[50%] h-12 w-12 bg-[rgb(255,255,255)]"><a href="https://github.com/GabbeKG" target="_blank"><img src="./icons8-github-384.svg" className="max-h-12" /></a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`${toggle ? "flex" : "hidden"} sm:hidden absolute top-20 left-0 w-full bg-[#0e0915] p-4 z-50`}>
                <ul className='list-none flex flex-col gap-4'>
                    {navItemsEng.map((nav) => (
                        <li
                        key={nav.id}
                        id={`#${nav.id}`}
                            className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => {
                                setActive(nav.title);
                                setToggle(false); // Close menu after clicking
                            }}
                        >
                            <a href={`#${nav.id}`}>&#x3c; {nav.title} /&#x3e;</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
