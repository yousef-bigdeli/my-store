import { useState } from "react";
import Magnifier from "react-magnifier";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

import styles from "./ProductGallery.module.scss";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./slickSlider.css";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const imageCount = images.length;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: imageCount > 4 ? 4 : imageCount,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <GrNext />
      </div>
    ),
    prevArrow: (
      <div>
        <GrPrevious />
      </div>
    ),
  };

  return (
    <div>
      <Magnifier
        src={selectedImage.image}
        alt={selectedImage.text}
        width={500}
        height={500}
        mgWidth={230}
        mgHeight={230}
        zoomFactor={1.2}
      />
      <div className={styles.slickWrapper}>
        <Slider {...settings}>
          {images.map((item) => (
            <img
              src={item.image}
              alt={item.text}
              key={item}
              className={styles.sliderImage}
              onClick={() => setSelectedImage(item)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductGallery;
