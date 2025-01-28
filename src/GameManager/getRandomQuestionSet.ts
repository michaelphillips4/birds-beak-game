import data from "./QuestionsData.json";
import { QuestionItem, filesURL } from "./QuestionItem";

const getRand = () => Math.floor(Math.random() * data.length);

export const getRandomQuestionSet = (length: number): QuestionItem[] => {
  if (length > data.length) {
    throw `the length (${length}) cant be greater the number of questions ${data.length}.`;
  }

  let currentQuestionSet: QuestionItem[] = [];

  while (currentQuestionSet.length < length) {
    const randomIndex = getRand();
    if (!currentQuestionSet.some((x) => x.index === randomIndex)) {
      const item: QuestionItem = {
        ...data[randomIndex],
        isCorrect: null,
        index: randomIndex,
      };
      currentQuestionSet.push(item);
    }
  }
  return currentQuestionSet;
};

export const allImages = (): string[] =>
  data.map((item) => filesURL + item.image);
