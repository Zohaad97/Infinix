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
import projectJson from "../../projects.json"

import zaincityscape from "../assets/images/zaincityscape.svg";

import "./ProjectPage.css";
import Container from "../base/Container";
import Modal from "../Modal/Modal";
import { useLocation, useParams } from "react-router-dom";

const slideImages = [
  { id: 1, url: slide_1, alt: "Slide 1" },
  { id: 2, url: slide_2, alt: "Slide 2" },
  { id: 3, url: slide_3, alt: "Slide 3" },
  { id: 4, url: slide_4, alt: "Slide 4" },
  { id: 5, url: slide_5, alt: "Slide 5" },
  { id: 6, url: slide_6, alt: "Slide 6" },
];
const ProjectPage = () => {
  const [clickedImage, setClickedImage] = useState(null);

  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');



  const settings = {
    focusOnSelect: true,
  };
  const handleImageClick = (image) => {
    setClickedImage(image);
  };

  const handleCloseModal = () => {
    setClickedImage(null);
  };


  const projectToRender = projectJson.find(item => item.title.replace(/ /g, "-").toLowerCase() === name)
  //const projectToRender = projectJson.find(item => item.title === "Zain - CityScape KSA")
  console.log(projectToRender)

  return (
    <Container
      title={"Interactive Installation"}
      renderDescription={() => (
        <h1 className="about-heading">Zain - CityScape KSA</h1>
      )}
      renderBody={() => (

        <div>
          <a className="project-page-item" href="/#">
            <img src={projectToRender.mainImage} className="main" alt="partner" />
            <div className="descr" dangerouslySetInnerHTML={{ __html: projectToRender.description.replace(/\n/g, "<br/>") }} />
          </a>
          <div>
            <Slider className="slider-container" rows={1}  {...settings}>
              {projectToRender.images.map((image, index) => (<div key={`${index}`} onClick={() => handleImageClick(image)}>
                <img src={image} alt={name} />
              </div>))}
              {/* {slideImages.map((image) => (
                <div key={image.id} onClick={() => handleImageClick(image)}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))} */}
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
export default ProjectPage;
