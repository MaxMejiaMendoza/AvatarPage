import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal"; 
import svgburbuja from "../assets/burbuja.svg"
import svgburbujasecun from "../assets/burbujasecun.svg"

import avatarlogo from "../assets/Avatar-Logo.png"

import avaaa from "../assets/avaaa.png"

import act01 from "../assets/act01.jpg"
import act02 from "../assets/act02.png"
import act03 from "../assets/act03.jpeg"
import act04 from "../assets/act04.png"

import gg002 from "../assets/gg002.png"
import gg003 from "../assets/gg003.png"

import 'boxicons/css/boxicons.min.css';
import { useNavigate } from "react-router-dom";





export function Home() {


    const navigate = useNavigate();

    const manejarReserva = () => {
      navigate('/reservapage');
    };


  useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    const navLinks = document.querySelectorAll(".nav__link");
    const linkAction = () => {
      navMenu.classList.remove("show-menu");
    };

    navLinks.forEach((item) => item.addEventListener("click", linkAction));

    
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.button, .newsletter__container`);
    sr.reveal(`.category__data, .footer__content`, { interval: 100 });
    sr.reveal(`.swiper-slide`, { origin: "left" });

    // SCROLL UP
    const scrollUp = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (window.scrollY >= 60) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", scrollUp);

    // Clean up event listeners on unmount
    return () => {
      navToggle && navToggle.removeEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
      navClose && navClose.removeEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
      navLinks.forEach((item) => item.removeEventListener("click", linkAction));
      window.removeEventListener("scroll", scrollUp);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <Container>
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={avatarlogo} className="nav__logo-img" alt="Logo" />
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

    <main className="main">
      <section className="home container" id="home">
        <div className="swiper home-swiper">
          <div className="swiper-wrapper">
            <section className="swiper-slide">
              <div className="home__content grid">
                <article className="content_burbuja">
                  <img className="box" src={avaaa} alt="Avatar" />
                  <div className="blob">
                    <img src={svgburbuja} alt="Burbuja" />
                  </div>
                  <div className="blob">
                    <img src={svgburbujasecun} alt="Burbuja Secundaria" />
                  </div>
                </article>
                <div className="home__data">
                  <h3 className="home__subtitle">#La película</h3>
                  <h1 className="home__title">
                    AVATAR <br />
                    <span className="subtittle">The Way of Water</span> <br /><br />
                    !!!
                  </h1>
                  <p className="home__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit
                    exercitationem, similique, amet, ducimus temporibus cupiditate magnam nisi
                    quidem quas itaque doloribus molestias dicta delectus doloremque ab voluptates
                    vero perspiciatis.
                  </p>
                  <div className="home__buttons">
                    <a onClick={manejarReserva} className="button">Reservar ahora</a>
                    <a href="#" className="button--link button--flex">
                      trailer
                      <i className="bx bx-right-arrow-alt button__icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section category" id="about">
        <h2 className="section__title">Actores</h2>
        <div className="category__container container grid">
          <div className="category__data">
            <div className="contentImgCate">
              <img src={act03} className="category__img" alt="Sam Worthington" />
            </div>
            <h3 className="category__title">Sam Worthington</h3>
            <p className="category__description">Actor australiano-británico.</p>
          </div>
          <div className="category__data">
            <div className="contentImgCate">
              <img src={act02}className="category__img" alt="Zoe Saldaña" />
            </div>
            <h3 className="category__title">Zoe Saldaña</h3>
            <p className="category__description">
              Actriz y modelo estadounidense de origen dominicano y puertorriqueño.
            </p>
          </div>
          <div className="category__data">
            <div className="contentImgCate">
              <img src={act04} className="category__img" alt="Stephen Lang" />
            </div>
            <h3 className="category__title">Stephen Lang</h3>
            <p className="category__description">Stephen Lang es un actor estadounidense.</p>
          </div>
        </div>
      </section>

      <section className="section newsletter" id="new">
        <div className="newsletter__container container">
          <h2 className="section__title">Nuestro boletín</h2>
          <p className="newsletter__description">
            Promoción de nuevos productos y ventas. Directamente a su bandeja de entrada.
          </p>
          <form className="newsletter__form">
            <input
              type="text"
              placeholder="Introduce tu correo electrónico"
              className="newsletter__input"
            />
            <button type="submit" className="button">Subscribirse</button>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer section">
      <div className="footer__container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <img src={avatarlogo} className="footer__logo-img" alt="Logo" />
          </a>
          <p className="footer__description">
            Avatar <br />
            The way of water.
          </p>
          <div className="footer__social">
            <a className="footer__social-link" href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a className="footer__social-link" href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a className="footer__social-link" href="#">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Acerca de</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Soporte</a>
            </li>
            <li>
              <a href="#" className="footer__link">Características</a>
            </li>
            <li>
              <a href="#" className="footer__link">Nuevos</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Nuestros servicios</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Precios</a>
            </li>
            <li>
              <a href="#" className="footer__link">Descuentos</a>
            </li>
            <li>
              <a href="#" className="footer__link">Modo de envio</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Nuestra compañía</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Blog</a>
            </li>
            <li>
              <a href="#" className="footer__link">Sobre nosotras</a>
            </li>
            <li>
              <a href="#" className="footer__link">Nuestra misión</a>
            </li>
          </ul>
        </div>

        <img src={gg002} className="footer__img-one" alt="Imagen decorativa 1" />
        <img src={gg003} className="footer__img-two" alt="Imagen decorativa 2" />
      </div>
      <span className="footer__copy">&#169; Avatar page</span>
    </footer>
    <a href="#" className="scrollup" id="scroll-up">
      <i className="bx bx-up-arrow-alt scrollup__icon"></i>
    </a>
  </Container>
);
   
}

const Container = styled.div`


  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background: var(--body-color);
  color: var(--text-color);
  transition: 0.3s;




ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

button,
input {
  border: none;
  outline: none;
}

button {
  cursor: pointer;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

html {
  scroll-behavior: smooth;
}

.section {
  padding: 4.5rem 0 2rem;
}

.section__title {
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-2);
  text-align: center;
}

.container {
  max-width: 968px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
}

.grid {
  display: grid;
}

.main {
  overflow: hidden;
}

.button {
  display: inline-block;
  background-color: var(--first-color);
  color: var(--title-color);
  padding: 1rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  transition: 0.3s;
}
.button:hover {
  background-color: var(--first-color-alt);
}

.header {
  width: 100%;
  background: var(--body-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
}

.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo {
  display: flex;
  align-items: center;
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}
.nav__logo-img {
  width: 5rem;
}
.nav__toggle {
  font-size: 1.25rem;
  cursor: pointer;
}
.nav__close {
  font-size: 1.8rem;
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  cursor: pointer;
}
.nav__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
}
.nav__link {
  text-transform: uppercase;
  font-weight: var(--font-black);
  transition: 0.4s;
}
.nav__link:hover {
  color: var(--text-color);
}
.nav__link, .nav__logo, .nav__toggle, .nav__close {
  color: var(--title-color);
}

@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    width: 100%;
    background: var(--container-color);
    top: -150%;
    left: 0;
    padding: 3.5rem 0;
    transition: 0.4s;
    z-index: var(--z-fixed);
    border-radius: 0 0 1.5rem 1.5rem;
  }
}
.show-menu {
  top: 0;
}

