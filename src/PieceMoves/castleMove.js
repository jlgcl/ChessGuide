import {
  playerWhite,
  playerBlack
} from "../players";
import {
  board
} from "../index";
import {
  indexFinder
} from "../indexFinder";
import {
  playerCheck
} from "./playerCheck";
import {
  currentILess,
  currentIMore,
  currentJLess,
  currentJMore,
} from "./castleMoveLog";

export function castleMove(
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
  let playerDet = playerCheck(piece);
  let count = 0;

  /// if the column is the same & piece is black ///
  if (current_j === target_j && playerDet) {
    // if the current_i is less than target_i
    if (current_i < target_i) {
      currentILess(current_i, target_i, target_j, piece, currentIndex, targetIndex, board, boardArr);
    }
    // if the current_i is larger than target_i
    else if (current_i > target_i) {
      currentIMore(current_i, target_i, target_j, piece, currentIndex, targetIndex, board, boardArr);
    }
  }

  /// if the column is the same & piece is white ///
  else if (current_j === target_j && !playerDet) {
    if (current_i > target_i) {
      currentIMore(current_i, target_i, target_j, piece, currentIndex, targetIndex, board, boardArr);
    } else if (current_i < target_i) {
      currentILess(current_i, target_i, target_j, piece, currentIndex, targetIndex, board, boardArr);
    }
  }

  /// if the row is the same & piece is black ///
  if (current_i === target_i && playerDet) {
    if (current_j < target_j) {
      currentJLess(current_i, current_j, target_j, piece, currentIndex, targetIndex, board, boardArr);
    } else if (current_j > target_j) {
      currentJMore(current_i, current_j, target_j, piece, currentIndex, targetIndex, board, boardArr);
    }
  }
  /// if the row is the same & piece is white ///
  else if (current_i === target_i && !playerDet) {
    if (current_j > target_j) {
      currentJMore(current_i, current_j, target_j, piece, currentIndex, targetIndex, board, boardArr);
    } else if (current_j < target_j) {
      currentJLess(current_i, current_j, target_j, piece, currentIndex, targetIndex, board, boardArr);
    }
  }
}