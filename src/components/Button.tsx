import * as React from "react";
import cx from "classnames";

interface IProps {
  children: string;
  className?: string;
}

const Button: React.FC<IProps> = ({ children, className = "" }): JSX.Element => {
  return (
    <button
      className={cx(
        "py-2 px-5 flex font-montserrat font-medium text-[16px] bg-gradient-light-blue rounded-lg outline-none",
        className
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
