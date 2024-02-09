import { useState } from "react";
import Dice from "./Dice";
import './Board.css';

const hands = ['rock', 'paper', 'scissor'];
const INITIAL_VALUE = 'rock';
function random(n) {
  return Math.ceil(Math.random() * n);
}


function Board({ name, color, gameHistory }) {
  const [bet, setBet] = useState(1);
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  
  const handleBetChange = (e) => {
    const num = Number(e.target.value);
    setBet(num);
  }


  return (
    <>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>

      <h2>승부 기록</h2>

      <p>{gameHistory.join(', ')}</p>


      

    </>
  );
}

export default Board;