// move rules for pawns
import { indexFinder } from "../indexFinder";
import { board } from "../index";
import { playerWhite, playerBlack } from "../players";
import { pawnAttack } from "../PieceMoves/pawnAttack";
import { pawnMoveCheck } from "./pawnMoveCheck";

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
  let playerDet = false; // piece is not player black

  // test if the piece belongs to playerBlack
  for (const ind of Object.keys(playerBlack.pieces)) {
    if (Object.values(playerBlack.pieces).includes(piece)) {
      playerDet = true;
    }
  }

  /// MOVE METHODS - can't modularized because each condition is different ///
  // if the target_i is within the first move range (current_i + 2 maximum)
  // if player is black, the source piece is removed, the two grids ahead (max movement) is defined, no piece blocking the path
  if (board[target_i] <= board[3]) {
    if (
      playerDet &&
      board[current_i + 2] &&
      current_j === target_j &&
      board[target_i][current_j] <= board[current_i + 2][current_j]
    ) {
      if (
        pawnMoveCheck(
          playerDet,
          board,
          boardArr,
          current_i,
          current_j,
          target_i
        )
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
  } else if (board[target_i] > board[3]) {
    if (
      playerDet &&
      board[current_i + 1] &&
      current_j === target_j &&
      board[target_i][current_j] <= board[current_i + 1][current_j]
    ) {
      if (
        pawnMoveCheck(
          playerDet,
          board,
          boardArr,
          current_i,
          current_j,
          target_i
        )
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
  }

  // if player is white
  if (board[target_i] >= board[4]) {
    if (
      !playerDet &&
      board[current_i - 2] !== undefined &&
      current_j === target_j &&
      board[target_i][current_j] >= board[current_i - 2][current_j]
    ) {
      if (
        pawnMoveCheck(
          playerDet,
          board,
          boardArr,
          current_i,
          current_j,
          target_i
        )
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
  } else if (board[target_i] < board[4]) {
    if (
      !playerDet &&
      board[current_i - 1] !== undefined &&
      current_j === target_j &&
      board[target_i][current_j] >= board[current_i - 1][current_j]
    ) {
      if (
        pawnMoveCheck(
          playerDet,
          board,
          boardArr,
          current_i,
          current_j,
          target_i
        )
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
  }

  if (board[target_i][target_j] !== undefined) {
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
}
