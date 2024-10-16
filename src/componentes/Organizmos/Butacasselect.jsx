import React, { useState } from "react";
import styled from "styled-components";

export function Butacasselect() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatIndex) => {
    if (selectedSeats.includes(seatIndex)) {
      setSelectedSeats(selectedSeats.filter((index) => index !== seatIndex));
    } else {
      setSelectedSeats([...selectedSeats, seatIndex]);
    }
  };

  const handleConfirm = () => {
    alert(`Has seleccionado ${selectedSeats.length} butaca(s).`);
  };

  const seats = [
    { id: 0, status: "available" },
    { id: 1, status: "available" },
    { id: 2, status: "occupied" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
    { id: 6, status: "occupied" },
    { id: 7, status: "available" },
    { id: 8, status: "available" },
    { id: 9, status: "available" }
  ];

  return (
    <Container>
      <div className="container">
        <h1>Selecciona tus butacas</h1>

        <div className="screen">Pantalla</div>

        <div className="seats-container">
          {seats.map((seat, index) => (
            <div
              key={seat.id}
              className={`seat ${seat.status} ${
                selectedSeats.includes(index) ? "selected" : ""
              }`}
              onClick={() =>
                seat.status === "available" && toggleSeatSelection(index)
              }
            ></div>
          ))}
        </div>

        <div className="legend">
          <div className="item">
            <div className="seat available"></div>
            <p>Disponible</p>
          </div>
          <div className="item">
            <div className="seat occupied"></div>
            <p>Ocupado</p>
          </div>
          <div className="item">
            <div className="seat selected"></div>
            <p>Seleccionado</p>
          </div>
        </div>

        <button onClick={handleConfirm}>Confirmar selección</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    width: 80%;
    max-width: 600px;
    text-align: center;
  }

  h1 {
    margin-bottom: 20px;
  }

  .screen {
    background-color: #333;
    height: 50px;
    width: 100%;
    margin-bottom: 20px;
    color: white;
    line-height: 50px;
    font-weight: bold;
  }

  .seats-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr); 
  }

  .seat {
    width: 30px;
    height: 30px;
    background-color: #ddd;
    margin: 5px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .seat.available {
    background-color: #6c6;
  }

  .seat.occupied {
    background-color: #f00;
    cursor: not-allowed;
  }

  .seat.selected {
    background-color: #ff0;
  }

  .seat:hover:not(.occupied) {
    background-color: #ddd;
  }

  .legend {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }

  .legend .item {
    display: flex;
    align-items: center;
  }

  .legend .item p {
    margin-left: 10px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #555;
  }
`;
