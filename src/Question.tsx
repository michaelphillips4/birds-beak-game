import { useState, useEffect } from "react";
import { QuestionItem, filesURL } from "./GameManager/QuestionItem";

const Question = ({
  question,
  onclick,
}: {
  question: QuestionItem | null;
  onclick: (answer: number) => void;
}) => {
  const [fadeIn, setFadeIn] = useState(true);
  useEffect(() => {
    setFadeIn(true);
  }, [question]);
  return (
    <section>
      <img
        className={`${fadeIn ? "fade-in" : "hide"} question-image`}
        src={filesURL + question?.image}
      />

      <p className="bird-name">{question?.name}</p>
      <button
        onClick={() => {
          onclick(0);
          setFadeIn(false);
        }}
      >
        {question?.questions[0]}
      </button>
      <button
        onClick={() => {
          onclick(1);
          setFadeIn(false);
        }}
      >
        {question?.questions[1]}
      </button>
    </section>
  );
};

export default Question;