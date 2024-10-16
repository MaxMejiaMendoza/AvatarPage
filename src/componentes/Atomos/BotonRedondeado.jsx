import React from "react";
import styled from "styled-components";

export function BotonRedondeado() {
  return (
    <RoundedButton>
      <span className="cruz">+</span> 
      <span className="content">Información</span>
    </RoundedButton>
  );
}

const RoundedButton = styled.button`
  margin-top: 10px;
  background-color: transparent; 
  color: black; 
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; 
  height: 45px;
  width: 160px;
  gap: 10px;

  .content {
    margin-top: 2px;
  }

  .cruz {
    display: flex;
    height: 10px;
    font-size: 40px;
    margin-top: -18px;
    margin-left: -5px;
  }

  display: flex;
  flex-direction: row;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); 
  }

  &:focus {
    outline: none;
  }
`;


  