import { useState} from "react";
import Results from "./Results";
import Question from "./Question";
import Game from "./GameManager/Game";
const game = new Game();
const defaultQuestion = game.nextQuestion();

function App() {
  const [question, setQuestion] = useState(defaultQuestion);
  
  const handelAnswerClicked = (answer: number) => {
    if (question) {
      game.setQuestionIsCorrect(answer);
    }
    setQuestion(game.nextQuestion());
  };

  const newGame = () => {
    game.startNewGame();
    setQuestion(game.nextQuestion());
  };

  return (
    <article className="game">
    
          {game.gameOver() ? (
            <Results
              questions={game.getResults()}
              newGameClickHandler={newGame}
            />
          ) : (
            <Question onclick={handelAnswerClicked} question={question} />
          )}
       
    </article>
  );
}

export default App;
