export type QuestionItem ={
     image:string;
     name: string;
     questions: string[];
     answer:number;
     isCorrect?:boolean|null;
     index?:number;
}



export default QuestionItem ;