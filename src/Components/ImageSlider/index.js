import React, { useRef } from 'react';
import './slider.css'; // You can customize the styles in this CSS file
import ProjectTag from '../ProjectTag';

export function sliceArrayIntoPairs(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 2) {
    result.push(array.slice(i, i + 2));
  }
  return result;
}

const SliderItem = ({ image, key, tag = "" }) => (<div className='item'>
  <img className="image" src={image} alt={`Slide ${key}`} />
  {tag && <ProjectTag tag={tag} />}
</div>)

const ImageSlider = ({ images }) => {

  const slicedImages = sliceArrayIntoPairs(images);
  console.log({ slicedImages })
  return (
    <ul class="project-images-list">

      {slicedImages.map((images, index) => (
        <li key={index} className="project-images-list-item">
          <SliderItem image={images[0].src} key={index} tag={images[0].tag || ""} />
          {images[1] && <SliderItem image={images[1].src} key={index} tag={images[1].tag || ""} />}
        </li>
      ))}
    </ul>
  );
};

export default ImageSlider;
