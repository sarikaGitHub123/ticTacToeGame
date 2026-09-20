import { useState } from "react";
import Square from "./Square";

export const bordSq = 5;
const totalSq = Array(bordSq * bordSq).fill("");

const findRowsIndex = (arr:string[], len:number) => {
  const rows = [];
  const columns = [];
  const digonal1 = [];
  const digonal2 = [];
  const newArr = arr.map((i:string, index) => index);
  for (let i = 0; i < newArr.length; i = i + len) {
    const k = newArr.slice(i, i + len);
    rows.push(k);
  }
  for (let j = 0; j < len; j++) {
    const dt = [];
    for (let k = j; k < newArr.length; k = k + len) {
      dt.push(k);
    }
    columns.push(dt);
    const d1 = j * (len + 1);
    const d2 = (j + 1) * (len - 1);
    digonal1.push(d1);
    digonal2.push(d2);
  }
  const positions = [...rows, ...columns, digonal1, digonal2];
  return positions;
};

const Board = () => {
  const [bSquares, setBSquares] = useState(totalSq);
  const [currentUser, setCurrentUser] = useState("X");
  const [winner,setWinner] = useState("");
  const [stopGame,setStopGame] = useState(false)

  const checkWinner = (squares:string[], player:string) => {
    const winningPositions = findRowsIndex(squares, bordSq) || [];
    for (const i of winningPositions) {
         let isWinner = true;
        console.log('I is......',i)
        for(const j of i){
            if (squares[j] == "" || squares[j] !== player) {
                isWinner = false
                break;
            }
        }
        if(isWinner){
          return player
        }
     }
    return ""
  };


  const onClick = (index: number) => {
    if(stopGame){
      return
    }
    const sqrs = [...bSquares];
    sqrs[index] = currentUser;
    const winner = checkWinner(sqrs,currentUser);
    console.log("Winner is ini", winner);
    setBSquares(sqrs);
    setCurrentUser((prev) => (prev == "X" ? "O" : "X"));
    if (winner) {
      console.log("Winner is", winner);
      setWinner(winner)
      setStopGame(true)
      return
    }
  };

  const onRestart = ()=>{
    if(stopGame==true){
            setStopGame(false)
    }
    setBSquares(totalSq)
  }

  return (
    <div>
        <div style={{alignSelf:'flex-end',display:'flex',justifyContent:"flex-end",marginTop:"10px",alignItems:"center"}}>
        <button style={{backgroundColor:"#3a3ab7"}} onClick={onRestart}>Rstart</button>
        </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#7d6d6d",
        padding: "10px",
        margin: "5px",
      }}
    >
      <div>
    {winner &&
       <h2>Winnwe is {winner}</h2>
    }
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${bordSq}, 1fr)`,
        }}
      >
        {bSquares.map((i, index) => (
          <div key={index}>
            <Square value={i} onClick={() => onClick(index)} />
          </div>
        ))}
      </div>
     
    </div>
    </div>
    </div>
  );
};

export default Board;
