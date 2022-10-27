import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
import portfolioimage from "../../images/person/jitendra2.jpg";

const submit = (e) => {
  e.preventDefault();

  document.getElementById("contect-form").innerHTML = `
    <div class="form-submit-message">
      <h1>Message Send Successfully🎉🎉 </h1>
    </div>
    <div class="home-btn buttons-wrapper">
    <a class="px-5 info-btn1" href="/">Home</a>
    </div>
    `;
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="card-wrapper">
        {/* Home Btn */}
        <div className="homelogo-container">
          <Link to={"/"}>
            <img src={portfolioimage} alt="Home" />
          </Link>
        </div>
        {/* Content area */}
        <div className="card-content">
          <div id="contect-form" className="formwrapper">
            <div className="information-container">
              <h1>contect me:</h1>
            </div>
            <form onSubmit={submit}>
              <input
                required
                placeholder="Email"
                value={email}
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <textarea
                required
                placeholder="Message"
                value={message}
                type="text"
                onChange={(event) => setMessage(event.target.value)}
              />
              <br />
              <button className="formsubmibtn" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
