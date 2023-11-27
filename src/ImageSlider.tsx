import { useState } from "react";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Circle,
  CircleDot,
} from "lucide-react";
import "./image-slider.css";

type ImageSliderProps = {
  images: { url: string; alt: string }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section aria-label="Image Slider" className="image-slider">
      <div className="image-container">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn btn-left"
        aria-label="View Previous Image"
      >
        <ArrowLeftCircle aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn btn-right"
        aria-label="View Next Image"
      >
        <ArrowRightCircle aria-hidden />
      </button>

      <div className="dot-btns">
        {images.map((_, index) => (
          <button
            className="img-slider-dot-btn"
            key={index}
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
