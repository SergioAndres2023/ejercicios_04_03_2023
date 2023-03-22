const boardSize = 10;

function board(boardSize){
  /* const boardSize = 10; */
  let board = [];
  for (let i = 0; i < boardSize; i++) {
    board[i]=[];
    for (let j = 0; j < boardSize; j++) {
      board[i][j]='';    
    }
    }
    return board
}


console.log(board(boardSize))
