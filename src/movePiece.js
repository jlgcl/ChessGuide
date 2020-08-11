import { board, boardBox } from "./index.js";
import { playerBlack, playerwhite } from "./players.js";

export function movePiece(piece, currentGrid, targetGrid) {
  let boardArr = Array.from(boardBox);
  let indices = domIndex(boardArr, currentGrid, targetGrid);

  pawnMove(boardArr, indices.currentIndex, indices.targetIndex);
}

// obtains the numeric indices of the DOM grid locations
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

// move rules for pawns
function pawnMove(boardArr, currentIndex, targetIndex) {
  // code to find index of the DOM indices in the 2D board reference array.
}
