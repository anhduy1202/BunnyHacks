import React from "react";

interface EggsProps {
  src: string;
  custom: string;
  id: string;
}
const Eggs: React.FC<EggsProps> = ({ src, custom, id }) => {
  return (
    <img id={id} className={`${custom}`} src={`/${src}.svg`} alt="bunny egg" />
  );
};

export default Eggs;
