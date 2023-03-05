import React from "react";
import "./feature.css";

function Feature({ heading, para, image_url }) {
  return (
    <section className="whatGpt_feachers-container">
      <div className="whatGpt_feachers-containers_heading">
        <div />
        <img className="feature-section-image" src={image_url} alt="" />
        <h1>{heading}</h1>
      </div>
      <div className="whatGpt_feachers-containera_text">
        <p>{para}</p>
      </div>
    </section>
  );
}
export default Feature;
