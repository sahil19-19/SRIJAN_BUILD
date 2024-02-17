import React from "react";

import "../../Assets/css/EditionPhone.css";
import image2020 from "../../Assets/images/first.jpg";
import image2022 from "../../Assets/images/second.jpg";
import image2021 from "../../Assets/images/2020-2021.png";
import image2018 from "../../Assets/images/2016-2017.png";
import image2017 from "../../Assets/images/2017-2018.png";
import image2019 from "../../Assets/images/2018-2019.png";
import Navbar from "../../components/NewNavbar.js/NewNavbar";

import Carousel from "react-elastic-carousel";
const EditionPhone = () => {
  return (
    <>
      <Navbar />
      <section className="phone-edition">
        <div className="current-edition">
          <div className="edition-text">SRIJAN 2021-22</div>
          <a href="#">
            <img className="edition-img" 
            src={image2022} 
            alt="edition"
            ></img>
          </a>
        </div>
        <Carousel itemsToShow={3}>
          <a href="https://drive.google.com/file/d/1lqy5vTkv4erXBLndVKP5PuBxHZ-To3NR/view?usp=sharing>">
            <img
              className="carousel-components"
              src={image2022}
              alt="edition"
            ></img>
          </a>
          <a href="https://drive.google.com/file/d/1qjMCAEk75KmO9mumi2fra55Ua3XB6qpt/view?usp=sharing">
            <img
              className="carousel-components"
              src={image2021}
              alt="edition"
            ></img>
          </a>
          <a href="https://drive.google.com/file/d/1lmBbYQvnFDeM7KNqZ6L0J7RtadBBle4E/view?usp=sharing">
            <img
              className="carousel-components"
              src={image2020}
              alt="edition"
            ></img>
          </a>
          <a href="https://drive.google.com/file/d/1SC6heWxbESkYuql8VBAyVUXlWZ8crl08/view?usp=drive_link">
            <img
              className="carousel-components"
              src={image2019}
              alt="edition"
            ></img>
          </a>
          <a href="https://drive.google.com/file/d/1yIWkM0lmwmqvQ41xUenTqAfrXdhhb9Nr/view?usp=sharing">
            <img
              className="carousel-components"
              src={image2018}
              alt="edition"
            ></img>
          </a>
          <a href="https://drive.google.com/file/d/1rag_ijpEnO93SxTg1v_vIi8VYBsSo-nC/view?usp=drive_link">
            <img
              className="carousel-components"
              src={image2017}
              alt="edition"
            ></img>
          </a>
        </Carousel>
      </section>
    </>
  );
};

export default EditionPhone;
