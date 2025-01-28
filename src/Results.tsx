import QuestionItem from "./GameManager/QuestionItem";

const Results = ({
  questions,
  newGameClickHandler,
}: {
  questions: QuestionItem[];
  newGameClickHandler: () => void;
}) => {
  const totalWins = questions.filter((q) => q.isCorrect).length;

  const infoMessage = () => {
    if (questions.length == totalWins) {
      return "Great you won : ) ";
    } else if (totalWins > questions.length / 2) {
      return "Not bad.";
    }
    return "";
  };

  return (
    <>
      <h3>
        {infoMessage()} Out of {questions.length} questions you got {totalWins}{" "}
        correct.
      </h3>
      <ol>
        {questions.map((q, i) => (
          <li key={i}>
            {q.isCorrect ? <>&#10004;</> : <>&#10008;</>} You got this
            {q.isCorrect ? " Correct" : " Wrong"}. A {q.name}{" "}
            {q.questions[q.answer]}.
          </li>
        ))}
      </ol>
      <button onClick={() => newGameClickHandler()}>Play again ?</button>
    </>
  );
};

export default Results;
