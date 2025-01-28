export type QuestionItem ={
     image:string;
     name: string;
     questions: string[];
     answer:number;
     isCorrect?:boolean|null;
     index?:number;
}

export const filesURL = "https://area2-documentsstore.s3.eu-west-2.amazonaws.com/";

export default QuestionItem ;