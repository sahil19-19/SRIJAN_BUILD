import React from "react";

import "../../Assets/css/EditionPhone.css";
import first from "../../Assets/images/first.jpg";
import second from "../../Assets/images/second.jpg";
import image2021 from "../../Assets/images/2020-2021.png";
import image2016 from "../../Assets/images/2016-2017.png";
import image2017 from "../../Assets/images/2017-2018.png";
import image2018 from "../../Assets/images/2018-2019.png";
import Navbar from "../../components/NewNavbar.js/NewNavbar";

import Carousel from "react-elastic-carousel";
const EditionPhone = () => {
  return (
    <>
      <Navbar />
      <section className="phone-edition">
        <div className="current-edition">
          <div className="edition-text">SRIJAN 2021-22</div>
          <img className="edition-img" src={second} alt="edition"></img>
        </div>
        <Carousel itemsToShow={3}>
          <img className="carousel-components" src={second} alt="edition"></img>
          <img
            className="carousel-components"
            src={image2021}
            alt="edition"
          ></img>
          <img className="carousel-components" src={first} alt="edition"></img>
          <img
            className="carousel-components"
            src={image2018}
            alt="edition"
          ></img>
          <img
            className="carousel-components"
            src={image2016}
            alt="edition"
          ></img>
          <img
            className="carousel-components"
            src={image2017}
            alt="edition"
          ></img>
        </Carousel>
      </section>
    </>
  );
};

export default EditionPhone;
