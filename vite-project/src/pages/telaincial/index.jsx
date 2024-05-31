import React from "react";
import { HeaderDetalhes, Logo } from "../../componentes/telainicial";
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
    </div>
  );
}
