import React from "react";
import "./Skils.css";
import { Link } from "react-router-dom";

import portfolioimage from "../../images/person/jitendra1.png";
import reacticon from "../../images/logos/technologies/atom.png";
import bootstrap from "../../images/logos/technologies/bootstrap.png";
import css from "../../images/logos/technologies/css-3.png";
import html from "../../images/logos/technologies/html-5.png";
import hubspot from "../../images/logos/technologies/hubspot.png";
import js from "../../images/logos/technologies/js.png";
import wordpress from "../../images/logos/technologies/wordpress.png";

const Data = [
  {
    img: html,
    name: "html 5",
  },
  {
    img: css,
    name: "css 3",
  },
  {
    img: js,
    name: "java script",
  },
  {
    img: bootstrap,
    name: "bootstrap",
  },
  {
    img: wordpress,
    name: "wordpress",
  },
  {
    img: reacticon,
    name: "react",
  },
  {
    img: hubspot,
    name: "hubspot",
  },
];
const Skils = () => {
  return (
    <div className="card-wrapper">
      {/* Home Btn */}
      <div className="homelogo-container">
        <Link to={"/"}>
          <img src={portfolioimage} alt="Home" />
        </Link>
      </div>
      {/* Content area */}
      <div className="card-content">
        <div className="information-container mb-4">
          <h1>skils</h1>
        </div>
        <div className="row justify-content-center">
          {Data.map((items) => (
            <div className="col-lg-4 col-md-4 col-6 p-0">
              <div className="skilwrapper">
                <div className="skilimgwrapper">
                  <img src={items.img} alt="" />
                </div>
                <div className="skilname">
                  <h3>{items.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* buttons */}
      <div className="buttons-wrapper mt-5">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <Link className="info-btn1" to={"/mesaage"}>
              send message
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <Link className="info-btn2" to={"/projects"}>
              projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
