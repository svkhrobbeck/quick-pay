import * as React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/constants";
import { styles } from "../constants/styles";

const Header: React.FC = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActive, setIsActive] = useState("#");

  const handleToggleNav = () => setIsNavOpen(prev => !prev);

  return (
    <header className="bg-primary py-6 z-[100] sticky top-0">
      <div className={styles.flexBetween + " " + styles.container}>
        <img className="w-[130px] cursor-pointer" src={logo} alt="logo quick-pay" />

        <button className="sm:hidden inline-flex" onClick={handleToggleNav}>
          <img className="w-[24px] h-[24px] object-contain" src={isNavOpen ? close : menu} alt="nav toggler" />
        </button>

        <nav
          className={`${
            isNavOpen ? "block" : "hidden"
          } bg-primary sm:bg-transparent w-full sm:w-auto left-0 absolute sm:static top-[90px] sm:block sidebar py-4 px-3 sm:py-0 sm:px-0`}
        >
          <ul className="list-none flex w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center sm:justify-end">
            {navLinks.map(({ title, path }) => (
              <li
                className={`${
                  isActive === path ? "text-white" : "text-lightWhite"
                } sm:[&:not(:last-child)]:mr-9 mx-2 font-montserrat font-medium sm:font-normal hover:text-secondary transition-all duration-500`}
                key={path}
              >
                <a className="text-inherit" href={path} onClick={() => setIsActive(path)}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
