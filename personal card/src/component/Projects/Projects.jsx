import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

// images
import portfolioimage from "../../images/person/jitendra1.png";
import interact from "../../images/logos/companylogo/interact.svg";
import lakebrains from "../../images/logos/companylogo/lakebrains.svg";
import savekar from "../../images/logos/companylogo/savekar.svg";
import pratapghad from "../../images/logos/companylogo/pratapghad.png";

const Projects = () => {
  const Data = [
    {
      img: interact,
      com: "Interact",
      link: "https://www.interactpro.ai/",
      tech: "hubspot",
    },
    {
      img: lakebrains,
      com: "Lakebrains Technologies",
      link: "https://lakebrains.com/",
      tech: "react, node",
    },
    {
      img: savekar,
      com: "savekar",
      link: "https://savekar.com/",
      tech: "react, node",
    },
    {
      img: pratapghad,
      com: "pratapghadhing",
      link: "http://pratapgadhhing.com/",
      tech: "html, css, js",
    },
  ];
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
          <h1>projects</h1>
        </div>
        <div className="row">
          {Data.map((items) => (
            <div className="col-lg-6 col-sm-12">
              <div className="project">
                <a href={items.link} target="_blank" rel="noopener noreferrer">
                  <div className="companylogo">
                    <img src={items.img} alt="" />
                  </div>
                  <div className="project-info">
                    <h1>{items.com}</h1>
                    <h2>technology: {items.tech}</h2>
                  </div>
                </a>
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
            <Link className="info-btn2" to={"/source-code"}>
              Souce Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
