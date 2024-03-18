import React from "react";

interface CloudProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const Cloud: React.FC<CloudProps> = (props) => {
  const {
    top = "top-0",
    right = "right-0",
    bottom = "bottom-0",
    left = "left-0",
  } = props;
  return (
    <img
      id="cloud"
      src="/cloud.svg"
      alt="cloud"
      className={`absolute ${top} ${right} ${bottom} ${left} md:w-36 h:w-36 w-24 h-24`}
    ></img>
  );
};

export default Cloud;
