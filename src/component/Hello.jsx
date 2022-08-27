import React, { useRef, useState } from 'react';
import Data from './data.js';
import Popup from './nickname';

const Hello = () => {

  let mots = (Object.keys(Data.words()));
  let rand = Math.floor(Math.random()*mots.length);

  const [n, setN] =useState(rand);

  let rValue = Object.keys(Data.words()[n]);
  let trad = Object.values(Data.words()[n]);

  const input = useRef(null);
  const [result, setResult] = useState();   
  const [score, setScore] = useState(0);
  const [pop, setPop] = useState(true);
  const [name, setName] = useState("");
  const [wrong, setWrong] = useState(0);

  const close = () => {
    setPop(false);
  }

  
  const reset = () => {
    setPop(true);
    setResult('');
    setScore(0);
    setName(null);
    setWrong(0);
  }

   const match = () => {

    let bravo = "Bravo";
    let error = "The answer is not correct! Try again.";

    if(input.current.value == trad){
      setResult(bravo);
      setN(rand); 
      setScore(score+1);
    } else{
      setResult(error);
      setWrong(wrong+1);
    }   
   
    input.current.value = "";
  }  
  
  const change = () => {
    if (n<mots.length-1){ 
   setN(n+1);
  } else{
    setN(0);
  }   
  }

  

  return (
    <div>
      <Popup trigger={pop}>
        <h1>THE ENGLISH GAME</h1>
        <h3>Chose your nickname: </h3>
        <input type="text" value={name}
          onChange={(e) => setName(e.target.value)}/>
        <button onClick={close}>Start</button>
      </Popup>
        <h1>Welcome {name}</h1>
       <h2>Translate in English: </h2>
       <div className="arianna">{rValue}      
       <button onClick={change}>New word</button></div>
       <input type="text" ref={input}/>
       <button onClick={match}>Submit</button>
       <h1>{result}</h1>
       <div className="score">Score:</div>
       <table>
        <tr>
        <th>Right</th>
        <th>Wrong</th>
       </tr>
        <tr>
          <td>{score}</td>
          <td>{wrong}</td>
        </tr>
       </table>
       <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Hello;

