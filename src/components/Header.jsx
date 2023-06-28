import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/constants";
import { styles } from "../constants/styles";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();

  const handleToggleNav = () => setIsNavOpen(prev => !prev);

  return (
    <header className="bg-primary w-full py-6 z-100">
      <div className={styles.flexBetween + " " + styles.container}>
        <img className="w-[130px] cursor-pointer" src={logo} alt="logo quick-pay" />

        <button className="sm:hidden inline-flex" onClick={handleToggleNav}>
          <img className="w-[24px] h-[24px] object-contain" src={isNavOpen ? close : menu} alt="nav toggler" />
        </button>

        {!!navLinks.length && (
          <nav
            className={`${
              isNavOpen ? "block" : "hidden"
            } bg-primary sm:bg-transparent w-full sm:w-auto left-0 absolute sm:static top-[90px] sm:block sidebar py-6 px-3 sm:py-0 sm:px-0`}
          >
            <ul className="list-none flex w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center sm:justify-end">
              {navLinks.map(({ title, path }) => (
                <li
                  className={`${
                    pathname === path ? "text-white" : "text-lightWhite"
                  } sm:[&:not(:last-child)]:mr-9 mx-2 font-montserrat font-medium sm:font-normal hover:text-secondary transition-all duration-500`}
                  key={path}
                >
                  <Link className="text-inherit" to={path}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
