import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";
import Card from "./profilecard/Card";
import Skils from "./Skils/Skils";
import Projects from "./Projects/Projects";
import Sourcesode from "./Sourcesode/Sourcesode";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} exect />
        <Route path="/mesaage" element={<ContactForm />} exect />
        <Route path="/skils" element={<Skils />} exect />
        <Route path="/projects" element={<Projects />} exect />
        <Route path="/source-code" element={<Sourcesode />} exect />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
