import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ai from "../../assets/ai.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function hd_slider() {
  return (
    <>
      <Carousel responsive={responsive}>
        <div>
          <h1>afhaiudfh</h1>
          <img src={ai} alt="image" />
        </div>
      </Carousel>
    </>
  );
}

export default hd_slider;
