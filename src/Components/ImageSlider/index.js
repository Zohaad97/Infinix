import React, { useRef } from 'react';
import './slider.css'; // You can customize the styles in this CSS file

function sliceArrayIntoPairs(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 2) {
    result.push(array.slice(i, i + 2));
  }
  return result;
}

const ImageSlider = ({ images }) => {

  const slicedImages = sliceArrayIntoPairs(images);
  console.log({ slicedImages })
  return (
    <ul class="project-images-list">

      {slicedImages.map((images, index) => (
        <li key={index} className="project-images-list-item">
          <img src={images[0]} alt={`Slide ${index}`} />
          {images[1] && <img src={images[1]} alt={`Slide ${index}`} />}

        </li>
      ))}

      {/* <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button> */}
    </ul>
  );
};

export default ImageSlider;
