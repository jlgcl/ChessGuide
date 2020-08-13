// move rules for pawns
import { indexFinder } from "../movePiece";
import { board } from "../index";
import { playerWhite, playerBlack } from "../players";
import { pawnAttack } from "../PieceMoves/pawnAttack";

export function pawnMove(
  piece,
  boardArr,
  currentIndex,
  targetIndex,
  targetGrid
) {
  let current_i = indexFinder(board, currentIndex).i;
  let current_j = indexFinder(board, currentIndex).j;
  let target_i = indexFinder(board, targetIndex).i;
  let target_j = indexFinder(board, targetIndex).j;
  let playerDet = false;

  // test if the piece belongs to playerBlack
  for (const ind of Object.keys(playerBlack.pieces)) {
    if (playerBlack.pieces[ind] === piece) {
      playerDet = true;
    }
  }

  // if player is black, the source piece is removed, the two grids ahead (max movement) is defined, no piece blocking the path
  if (
    playerDet &&
    board[current_i + 2] &&
    current_j === target_j &&
    board[target_i] <= board[current_i + 2]
  ) {
    if (
      pawnMoveCheck(playerDet, board, boardArr, current_i, current_j, target_i)
    ) {
      // remove the piece from the currentIndex
      boardArr[currentIndex].innerHTML = "";

      // insert the piece to the target index
      if (boardArr[currentIndex].innerHTML === "") {
        let image = document.createElement("img");
        image.src = piece;
        boardArr[targetIndex].appendChild(image);
      }
    }
  }
  // if player is white
  else if (
    !playerDet &&
    board[current_i - 2] &&
    current_j === target_j &&
    board[target_i] >= board[current_i - 2]
  ) {
    if (
      pawnMoveCheck(playerDet, board, boardArr, current_i, current_j, target_i)
    ) {
      // remove the piece from the currentIndex
      boardArr[currentIndex].innerHTML = "";

      // insert the piece to the target index
      if (boardArr[currentIndex].innerHTML === "") {
        let image = document.createElement("img");
        image.src = piece;
        boardArr[targetIndex].appendChild(image);
      }
    }
  }

  pawnAttack(
    piece,
    board,
    boardArr,
    current_i,
    current_j,
    targetIndex,
    targetGrid
  );
}

// checks if another piece is blocking the move path
function pawnMoveCheck(
  playerDet,
  board,
  boardArr,
  current_i,
  current_j,
  target_i
) {
  let k = current_i;
  while (k < target_i && playerDet) {
    k++;
    if (boardArr[board[k][current_j]].innerHTML !== "") {
      return false;
    } else {
      return true;
    }
  }

  while (k > target_i && !playerDet) {
    k--;
    if (boardArr[board[k][current_j]].innerHTML !== "") {
      return false;
    } else {
      return true;
    }
  }
}
