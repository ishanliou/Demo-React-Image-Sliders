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
    <section aria-label="Image Slider" className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden flex">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img object-cover w-full h-full block shrink-0 grow-0 transition-all duration-700 ease-in-out"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn left-0 block absolute top-0 bottom-0 p-[1rem] hover:bg-[#00000033] transition duration-500 ease-in-out"
        aria-label="View Previous Image"
      >
        <ArrowLeftCircle
          aria-hidden
          className="hover:animate-arrowAnimation stroke-white w-8 h-8"
        />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn right-0 block absolute top-0 bottom-0 p-[1rem] hover:bg-[#00000033] transition duration-500 ease-in-out focus-visible:bg-[#00000033] "
        aria-label="View Next Image"
      >
        <ArrowRightCircle
          aria-hidden
          className="hover:animate-arrowAnimation stroke-white w-8 h-8"
        />
      </button>

      <div className="dot-btns absolute bottom-[0.5rem] left-1/2 -translate-50% flex gap-1">
        {images.map((_, index) => (
          <button
            className="img-slider-dot-btn block w-4 h-4 transition ease-in-out hover:scale-110  focus-visible:scale-110"
            key={index}
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden className=" stroke-white w-full h-full" />
            ) : (
              <Circle aria-hidden className=" stroke-white w-full h-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
