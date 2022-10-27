import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

// images
import portfolioimage from "../../images/person/jitendra1.png";
import gmail from "../../images/logos/socialmedia/gmail.png";
import instagram from "../../images/logos/socialmedia/instagram.png";
import linkedin from "../../images/logos/socialmedia/linkedin.png";
import skype from "../../images/logos/socialmedia/skype.png";
import github from "../../images/logos/socialmedia/github.png";

const Data = [
  {
    icon: linkedin,
    url: "https://www.linkedin.com/in/jitendrasinghrao/git",
  },
  {
    icon: gmail,
    url: "mailto:jrao9587@gmail.com",
  },
  {
    icon: github,
    url: "https://github.com/JitendraSingh9587",
  },
  {
    icon: instagram,
    url: "https://www.instagram.com/jitendra_singh_boyana/",
  },
  {
    icon: skype,
    url: "https://join.skype.com/invite/v0Yw0Iy4IXNY",
  },
];
const Card = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-content">
          {/* Genral info */}
          <div className="heading-wrapper">
            <div className="portfolio-image">
              <img src={portfolioimage} alt="" />
            </div>
            <div className="information-container">
              <h1>Jitendra Singh Rao</h1>
              <h3>Web Devloper</h3>
            </div>
          </div>
          {/* Social media */}
          <div className="social-media-wrapper mt-4">
            {/* <h2>social media</h2> */}
            <div className="row">
              {Data.map((items) => {
                return (
                  <div className="col">
                    <div className="social-links">
                      <a
                        href={items.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={items.icon} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
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
                <Link className="info-btn2" to={"/skils"}>
                  skils
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
