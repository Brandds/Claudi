import React from "react";
import {
  HeaderDetalhes,
  Logo,
  Children1,
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
      <Children1 andress="telaprincipal">
        <Button text="PROMOÇÃO"></Button>
      </Children1>
      <Children1 andress="telaprincipal">
        <Button text="SITE"></Button>
      </Children1>
      <Children1 andress="telaprincipal">
        <Button text="GRUPO"></Button>
      </Children1>
      <Children1 andress="telaprincipal">
        <Button text="LOJINHA"></Button>
      </Children1>
    </div>
  );
}
