import React from "react";
import Feature from "../../components/feature/Feature";
import "./depInfo.css";
import deptInfo from "../../data/data_dept_info";

function DepInfo() {
  return (
    <section className="whatGpt_container">
      <div className="whatGpt_container-content ">
        <Feature
          heading={"Why IUB ?"}
          para={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </div>
      <div className="whatGpt_container-heading">
        <h1 className="whatGpt_container-gradient-text">
          The possibilities are beyond your imagination
        </h1>
      </div>
      <div className="whatGpt_container-3feachers">
        {deptInfo.map((items) => {
          return (
            <Feature
              image_url={items.image}
              heading={items.heading}
              para={items.para}
            />
          );
        })}

        {/* <Feature
          title={"Chatbots"}
          para={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          }
        />
        <Feature
          title={"Knowledgebase"}
          para={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
          // img={
          //   "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          // }
        />
        <Feature
          title={"Education"}
          para={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
          // img={
          //   "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          // }
        /> */}
      </div>
    </section>
  );
}

export default DepInfo;
