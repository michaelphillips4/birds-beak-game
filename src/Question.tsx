import { useState} from "react";
import { QuestionItem} from "./GameManager/QuestionItem";
import { filesURL } from "./settings";

const Question = ({
  question,
  onclick,
}: {
  question: QuestionItem | null;
  onclick: (answer: number) => void;
}) => {

  const [loaded,setLoaded] = useState(false); 

  return (
    <section >
    
      <img className={`question-image ${loaded ? "fade-in" : "hide"}`}
        src={filesURL + question?.image}
        onLoad={() => setLoaded(true)}
      />
      <p className="bird-name">{question?.name}</p>
      <div>
      <button
        onClick={() => {
          onclick(0);setLoaded(false)
         
        }}
      >
        {question?.questions[0]}
      </button>
      <button
        onClick={() => {
          onclick(1);setLoaded(false)
          }}
      >
        {question?.questions[1]}
      </button>
      </div>
    </section>
  );
};

export default Question;