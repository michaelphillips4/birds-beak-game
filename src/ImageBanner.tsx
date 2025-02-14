
import data from "./GameManager/QuestionsData.json";
import { useEffect, useState } from "react";
import QuestionItem from "./GameManager/QuestionItem";

function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

const ImageBanner = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [loaded, setLoaded] = useState(false);
  const breakpoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const mobileImageCount = 4;
   
  let images: QuestionItem [];
 
 
  if (width < breakpoint) {
    const m = data.length - mobileImageCount;
    const start = getRndInteger(0, m);
    images = data.slice(start, start + mobileImageCount);
  } else {
    images = data;
  }

  return (
    <div className={`flex-container ${loaded ? "fade-in" : "hide"}`} >
      {images.map((image, i) => 
      
      ( 
        <div
          key={i}>
          <img src= {`images/small/${image.image}`} 
              alt={image.name}
            
              onLoad={() => i === (images.length-1) ? setLoaded(true): false }
          style={{
            height: `calc(100vw / ${images.length})`,
            width: `calc(100vw / ${images.length})`,
          }}/>
        </div>
      ))}
    </div>
  );

};

export default ImageBanner;
