import React, { useRef } from 'react';
import './slider.css'; // You can customize the styles in this CSS file

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -150, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    console.log(sliderRef.current.scrollTo)
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - 150, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="image-slider-container">
      <div className="image-slider" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="image-slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button> */}
    </div>
  );
};

export default ImageSlider;
