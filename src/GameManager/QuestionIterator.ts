import QuestionItem from "./QuestionItem";

export default class QuestionIterator {
  private questions: QuestionItem[] = [];
  private index: number = -1;

  public SetQuestions(items: QuestionItem[]) {
    this.questions = items;
    this.index = -1;
  }

  public hasNext(): boolean {
    return this.index < this.questions?.length;
  }

  public currentQuestion(): QuestionItem | null {
    return this.questions[this.index];
  }

  public nextQuestion(): QuestionItem | null {
    if (!this.hasNext()) return null;
    this.index++;
    return this.currentQuestion();
  }
}
