import { filesURL } from "./settings";
import data from "./GameManager/QuestionsData.json";
import { useEffect, useState } from "react";

function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

const ShowAll = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const mobileImageCount = 4;
  const allImages = data.map((e) => filesURL + e.image);
  let images: string[] = [];
  console.log(images);
  if (width < breakpoint) {
    const m = data.length - mobileImageCount;
    const start = getRndInteger(0, m);
    images = allImages.slice(start, start + mobileImageCount);
  } else {
    images = allImages;
  }

  return (
    <div className="flex-container">
      {images.map((image, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${image}`,
            height: `calc(100vw / ${images.length})`,
            width: `calc(100vw / ${images.length})`,
          }}
        ></div>
      ))}
    </div>
  );

};

export default ShowAll;
