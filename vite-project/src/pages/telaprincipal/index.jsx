import React, { useEffect } from "react";
import {
  LinkNavBar,
  DemoCarousel,
  Acordion,
} from "../../componentes/telaprincipal";
import { Logo } from "../../componentes/telainicial";
import { IoIosStarOutline } from "react-icons/io";

import "../telaprincipal/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".Icon");
      const offset = navbar.offsetTop;

      if (window.pageYOffset > offset) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="container">
      <div className="Icon">
        <Logo text="Claud">
          <IoIosStarOutline></IoIosStarOutline>
        </Logo>
        <LinkNavBar
          text1="BAZAR PERFEITO IMPERFEITO"
          text2="MESA E COZINHA"
          text3="KITS E CONJUNTINHOS"
          text4="CAFÊS E CAPPUCCINOS"
          text5="PARA PRESENTEAR"
          text6="LANÇAMENTOS"
          text7="PERSONALIZÁVEIS"
          text8="TÁ NA PROMO"
        ></LinkNavBar>
      </div>

      <section id="section-Principal">
        <DemoCarousel></DemoCarousel>
      </section>
      <Acordion></Acordion>
    </div>
  );
}
