import * as React from "react";

import { IFooterLinks } from "../interfaces";

const FooterLinks: React.FC<IFooterLinks> = ({ title, links }): JSX.Element => {
  return (
    <div className="flex flex-col my-0 lg:my-4 min-w-[150px]" key={title}>
      <h4 className="font-montserrat mb-4 font-medium text-[18px] leading-[27px] text-white">{title}</h4>
      <ul className="list-none">
        {links.map(item => (
          <li className="[&:not(:last-child)]:mb-4" key={item.name}>
            <a
              className="text-lightWhite hover:text-secondary active:text-white cursor-pointer font-normal text-[16px] leading-[24px] font-montserrat"
              href={item.link}
              target="_blank"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
