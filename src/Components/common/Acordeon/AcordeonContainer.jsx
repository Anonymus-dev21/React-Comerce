import { Acordeon } from "./Acordeon";
import { useState } from "react";
export const AcordeonContainer = ({ titulo, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Acordeon
      isOpen={isOpen}
      handleToggle={handleToggle}
      titulo={titulo}
      desc={desc}
    />
  );
};
