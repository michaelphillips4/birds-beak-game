import QuestionIterator from "./QuestionIterator";
import { getRandomQuestionSet} from "./getRandomQuestionSet";
import QuestionItem from "./QuestionItem";

const numberOfQuestionsInGame = 6;

export default class Game {
  private gameQuestions: QuestionItem[] = [];
  private questionIterator: QuestionIterator;

  constructor() {
    this.questionIterator = new QuestionIterator();
    this.startNewGame();
  }

  public gameOver(): boolean {
    return !this.questionIterator.hasNext();
  }

  public startNewGame() {
    this.gameQuestions = getRandomQuestionSet(numberOfQuestionsInGame);
    this.questionIterator.SetQuestions(this.gameQuestions);
  }

  public setQuestionIsCorrect(choice: number): void {
    let q = this.gameQuestions.find(
      (q) => q.index === this.questionIterator.currentQuestion()?.index
    );
    if (q !== undefined) {
      q.isCorrect = q.answer === choice;
    }
  }

  public nextQuestion(): QuestionItem | null {
    return this.questionIterator.nextQuestion();
  }

  public getResults(): QuestionItem[] {
    return this.gameQuestions;
  }

  public allImages(): string[] {
    return allImages();
  }
}
