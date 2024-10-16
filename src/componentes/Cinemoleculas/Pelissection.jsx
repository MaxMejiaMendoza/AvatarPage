import styled from "styled-components";
import { Btnhoras } from "../Atomos/Btnhoras";
import pelissection from "../../assets/avatarflyer.png";
import { BsBadge3D } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function Pelissection() {



  const movies = [
    {
      id: "guason-2-folie-a-deux",
      title: "Guasón 2: Folie À Deux",
      genre: "Drama",
      duration: "2h 30min",
      rating: "+14",
      imageUrl:
        "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002037?referenceScheme=HeadOffice&allowPlaceHolder=true",
      showtimes: [
        "05:30 pm",
        "06:30 pm",
        "07:30 pm",
        "08:30 pm",
        "09:30 pm",
        "10:30 pm",
      ],
      restricted: true,
    },
  ];

  return (
    <Container>
      <div className="peliculascontainer">
        <div className="imgcontainer">
          <img src={pelissection} alt="Avatar 2" />
        </div>
        <div className="peliculadescript">
          <h2>Avatar: The Way of Water</h2>
          <p>Acción, 2h, +14.</p>
          <div className="despricconatiner">
            <StyledIcon />
            <span>REGULAR DOBLADA</span>
          </div>
          <div className="btnhorasbut">
          <Btnhoras  />
          </div>
        
        </div>
      </div>
    </Container>
  );
}
const StyledIcon = styled(BsBadge3D)`
  color: #000000; 
  font-size: 40px; 
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  .peliculascontainer {
    display: flex;

    margin-top: 50px;
    width: 1050px;
    height: 600px;

    .peliculadescript {
      margin-left: 20px;
      gap: 10px;
.btnhorasbut{
  margin-top:16px;
}

      .despricconatiner {
        margin-top: 20px;
        display: flex;
        span {
          margin-top: 6px;
          margin-left: 10px;
          font-size: 18px;
          color:  #004A8C;
        }
      }

      h2 {
        color: #000;
      }
    }

    .imgcontainer {
      img {
        width: 400px;
      }
    }
  }
`;
