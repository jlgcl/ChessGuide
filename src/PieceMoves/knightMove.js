import { indexFinder } from "../indexFinder";
import { playerCheck } from "./playerCheck";
import { board } from "../index.js";

// STATUS: define moves for two moves horizontal + one move vertical
export function knightMove(
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
  let targetPiece = "";

  // initialize possible move locations
  let moveUpLeft = "";
  let moveUpRight = "";
  let moveDownLeft = "";
  let moveDownRight = "";

  // define the moves
  if (
    board[current_i - 2] !== undefined &&
    board[current_i - 2][current_j - 1] !== undefined
  ) {
    moveUpLeft = boardArr[board[current_i - 2][current_j - 1]];
  }
  if (
    board[current_i - 2] !== undefined &&
    board[current_i - 2][current_j + 1] !== undefined
  ) {
    moveUpRight = boardArr[board[current_i - 2][current_j + 1]];
  }
  if (
    board[current_i + 2] !== undefined &&
    board[current_i + 2][current_j - 1] !== undefined
  ) {
    moveDownLeft = boardArr[board[current_i + 2][current_j - 1]];
  }
  if (
    board[current_i + 2] !== undefined &&
    board[current_i + 2][current_j + 1] !== undefined
  ) {
    moveDownRight = boardArr[board[current_i + 2][current_j + 1]];
  }

  let moves = [moveUpLeft, moveUpRight, moveDownLeft, moveDownRight];
  if (moves.find((move) => move === boardArr[targetIndex])) {
    // move to target location if target location is empty
    if (boardArr[targetIndex].innerHTML === "") {
      boardArr[currentIndex].innerHTML = "";

      // insert the piece to the target index
      let image = document.createElement("img");
      image.src = piece;
      boardArr[targetIndex].appendChild(image);
    }
    // move and attack the target piece if target location is occupied by enemy piece
    else if (
      boardArr[targetIndex].innerHTML !== "" &&
      boardArr[targetIndex].childNodes[0].getAttribute("src") !== undefined
    ) {
      targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
      if (
        (playerCheck(piece) && !playerCheck(targetPiece)) ||
        (!playerCheck(piece) && playerCheck(targetPiece))
      ) {
        boardArr[currentIndex].innerHTML = "";
        boardArr[targetIndex].innerHTML = "";
        let image = document.createElement("img");
        image.src = piece;
        boardArr[targetIndex].appendChild(image);
      }
    }
  }
}
