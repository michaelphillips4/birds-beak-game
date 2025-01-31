
import { filesURL } from "./settings";
import data from "./GameManager/QuestionsData.json";

const ShowAll = ()=>
{

  return (<ol>
    
    {data.map((b, i) => (
          <li key={i}>
           <h2>{b.name} <small>({b.questions[b.answer]})</small></h2>
           <img src ={filesURL + b.image} style={{"maxHeight":"350px"}} />
          </li>
        ))}


  </ol>
  );
};

export default ShowAll;