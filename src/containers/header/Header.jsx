import React from "react";
import "./header.css";
// import HdSlider from "../../components/header_slider/Hd_slider";
import ai from "../../assets/ai.png";
function Header() {
  return (
    <div className="header_container">
      <div className="header_container-content">
        <h2 className="uni_name">
          The <span className="gradient_text">Islamia University</span> Of
          Bahawalpur
        </h2>
        <h2 className="p">The Depertment of </h2>
        <h1 className="gradient_text">Software Enginerring</h1>

        <p>
          The Department of Software Enginerring offers BS and MS programs in
          Software Engineering. The BS in Artificial Intelligence program aims
          to train our graduates
        </p>

        <div className="header_container-input">
          <button type="submit">Enroll Now</button>
        </div>

        {/* <
        
*/}
      </div>
      <div className="header_container-img">
        <img src={ai} alt="image" />
      </div>
    </div>
  );
}

export default Header;
