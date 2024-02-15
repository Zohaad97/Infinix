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
import Slider from "react-slick";
import projectJson from "../../projects.json";

import zaincityscape from "../assets/images/zaincityscape.svg";

import "./ProjectPage.css";
import Container from "../base/Container";
import Modal from "../Modal/Modal";
import { useLocation, useParams } from "react-router-dom";
import ImageSlider from "../ImageSlider";
import ProjectTag from "../ProjectTag";

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
  const name = new URLSearchParams(location.search).get("name");
  console.log("Name", name);

  const settings = {
    focusOnSelect: true,
    dots: true,

    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesToShow: 3, // Show 3 images at a time
    // slidesToScroll: 3,
  };
  const handleImageClick = (image) => {
    setClickedImage(image);
  };

  const handleCloseModal = () => {
    setClickedImage(null);
  };

  const projectToRender = projectJson.find(
    (item) => item.title.replace(/ /g, "-").toLowerCase() === name
  );
  //const projectToRender = projectJson.find(item => item.title === "Zain - CityScape KSA")
  console.log(projectToRender);
  function chunkArray(mainArray, chunkSize) {
    const result = [];

    for (let i = 0; i < mainArray.length; i += chunkSize) {
      const chunk = mainArray.slice(i, i + chunkSize);
      result.push(chunk);
    }

    return result;
  }

  const projectImages = chunkArray(projectToRender.images, 2);
  console.log({ projectImages });
  return (
    <Container
      title={projectToRender.title.split("-")[0]?.toUpperCase()}
      renderDescription={() => (
        <h1 className="about-heading">{projectToRender.title.toUpperCase()}</h1>
      )}
      renderBody={() => (
        <div>
          <div className="project-page-item">
            <img
              src={projectToRender.mainImage.src}
              className="main"
              alt="partner"
            />
            <div
              className="descr"
              dangerouslySetInnerHTML={{
                __html: projectToRender.description.replace(/\n/g, "<br/>"),
              }}
            />
            {projectToRender.mainImage.tag && <ProjectTag tag={projectToRender.mainImage.tag} />}
          </div>
          <div>
            <ImageSlider images={projectToRender.images} />
            {/* <Slider className="slider-container" {...settings}>
              {projectImages.map((images, index) => (
                <div className="slider-item" key={`${index}/a`}>
                  {images.map((image, index) => (
                    <div
                      key={`${index}/b`}
                      onClick={() => handleImageClick(image)}
                    >
                      <img src={image} alt={name} />
                    </div>
                  ))}
                </div>
              ))}
            </Slider> */}
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
