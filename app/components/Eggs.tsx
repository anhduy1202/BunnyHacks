import React from "react";

interface EggsProps {
  custom: string;
  id: string;
}
const Eggs: React.FC<EggsProps> = ({ custom, id }) => {
  return <img id={id} className={`${custom}`} src="/egg.svg" alt="bunny egg" />;
};

export default Eggs;
