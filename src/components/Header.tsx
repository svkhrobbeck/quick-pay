import * as React from "react";
import cx from "classnames";

import { styles } from "../constants/styles";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/constants";

const Header: React.FC = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
  const [isActive, setIsActive] = React.useState<string>("#");

  const handleToggleNav = (): void => setIsNavOpen(prev => !prev);

  return (
    <header className="bg-primary py-3 z-[100] sticky top-0">
      <div className={cx(styles.flexBetween, styles.container)}>
        <img className="w-[110px] cursor-pointer" src={logo} alt="logo quick-pay" />

        <button className="sm:hidden inline-flex" onClick={handleToggleNav}>
          <img className="w-[24px] h-[24px] object-contain" src={isNavOpen ? close : menu} alt="nav toggler" />
        </button>

        <nav
          className={cx(
            "bg-primary sm:bg-transparent w-full sm:w-auto left-0 absolute sm:static top-[65px] sm:block sidebar py-4 px-3 sm:py-0 sm:px-0",
            isNavOpen ? "block" : "hidden"
          )}
        >
          <ul className="list-none flex w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center sm:justify-end">
            {navLinks.map(({ title, path }) => (
              <li
                className={cx(
                  "sm:[&:not(:last-child)]:mr-9 mx-2 font-montserrat font-medium sm:font-normal hover:text-secondary transition-all duration-500",
                  isActive === path ? "text-white" : "text-lightWhite"
                )}
                key={path}
              >
                <a className="text-inherit" href={path} onClick={(): void => setIsActive(path)}>
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
