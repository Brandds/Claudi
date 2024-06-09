import React from "react";
import "../css/telainicial.css";
import { BsBrowserChrome } from "react-icons/bs";
import { IoIosGlobe } from "react-icons/io";
import { Link } from "react-router-dom";

export function Logo(props) {
  return (
    <div id="Logo">
      <p className="icon">{props.children}</p>
      <p className="logo-Title">{props.text}</p>
      <p className="icon">{props.children}</p>
    </div>
  );
}

export function Children1(props) {
  return (
    <section className="section">
      <Link to={props.andress} className="">
        {props.children}
      </Link>
    </section>
  );
}

export function HeaderDetalhes(props) {
  return (
    <header id="header">
      <span className="header-Logo">{props.children}</span>
      <p className="header-Detalhes">
        <ul className="header-Ul">
          <p className="ul-Frase">CASA CLAUD </p>
          <li className="ul-Frase">Café, Decor & Mesa Posta</li>
        </ul>
      </p>
      <p className="header-URL">@casa_claud</p>
      <p className="header-Icons">
        <BsBrowserChrome style={{ fontSize: "2rem" }}></BsBrowserChrome>
        <IoIosGlobe style={{ fontSize: "2rem" }}></IoIosGlobe>
      </p>
    </header>
  );
}

export function Button(props) {
  return <button className="button-Link">{props.text}</button>;
}
