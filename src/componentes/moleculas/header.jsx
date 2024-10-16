    import styled from "styled-components";
    export function Header() {
      return (
        <Container>
            <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="./assets/img/Avatar-Logo.png" className="nav__logo-img" alt="Logo" />
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Actores
              </a>
            </li>
            <li className="nav__item">
              <a href="#trick" className="nav__link">
                Reparto
              </a>
            </li>
            <li className="nav__item">
              <a href="#new" className="nav__link">
                Acerca de
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Login
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
        </Container>
      );
    }
    const Container = styled.div`

    `;
    