import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export function DropdownSelect() {
  const [selectedDate, setSelectedDate] = useState("2024-10-04T00:00:00");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value, event) => {
    setSelectedDate(value);
    setIsOpen(false); // Cierra el dropdown al seleccionar una opción
    event.stopPropagation(); // Detiene la propagación del evento de clic
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DropdownContainer isOpen={isOpen} onClick={toggleDropdown}>
      <TitleContainer>
        Fecha
        <IoIosArrowDown />
      </TitleContainer>
      <LabelContainer>
        {selectedDate === "2024-10-03T00:00:00"
          ? "Hoy Jueves 3"
          : selectedDate === "2024-10-04T00:00:00"
          ? "Mañana Viernes 4"
          : "Jueves 10"}
      </LabelContainer>
      {isOpen && (
        <OptionsContainer>
          <Option onClick={(e) => handleChange("2024-10-03T00:00:00", e)}>Hoy Jueves 3</Option>
          <Option onClick={(e) => handleChange("2024-10-04T00:00:00", e)}>Mañana Viernes 4</Option>
          <Option onClick={(e) => handleChange("2024-10-10T00:00:00", e)}>Jueves 10</Option>
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  cursor: pointer;
  background-color: white;
  box-sizing: inherit;
  padding: 20px;
  border-right: solid 1px #dedfe3;
  position: relative; /* Agregar posición relativa para el contenedor */
  min-width: 150px;
  width: ${(props) => (props.isOpen ? "200px" : "195px")}; /* Cambiar ancho según el estado */
  transition: width 0.3s ease, border 0.3s ease, border-radius 0.1s ease; 
  transition: border-color 0.3s ease;

  &:hover {
    border-radius: 5px;
    border: 2px solid black; 
  }
`;

const TitleContainer = styled.h3`
  margin: 0;
  color: #0d1f40;
  display: flex;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  margin-top: 10px;
  transition: color 0.3s ease; /* Transición suave para el texto */

  ${DropdownContainer}:hover & {
    color: black; /* Cambiar color del texto al hacer hover */
  }
`;

const OptionsContainer = styled.div`
  margin-top: 10px;
  border: 1px solid #dedfe3;
  border-radius: 4px;
  background-color: white;
  position: absolute; /* Esto asegura que el dropdown se superponga */
  z-index: 1; /* Asegura que el dropdown esté encima de otros elementos */
`;

const Option = styled.div`
  padding: 5px;
  font-size: 16px;
  color: #0d1f40;
  transition: background-color 0.3s ease; /* Transición suave para el fondo */

  &:hover {
    background-color: #f0f0f0; /* Cambiar el fondo al pasar el mouse */
  }
`;
