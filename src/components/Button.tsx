import * as React from "react";

interface IProps {
  children: string;
  styles?: string;
}

const Button: React.FC<IProps> = ({ children, styles = "" }): JSX.Element => {
  return (
    <button
      className={`py-3 px-6 flex font-montserrat font-medium text-[18px] bg-gradient-light-blue rounded-lg outline-none ${styles}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
