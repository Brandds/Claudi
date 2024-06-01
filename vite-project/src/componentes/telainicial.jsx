import React from "react";
import "../css/telainicial.css";
import { BsBrowserChrome } from "react-icons/bs";
import { IoIosGlobe } from "react-icons/io";
import { Link } from "react-router-dom";

export function Logo(props) {
  return (
    <div id="Logo">
      <p className="icon">{props.children}</p>
      <p>{props.text}</p>
      <p className="icon">{props.children}</p>
    </div>
  );
}

const ParentPai = ({ children }) => {
  return <div className="">{children}</div>;
};
const Children1 = (props) => {
  <Link to="/" className="link">
    {props.children}
  </Link>;
};
const Children2 = (props) => {
  <Link to="" className="link">
    {props.children}
  </Link>;
};
const Children3 = (props) => {
  <Link to="" className="link">
    {props.children}
  </Link>;
};
const Children4 = (props) => {
  <Link to="" className="link"></Link>;
};

export function HeaderDetalhes(props) {
  return (
    <header id="header">
      <p className="header-Logo">{props.children}</p>
      <p className="header-Detalhes">
        <ul className="header-Ul">
          <p className="ul-Frase">CASA CLAUD </p>
          <li className="ul-Frase">Café, Decor & Mesa Posta</li>
        </ul>
      </p>
      <p className="header-URL">@casa_claud</p>
      <p className="header-Icons">
        <BsBrowserChrome></BsBrowserChrome>
        <IoIosGlobe></IoIosGlobe>
      </p>
    </header>
  );
}

export function Button(props) {
  return <button className="button-Link">{props.text}</button>;
}
