import { board, boardBox } from "./index.js";
import { playerBlack, playerwhite } from "./players.js";
import { pawnMove } from "./PieceMoves/pawnMove.js";
import { castleMove } from "./PieceMoves/castleMove";
import { knightMove } from "./PieceMoves/knightMove";
import { pieceCheck } from "./pieceCheck.js";

function movePiece(piece, currentGrid, targetGrid) {
  let boardArr = Array.from(boardBox);
  let indices = domIndex(boardArr, currentGrid, targetGrid);
  let pieceName = "";

  // checks which piece is selected & reset at every select
  pieceName = "";
  pieceName = pieceCheck(piece);

  if (pieceName === "castle") {
    castleMove(
      piece,
      boardArr,
      indices.currentIndex,
      indices.targetIndex,
      targetGrid
    );
  }
  if (pieceName === "knight") {
    knightMove(
      piece,
      boardArr,
      indices.currentIndex,
      indices.targetIndex,
      targetGrid
    );
  }
  if (pieceName === "pawn") {
    pawnMove(
      piece,
      boardArr,
      indices.currentIndex,
      indices.targetIndex,
      targetGrid
    );
  }
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

export { movePiece };
