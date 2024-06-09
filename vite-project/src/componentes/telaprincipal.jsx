import { Link } from "react-router-dom";
import "../css/telaprincipal.css";
import Imagem1 from "../imgs/imagem1.jpeg";
import Imagem2 from "../imgs/imagem2.jpeg";
import Imagem3 from "../imgs/imagem3.jpeg";

import React, { Component, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Accordion from "react-bootstrap/Accordion";
export function LinkNavBar(props) {
  return (
    <div className="link">
      <Link to="" className="link-Link">
        {props.text1}
      </Link>
      <Link to="" className="link-Link">
        {props.text2}
      </Link>
      <Link to="" className="link-Link">
        {props.text3}
      </Link>
      <Link to="" className="link-Link">
        {props.text4}
      </Link>
      <Link to="" className="link-Link">
        {props.text5}
      </Link>
      <Link to="" className="link-Link">
        {props.text6}
      </Link>
      <Link to="" className="link-Link">
        {props.text7}
      </Link>
      <Link to="" className="link-Link">
        {props.text8}
      </Link>
    </div>
  );
}

export class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div className="teste">
          <img className="imagem-Carrousel" src={Imagem1} />
        </div>
        <div className="teste">
          <img className="imagem-Carrousel" src={Imagem2} />
        </div>
        <div className="teste">
          <img className="imagem-Carrousel" src={Imagem3} />
        </div>
        <div className="teste">
          <img className="imagem-Carrousel" src={Imagem3} />
        </div>
        <div className="teste">
          <img className="imagem-Carrousel" src={Imagem3} />
        </div>
        <div className="teste">
          <img className="imagem-Carrousel" src={Imagem3} />
        </div>
        <div className="teste">
          <img className="imagem-Carrousel" src={Imagem3} />
        </div>
      </Carousel>
    );
  }
}

export function Acordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
