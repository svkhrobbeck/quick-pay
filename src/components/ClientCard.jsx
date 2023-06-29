const ClientCard = ({ logo }) => {
  return (
    <div className={`max-w-[100px] md:max-w-[140px] lg:max-w-[220px]`}>
      <img className="w-full h-auto object-contain" src={logo} alt="client logo" />
    </div>
  );
};

export default ClientCard;
