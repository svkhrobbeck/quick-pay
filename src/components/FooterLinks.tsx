import * as React from "react";

import { IFooterLinks } from "../interfaces";

const FooterLinks: React.FC<IFooterLinks> = ({ title, links }): JSX.Element => {
  return (
    <div className="flex flex-col my-0 lg:my-4 min-w-[200px]" key={title}>
      <h4 className="font-montserrat mb-3 font-medium text-[17px] leading-[1.5] text-white">{title}</h4>
      <ul className="list-none">
        {links.map(item => (
          <li className="[&:not(:last-child)]:mb-2" key={item.name}>
            <a
              className="text-lightWhite hover:text-secondary active:text-white cursor-pointer font-normal text-[14px] leading-[1.5] font-montserrat"
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
