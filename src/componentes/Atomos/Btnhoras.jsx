import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PiArmchairThin } from "react-icons/pi";
import { LoaderCine } from "../../index";
import { useNavigate } from "react-router-dom";

export function Btnhoras({ hora, butacasDisponibles = 120 }) {

  const navigate = useNavigate();

  const elegirbutacas = () => {
    navigate('/pagebutacas');
  };



  const [isClicked, setIsClicked] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // Estado para mostrar el loader
  const [butacas, setButacas] = useState(null); // Estado para el número de butacas

  const handleIconClick = () => {
    setIsClicked(!isClicked); // Cambiar estado al hacer clic
    setShowLoader(true); // Mostrar loader inicialmente
    setButacas(null); // Resetear el número de butacas
  };

  useEffect(() => {
    if (isClicked) {
      // Después de 3 segundos, mostrar el número de butacas
      const timer = setTimeout(() => {
        setShowLoader(false);
        setButacas(butacasDisponibles); // Mostrar el número de butacas
      }, 1000);

      // Limpiar el temporizador si el componente se desmonta o el estado cambia
      return () => clearTimeout(timer);
    }
  }, [isClicked, butacasDisponibles]);

  return (
    <ShowtimeSelector>
      <ShowtimeLink onClick={elegirbutacas}  >{hora || "02:30 pm"}</ShowtimeLink>
      <TriggerWrapper isClicked={isClicked} onClick={handleIconClick}>
        <IconWrapper>
          <PiArmchairThin />
        </IconWrapper>
        {isClicked && (
          <Tooltip>
            <div className="cargadorcine">
              {showLoader ? (
                <LoaderCine />
              ) : (
                <span className="numberbutacas" >{butacas}</span>
              )}
            </div>
            <Arrow />
            <span> butacas disponibles</span>
          </Tooltip>
        )}
      </TriggerWrapper>
    </ShowtimeSelector>
  );
}

const ShowtimeSelector = styled.div`
  background-color: #004a8c;
  cursor: default;
  box-sizing: inherit;
  border: solid 2px #004a8c;
  border-radius: 10px;
  color: #004a8c;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  height: 45px;
  width: 148px;
  margin: 0 0px 20px;
`;

const ShowtimeLink = styled.button`
  background-color: #fff;
  border-radius: 8px 0px 0px 8px;
  border: none;
  color: #004a8c;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  height: 100%;
  width: 65%;

`;

const TriggerWrapper = styled.div`
  position: relative;
  border-radius: 0px 8px 8px 0px;
  border-left: solid 1px #004a8c;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  background-color: ${(props) => (props.isClicked ? "#004a8c" : "white")};
  color: ${(props) => (props.isClicked ? "#ffffff" : "#004a8c")};
`;

const IconWrapper = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Tooltip = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 70px;
  top: -83px;
  background-color: #ffffff;
  color: #020202;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 11px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  z-index: 10;

  .numberbutacas{
    font-size: 32px;
    font-weight: 600;
    color: #00A87E;
  }

  .cargadorcine {
    height: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #ffffff;
`;
