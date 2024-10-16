import styled from "styled-components";
import { BotonRedondeado } from "../Atomos/BotonRedondeado";
import { DropdownSelect } from "../Atomos/DropdownSelect";
export function Main() {


  return (
    <Container>
      <div className="portadacontainer">
        <div className="topcontainer"></div>
        <div className="container001">
          <h1>CP Arequipa Mall Plaza</h1>
          <BotonRedondeado />
        </div>

        <div className="container001">
          <div>
            <li className="link">
              <a href="/Películas">Horarios</a>
            </li>
          </div>
          <div className="listcontainer">
            <DropdownSelect />
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 33%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .listcontainer {
    margin-bottom: -20px;
  }

  .link {
    margin-top: 15px;
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    text-align: center;

    a {
      margin-bottom: 50px;
      font-family: "Lato", sans-serif;
      color: #000000;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s ease, width 0.3s ease;
      font-weight: 600;
      border-bottom: 3px solid red;
      width: 62px;
      padding-bottom: 5px;

      &:hover {
        width: 50px;
      }
    }
  }

  .portadacontainer {
    width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 40px;

    .container001 {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .topcontainer {
      height: 80px;
    }

    h1 {
      justify-content: left;
      font-size: 50px;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      color: #004a8c;
    }
  }
`;
