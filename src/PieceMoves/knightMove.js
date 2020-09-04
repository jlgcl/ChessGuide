import {
  indexFinder
} from "../indexFinder";
import {
  playerCheck
} from "./playerCheck";
import {
  board
} from "../index.js";
import {
  knightAttack
} from "./knightAttack";

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
  let targetPiece = "";

  // initialize possible move locations
  let moveUpLeft, moveUpRight, moveDownLeft, moveDownRight, moveUpLeftB, moveUpRightB, moveDownLeftB, moveDownRightB = "";

  // define the moves (one for 2 verticals & one for 2 horizontals)
  if (
    board[current_i - 2] !== undefined &&
    board[current_i - 2][current_j - 1] !== undefined
  ) {
    moveUpLeft = boardArr[board[current_i - 2][current_j - 1]];
  }
  if (
    board[current_i - 1] !== undefined &&
    board[current_i - 1][current_j - 2] !== undefined
  ) {
    moveUpLeftB = boardArr[board[current_i - 1][current_j - 2]];
  }
  if (
    board[current_i - 2] !== undefined &&
    board[current_i - 2][current_j + 1] !== undefined
  ) {
    moveUpRight = boardArr[board[current_i - 2][current_j + 1]];
  }
  if (
    board[current_i - 1] !== undefined &&
    board[current_i - 1][current_j + 2] !== undefined
  ) {
    moveUpRightB = boardArr[board[current_i - 1][current_j + 2]];
  }
  if (
    board[current_i + 2] !== undefined &&
    board[current_i + 2][current_j - 1] !== undefined
  ) {
    moveDownLeft = boardArr[board[current_i + 2][current_j - 1]];
  }
  if (
    board[current_i + 1] !== undefined &&
    board[current_i + 1][current_j - 2] !== undefined
  ) {
    moveDownLeftB = boardArr[board[current_i + 1][current_j - 2]];
  }
  if (
    board[current_i + 2] !== undefined &&
    board[current_i + 2][current_j + 1] !== undefined
  ) {
    moveDownRight = boardArr[board[current_i + 2][current_j + 1]];
  }
  if (
    board[current_i + 1] !== undefined &&
    board[current_i + 1][current_j + 2] !== undefined
  ) {
    moveDownRightB = boardArr[board[current_i + 1][current_j + 2]];
  }

  let moves = [moveUpLeft, moveUpRight, moveDownLeft, moveDownRight, moveUpLeftB,
    moveUpRightB, moveDownLeftB, moveDownRightB,
  ];
  knightAttack(moves, board, boardArr, currentIndex, targetIndex,
    piece, targetPiece);
}