import React from "react";
import {
  HeaderDetalhes,
  Logo,
  Children1,
  Children2,
  Children3,
  Children4,
  Button,
} from "../../componentes/telainicial";
import "../telaincial/index.css";
import { IoIosStarOutline } from "react-icons/io";

export default function () {
  return (
    <div className="container">
      <HeaderDetalhes>
        <Logo text="Claud">
          <IoIosStarOutline></IoIosStarOutline>
        </Logo>
      </HeaderDetalhes>
      <article className="container-Artitcle">
        <Children1>
          <Button text="PROMOÇÃO"></Button>
        </Children1>
      </article>
      <article className="container-Artitcle">
        <Children2>
          <Button text="Produto"></Button>
        </Children2>
      </article>
      <article className="container-Artitcle">
        <Children3>
          <Button text="SITE"></Button>
        </Children3>
      </article>
      <article className="container-Artitcle">
        <Children4>
          <Button text="GRUPO"></Button>
        </Children4>
      </article>
    </div>
  );
}
