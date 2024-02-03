import "../Home/internal.css";
import "../Home/mainstyle.css";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../assets/images/slide_1.svg";
import slide_2 from "../assets/images/slide_2.svg";
import slide_3 from "../assets/images/slide_3.svg";
import slide_4 from "../assets/images/slide_4.svg";
import slide_5 from "../assets/images/slide_5.svg";
import slide_6 from "../assets/images/slide_6.svg";
import slide_7 from "../assets/images/slide_7.svg";
import slide_8 from "../assets/images/slide_8.svg";
import slide_9 from "../assets/images/slide_9.svg";
import slide_10 from "../assets/images/slide_10.svg";
import Slider from "react-slick";

import zaincityscape from "../assets/images/zaincityscape.svg";

import "./Projectdesc.css";
import Container from "../base/Container";
import Modal from "../Modal/Modal";

const slideImages = [
  { id: 1, url: slide_1, alt: "Slide 1" },
  { id: 2, url: slide_2, alt: "Slide 2" },
  { id: 3, url: slide_3, alt: "Slide 3" },
  { id: 4, url: slide_4, alt: "Slide 4" },
  { id: 5, url: slide_5, alt: "Slide 5" },
  { id: 6, url: slide_6, alt: "Slide 6" },
];
const Projectdesc = () => {
  const [clickedImage, setClickedImage] = useState(null);
  const settings = {
    focusOnSelect: true,
    slidesPerRow: 3,
  };
  const handleImageClick = (image) => {
    setClickedImage(image);
  };

  const handleCloseModal = () => {
    setClickedImage(null);
  };
  return (
    <Container
      title={"Interactive Installation"}
      renderDescription={() => (
        <h1 className="about-heading">Zain - CityScape KSA</h1>
      )}
      renderBody={() => (
        <div style={{ display: "block" }}>
          <a className="partner-item" href="/#">
            <img src={zaincityscape} alt="partner" />
            <div className="descr">
              At Cityscape in Saudi Arabia, our emphasis on innovative
              presentation solutions was evident. The rotating product showcase,
              featuring an interactive tablet interface and a sleek transparent
              OLED, allowed users to effortlessly select products displayed on a
              rotating platform
            </div>
            <div className="descr">
              This engaging experience, complemented by captivating digital
              holographic visuals, showcased detailed product information,
              enhancing the overall presentation. Our commitment to innovation
              also extended to practical solutions, including hanging LED cubes
              for the Zain booth and a sliding screen for Shomoul, both executed
              with precision within demanding timelines.
            </div>
          </a>
          <div>
            <Slider className="slider-container" {...settings}>
              {slideImages.map((image) => (
                <div key={image.id} onClick={() => handleImageClick(image)}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </Slider>
            {clickedImage && (
              <Modal
                imageUrl={clickedImage.url}
                alt={clickedImage.alt}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </div>
      )}
    />
  );
};
export default Projectdesc;
