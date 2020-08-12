import { board, boardBox } from "./index.js";
import { playerBlack, playerwhite } from "./players.js";
import { pawnMove } from "./PieceMoves/pawnMove.js";

function movePiece(piece, currentGrid, targetGrid) {
  let boardArr = Array.from(boardBox);
  let indices = domIndex(boardArr, currentGrid, targetGrid);

  pawnMove(piece, boardArr, indices.currentIndex, indices.targetIndex);
}

// obtains the numeric indices of the DOM grid locations (boardArr)
function domIndex(boardArr, currentGrid, targetGrid) {
  let currentIndex = "";
  let targetIndex = "";

  boardArr.map((gridIndex) => {
    if (gridIndex == currentGrid) {
      // obtains the numeric index of the currentGrid
      currentIndex = boardArr.indexOf(gridIndex);
    }
    // obtains the numeric index of the targetGrid
    if (gridIndex == targetGrid) {
      targetIndex = boardArr.indexOf(gridIndex);
    }
  });
  return { currentIndex, targetIndex }; // return as object
}

// method to find index of the DOM indices in the 2D board reference array.
function indexFinder(board, index) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === index) {
        return { i, j };
      }
    }
  }
}

export { movePiece, indexFinder };
