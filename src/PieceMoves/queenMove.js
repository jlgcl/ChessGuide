import { board } from "../index";
import { queenStraightMove } from "./queenStraightMove.js";
import { queenDiagMove } from "./queenDiagMove.js";

export function queenMove(
  piece,
  boardArr,
  currentIndex,
  targetIndex,
  targetGrid
) {
  queenStraightMove(piece, boardArr, currentIndex, targetIndex, targetGrid);
  queenDiagMove(piece, boardArr, currentIndex, targetIndex);
}
