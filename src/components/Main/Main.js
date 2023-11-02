import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Footer from "../Footer/Footer.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Header from "../Header/Header.js";
import { useState } from "react";

export default function Main({ isAuthorized, onBurgerClick, isMovies }) {
  return (
    <div className="main">
      <Header
        isAuthorized={isAuthorized}
        onBurgerClick={onBurgerClick}
        isMovies={isMovies}
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
