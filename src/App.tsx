import { ImageSlider } from "./ImageSlider";
import dog1 from "/images/dog_1.jpg";
import dog2 from "/images/dog_2.jpg";
import dog3 from "/images/dog_3.jpg";
import dog4 from "/images/dog_4.jpg";
import dog5 from "/images/dog_5.jpg";

const IMAGES = [
  { url: dog1, alt: "Dog 1" },
  { url: dog2, alt: "Dog 2" },
  { url: dog3, alt: "Dog 3" },
  { url: dog4, alt: "Dog 4" },
  { url: dog5, alt: "Dog 5" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10/6",
        margin: " 0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
}
