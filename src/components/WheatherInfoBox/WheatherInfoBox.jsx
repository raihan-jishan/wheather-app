/* eslint-disable react/prop-types */
const WheatherInfoBox = ({
  icon,
  WheatherData,
  details,
  backgroundColor,
  textColor,
  option
}) => {
  return (
    <div>
      {" "}
      <div
        className={`max-w-sm font-bold p-6  text-4xl ${backgroundColor}  ${textColor} rounded-tl-3xl rounded-br-3xl text-black max-lg:text-6xl max-lg:text-center max-lg:gap-0 gap-2`}
      >
        <i className={icon}></i> {WheatherData}  {option}
        <a href="#">
          <h5 className="mb-2 text-3xl font-bold tracking-tight gap-2 max-lg:text-4xl">
            {details}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default WheatherInfoBox;