.swiper-slide .home__content {
  row-gap: 1rem;
  padding-top: 3rem;
}
.swiper-slide .home__content .content_burbuja {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}
.swiper-slide .home__content .content_burbuja .blob {
  position: absolute;
  width: 500px;
  height: 500px;
}
.swiper-slide .home__content .content_burbuja .blob:nth-child(2) {
  filter: blur(20px);
}

.subtittle{
  font-size: 45px;
  font-weight: 100;
}

.swiper-slide .home__content .content_burbuja .box {
  position: absolute;
  width: 30%;
  z-index: 100;
  width: 500px;
  height: 400px;
  -o-object-fit: cover;
     object-fit: cover;
  background-size: 200%;
  background-position: center center;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: 100px;
  transition: all 0.8s ease-in-out;
  animation: forma 10s ease-in-out infinite both alternate;
}

.home__data{
    display: flex;
    flex-direction: column;
    gap: 10px;


}


.swiper-slide .home__content .home__data .home__subtitle {
  font-size: var(--h3-font-size);
  text-transform: uppercase;
  margin-bottom: var(--mb-0-5);
}
.swiper-slide .home__content .home__data .home__title {
  font-size: var(--biggest-font-size);
  font-weight: var(--font-black);
  line-height: 109%;
  margin-bottom: var(--mb-0-25);
}
.swiper-slide .home__content .home__data .home__description {
  margin-bottom: var(--mb-1);
}
.swiper-slide .home__content .home__data .home__buttons {
  display: flex;
  justify-content: space-between;
}
.swiper-slide .home__content .home__data .home__buttons .button {
  display: inline-block;
  background-color: var(--first-color);
  color: var(--title-color);
  padding: 1rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  transition: 0.3s;
}
.swiper-slide .home__content .home__data .home__buttons .button:hover {
  background-color: var(--first-color-alt);
}
.swiper-slide .home__content .home__data .home__buttons .button__icon {
  font-size: 1.25rem;
}
.swiper-slide .home__content .home__data .home__buttons .button--link {
  color: var(--title-color);
}
.swiper-slide .home__content .home__data .home__buttons .button--flex {
  display: inline-flex;
  align-items: center;
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}

@keyframes forma {
  0% {
    border-radius: 30% 70% 70% 30%/30% 35% 65% 70%;
  }
  20% {
    border-radius: 52% 48% 51% 49%/66% 54% 46% 34%;
  }
  40% {
    border-radius: 66% 34% 32% 68%/35% 64% 36% 65%;
  }
  60% {
    border-radius: 42% 58% 70% 30%/68% 34% 66% 32%;
  }
  80% {
    border-radius: 55% 45% 42% 58%/38% 70% 30% 62%;
  }
  100% {
    border-radius: 30% 70% 70% 30%/30% 35% 65% 70%;
  }
}
.category__container {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 2rem;
}
.category__container .category__data {
  text-align: center;
}
.category__container .category__data .contentImgCate {
  display: flex;
  overflow: hidden;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  border: 6px solid;
}

