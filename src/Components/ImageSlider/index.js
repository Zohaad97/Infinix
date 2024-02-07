import React, { useRef } from 'react';
import './slider.css'; // You can customize the styles in this CSS file

export function sliceArrayIntoPairs(array) {
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
          <img className="image" src={images[0]} alt={`Slide ${index}`} />
          {images[1] && <img  className="image" src={images[1]} alt={`Slide ${index}`} />}

        </li>
      ))}
    </ul>
  );
};

export default ImageSlider;
