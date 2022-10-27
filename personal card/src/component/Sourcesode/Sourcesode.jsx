import React from "react";
import { Link } from "react-router-dom";
import "./Sourcesode.css";

// images
import portfolioimage from "../../images/person/jitendra1.png";
import resumeicon from "../../images/logos/socialmedia/resumeicon.jpg";
//
import card from "./personalcard.zip";

const Sourcesode = () => {
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
        <div className="resumearea">
          <div className="resumeicon">
            <img src={resumeicon} alt="" />
          </div>
          <div className="d-flex justify-content-center align-content-center mt-4 download-btn">
            <a href={card} download>
              <button>Click to Download</button>
            </a>
          </div>
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
            <Link className="info-btn2" to={"/"}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sourcesode;
