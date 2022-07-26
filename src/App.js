import React, { useRef, useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [word, updWord] = useState('');
  // const [jumbleword, updJumbleword] = useState('');

  const wordArr = ['java', 'php', 'javascript', 'html', 'css', 'python'];
  let jumbleword = useRef('');

  let generatedWord = useRef('');

  const guessWord = (event) => {
    updWord(event.target.value);
  }

  const check = () => {

    const btnEl = document.querySelector('.btn-warning');
    const gameTextEl = document.querySelector('.game-text');

    if (btnEl.innerText === 'START') {
      updWord('');
      btnEl.innerText = 'DONE';
      let rn_idx = Math.floor(Math.random() * wordArr.length);
      generatedWord.current = wordArr[rn_idx];

      // let temp = [...generatedWord];
      console.log(generatedWord.current);
      // console.log(temp);
      // console.log(wordArr);
      // console.log(wordArr[rn_idx])

      

      let temp = ''.concat(generatedWord.current);

      console.log(temp);

      jumbleword.current = '';

      for(let i = 0; i < generatedWord.current.length; i++)
      {
        let idx = Math.floor(Math.random() * temp.length);
        jumbleword.current = jumbleword.current.concat(temp[idx]);
        let f = temp.slice(0, idx);
        let e = temp.slice(idx + 1, temp.length);
        temp = f + e;
      }
      console.log(jumbleword.current);
      gameTextEl.innerText = 'Guess this word :' + jumbleword.current;
    }
    else
    {
      console.log(word + ' ' + generatedWord.current);
      if(word === generatedWord.current)
      {
        gameTextEl.innerText = 'Awesome. Correct Guess !!';
        btnEl.innerText = 'START';
        jumbleword.current = ''
        console.log('matched');
        // updWord('');
      }
      else
      {
        gameTextEl.innerText = 'Uhh. Wrong Guess !! Please Guess This Word Again :' + jumbleword.current;
        console.log('Not Matched ' + jumbleword.current);
        updWord('');
      }
    }

  }

  return (
    <>
      <div className="heading-div">
        <h2 className="heading-text">GUESS THE WORD</h2>
      </div>

      <div className="game-div">
        <div className="game-fit">
          <div className="game-text-div">
            <h4 className="game-text">
              
            </h4>
          </div>
          <div className="input-div">
            <input type="text" className="form-control" id="exampleInputWord" aria-describedby="WordHelp" onChange={guessWord} value={word} />
          </div>
          <div className="next-btn-div">
            <div className="next-btn">
              <button type="button" className="btn btn-warning" onClick={check}>START</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
