import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {

  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);

  };
  return (
    <div className="App">
      <div className="banner">
        <span>🎲</span>
        <h1>주사위게임</h1>

        <div>
          <Button className="App-button" color='blue' onClick={handleRollClick}>던지기</Button>
          <Button className="App-button" color='red' onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>

      <div className="match">
        <div className="inner-match">
          <Board name="나" color="blue" gameHistory={myHistory} />
        </div>
        <div className="inner-match">
          <Board name="상대" color="red" gameHistory={otherHistory} />
        </div>
      </div>

    </div>
  );
}

export default App;