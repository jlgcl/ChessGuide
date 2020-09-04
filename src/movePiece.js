import {
  board,
  boardBox
} from "./index.js";
import {
  playerBlack,
  playerwhite
} from "./players.js";
import {
  pawnMove
} from "./PieceMoves/pawnMove.js";
import {
  queenMove
} from "./PieceMoves/queenMove.js";
import {
  castleMove
} from "./PieceMoves/castleMove";
import {
  knightMove
} from "./PieceMoves/knightMove";
import {
  bishopMove
} from "./PieceMoves/bishopMove";
import {
  kingMove
} from "./PieceMoves/kingMove";
import {
  pieceCheck
} from "./pieceCheck.js";
import {
  checkState
} from "./PieceMoves/checkState";
import {
  playerCheck
} from "./PieceMoves/playerCheck.js";

function movePiece(piece, currentGrid, targetGrid) {
  let boardArr = Array.from(boardBox);
  let indices = domIndex(boardArr, currentGrid, targetGrid);

  // checks which piece is selected & reset at every select
  let pieceName = pieceCheck(piece);
  let check = checkState(piece, indices.currentIndex, indices.targetIndex);

  // if there is no check condition
  if (check !== true) {
    if (pieceName === "king") {
      kingMove(piece, boardArr, indices.currentIndex, indices.targetIndex);
    }
    if (pieceName === "queen") {
      queenMove(piece, boardArr, indices.currentIndex, indices.targetIndex, targetGrid);
    }
    if (pieceName === "bishop") {
      bishopMove(piece, boardArr, indices.currentIndex, indices.targetIndex, targetGrid);
    }
    if (pieceName === "castle") {
      castleMove(piece, boardArr, indices.currentIndex, indices.targetIndex);
    }
    if (pieceName === "knight") {
      knightMove(piece, boardArr, indices.currentIndex, indices.targetIndex, targetGrid);
    }
    if (pieceName === "pawn") {
      pawnMove(piece, boardArr, indices.currentIndex, indices.targetIndex, targetGrid);
    }
  }
  // if a king is in check position; the turn would be the targeted color (opposing king can't move)
  // condition for other pieces to block the check path? "If a piece moves to target & sets checkState to !== true"
  else if (!check) {
    if (pieceName === "pawn") {
      pawnMove(piece, boardArr, indices.currentIndex, indices.targetIndex);
    }
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
  return {
    currentIndex,
    targetIndex
  }; // return as object
}

export {
  movePiece,
  domIndex
};