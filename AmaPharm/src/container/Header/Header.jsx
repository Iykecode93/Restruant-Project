import React from "react";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Your Bridge to Better Health" />
      <h1 className="app__header-h1">Prescriptions with No Hesitation</h1>
      <div className="app__wrapper_links">
        <div className="app__wrapper_link1">
          <a href="/">
            Upload Prescriptions
          </a>
        </div>
        <div className="app__wrapper_link2">
          <a href="/">
            Consultation
          </a>
        </div>
      </div>
    </div>

    <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