.newsletter__description {
  text-align: center;
  margin-bottom: var(--mb-1-5);
}

.newsletter__form {
  background: var(--container-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.75rem;
}
.newsletter__form .newsletter__input {
  width: 70%;
  padding: 0 0.5rem;
  background: none;
  color: var(--title-color);
}
.newsletter__form .newsletter__input::-moz-placeholder {
  color: #cecdcd;
}
.newsletter__form .newsletter__input::placeholder {
  color: #cecdcd;
}

.footer {
  position: relative;
  overflow: hidden;
  padding-left: 2rem;
}
.footer .footer__img-one,
.footer .footer__img-two {
  position: absolute;
  transition: 0.3s;
  animation: floating 2s ease-in-out infinite;
}
.footer .footer__img-one {
  width: 100px;
  top: 6rem;
  right: -2rem;
}
.footer .footer__img-two {
  width: 150px;
  bottom: 4rem;
  right: 4rem;
}
.footer .footer__img-one:hover,
.footer .footer__img-two:hover {
  transform: translateY(-0.5rem);
}
.footer .footer__container {
  row-gap: 2rem;
}
.footer .footer__container .footer__content .footer__logo {
  display: flex;
  align-items: center;
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
  color: var(--title-color);
}
.footer .footer__container .footer__content .footer__logo-img {
  width: 20px;
}
.footer .footer__container .footer__content .footer__description {
  margin-bottom: var(--mb-2-5);
}
.footer .footer__container .footer__content .footer__social {
  display: flex;
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}
.footer .footer__container .footer__content .footer__social-link {
  display: inline-flex;
  background: var(--container-color);
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: var(--title-color);
  font-size: 1rem;
}
.footer .footer__container .footer__content .footer__social-link:hover {
  background: var(--body-color);
}
.footer .footer__container .footer__content .footer__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
}
.footer .footer__container .footer__content .footer__links {
  display: grid;
  row-gap: 0.35rem;
}
.footer .footer__container .footer__content .footer__links .footer__link {
  font-size: var(--small-font-size);
  color: var(--text-color);
  transition: 0.3s;
}
.footer .footer__container .footer__content .footer__links .footer__link:hover {
  color: var(--title-color);
}

.footer__copy {
  display: block;
  text-align: center;
  font-size: var(--smaller-font-size);
  margin-top: 4.5rem;
}

@media screen and (max-width: 320px) {
  .container {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  .home__buttons {
    flex-direction: column;
    width: -moz-max-content;
    width: max-content;
  }
  .category__container {
    grid-template-columns: 0.8fr;
    justify-content: center;
  }
}
@media screen and (min-width: 576px) {
  .newsletter__container {
    display: grid;
    grid-template-columns: 0.7fr;
    justify-content: center;
  }
  .newsletter__description {
    padding: 0 3rem;
  }
}
@media screen and (min-width: 767px) {
  .section {
    padding: 7rem 0 2rem;
  }
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav__close,
  .nav__toggle {
    display: none;
  }
  .nav__list {
    flex-direction: row;
    -moz-column-gap: 3rem;
         column-gap: 3rem;
  }
  .nav__link {
    text-transform: initial;
    font-weight: initial;
  }
  .home__content {
    padding: 8rem 0 2rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  .category__container {
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
  }
  .newsletter__container {
    grid-template-columns: 0.5fr;
  }
  .footer__container {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    -moz-column-gap: 1rem;
         column-gap: 1rem;
  }
  .footer__img-two {
    right: initial;
    bottom: 0;
    left: 15%;
  }
}
@media screen and (min-width: 992px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
  .section__title {
    font-size: var(--h1-font-size);
    margin-bottom: 3rem;
  }
  .home__content {
    padding-top: 0;
  }
  .home__title {
    margin-bottom: var(--mb-1-5);

  }
  .home__description {
   font-size: var(--normal-font-size);
   font-weight: var(--font-medium);
    margin-bottom: var(--mb-2-5);
    padding-right: 2rem;
  }
  .category__container {
    -moz-column-gap: 8rem;
         column-gap: 8rem;
  }
  .footer__copy {
    margin-top: 6rem;
  }
}
@media screen and (min-width: 992px) {
  :root {
    --biggest-font-size: 4rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}
@media screen and (min-width: 1200px) {
  .footer__img-one {
    width: 120px;
  }
  .footer__img-two {
    width: 180px;
    top: 30%;
    left: -1%;
  }
}
.scrollup {
  position: fixed;
  background: var(--container-color);
  right: 1rem;
  bottom: -20%;
  display: inline-flex;
  padding: 0.3rem;
  border-radius: 0.25rem;
  z-index: var(--z-tooltip);
  opacity: 0.8;
  transition: 0.4s;
}
.scrollup .scrollup__icon {
  font-size: 1.25rem;
  color: var(--title-color);
}
.scrollup:hover {
  background: var(--container-color);
  opacity: 1;
}

.show-scroll {
  bottom: 3rem;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0px);
  }
}

`;
