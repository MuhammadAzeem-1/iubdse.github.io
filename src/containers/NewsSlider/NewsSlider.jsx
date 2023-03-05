import React from "react";
import "./newsSlider.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsInfo from "../../components/New_Info/News_info";
import { NewsData, responsive } from "../../data/data_news";
function NewsSlider() {
  const newsInfo = NewsData.map((item) => (
    <NewsInfo
      id={item.id}
      url={item.image_url}
      date={item.date}
      heading={item.Heading}
      disc={item.discription}
    />
  ));

  return (
    <section className="section_newsSlider section_padding">
      <div className="section_newsSlider-title">
        <h2>
          <span>/</span> News & Events
        </h2>
      </div>
      <Carousel responsive={responsive}>{newsInfo}</Carousel>;
    </section>
  );
}

export default NewsSlider;
