import React, { useState } from "react";
import "./hod.css";
import data from "../../data/data_hod";
function Hod() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div className="section-hod-animation section_padding">
        <h1 className="h1">
          <span>always be</span>
          <div class="message">
            <div class="word1">close</div>
            <div class="word2">code</div>
            <div class="word3">creating</div>
          </div>
        </h1>
      </div>

      <section className="section_padding section-hod">
        {people.map((item) => {
          const { id, image, name, title } = item;
          return (
            <>
              <div className="section-hod-content" key={id}>
                <div className="section-hod-img">
                  <img src={image} alt="" />
                </div>
                <div className="content">
                  <p>{title}</p>
                  <h3>
                    <a href="#">{name}</a>
                  </h3>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default Hod;
