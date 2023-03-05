import React from "react";
import "./News_info.css";
import { RiMapPinTimeLine } from "react-icons/ri";

function News_info(props) {
  return (
    <section key={props.id}>
      <div className="card">
        <img className="product--image" src={props.url} alt="product image" />
        <div className="card-subSection">
          <h6>
            <span>
              {" "}
              <RiMapPinTimeLine />
            </span>
            {props.date}
          </h6>
          <h2>{props.heading}</h2>
          <p className="pa">{props.disc}</p>

          <button>Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default News_info;
