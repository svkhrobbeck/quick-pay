import * as React from "react";

interface IProps {
  logo: string;
}

const ClientCard: React.FC<IProps> = ({ logo }): JSX.Element => {
  return (
    <div className="max-w-[80px] md:max-w-[120px] lg:max-w-[160px]">
      <img className="w-full h-auto object-contain" src={logo} alt="client logo" />
    </div>
  );
};

export default ClientCard;
