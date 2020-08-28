import { indexFinder } from "../indexFinder";
import { playerCheck } from "./playerCheck";
import { board } from "../index.js";

export function kingMove(piece, boardArr, currentIndex, targetIndex) {
  let current_i = indexFinder(board, currentIndex).i;
  let current_j = indexFinder(board, currentIndex).j;
  let target_i = indexFinder(board, targetIndex).i;
  let target_j = indexFinder(board, targetIndex).j;
  let targetPiece = "";

  // possible moves
  let right,
    left,
    up,
    down,
    upLeft,
    upRight,
    downLeft,
    downRight = "";

  if (
    board[current_i - 1] !== undefined &&
    board[current_i - 1][current_j + 1] !== undefined
  ) {
    upRight = boardArr[board[current_i - 1][current_j + 1]];
  }
  if (board[current_i - 1] !== undefined) {
    up = boardArr[board[current_i - 1][current_j]];
  }
  if (
    board[current_i - 1] !== undefined &&
    board[current_i - 1][current_j - 1] !== undefined
  ) {
    upLeft = boardArr[board[current_i - 1][current_j - 1]];
  }
  if (board[current_i][current_j - 1] !== undefined) {
    left = boardArr[board[current_i][current_j - 1]];
  }
  if (
    board[current_i + 1] !== undefined &&
    board[current_i + 1][current_j - 1] !== undefined
  ) {
    downLeft = boardArr[board[current_i + 1][current_j - 1]];
  }
  if (board[current_i + 1] !== undefined) {
    down = boardArr[board[current_i + 1][current_j]];
  }
  if (
    board[current_i + 1] !== undefined &&
    board[current_i + 1][current_j + 1] !== undefined
  ) {
    downRight = boardArr[board[current_i + 1][current_j + 1]];
  }
  if (board[current_i][current_j + 1] !== undefined) {
    right = boardArr[board[current_i][current_j + 1]];
  }

  let moves = [up, upRight, right, downRight, down, downLeft, left, upLeft];

  /// MOVE & ATTACK ///
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
