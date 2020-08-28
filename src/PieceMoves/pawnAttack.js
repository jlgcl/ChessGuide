import { playerwhite } from "../players.js";
import { pawnAttackMove } from "./pawnAttackMove";

// defines target locations

export function pawnAttack(
  piece,
  board,
  boardArr,
  current_i,
  current_j,
  targetIndex,
  targetGrid
) {
  let blackAttackTarget_a = "";
  let blackAttackTarget_b = "";
  let whiteAttackTarget_a = "";
  let whiteAttackTarget_b = "";

  if (board[current_i + 1][current_j + 1] !== undefined) {
    blackAttackTarget_a = board[current_i + 1][current_j + 1];
  }
  if (board[current_i + 1][current_j - 1] !== undefined) {
    blackAttackTarget_b = board[current_i + 1][current_j - 1];
  }
  if (board[current_i - 1][current_j + 1] !== undefined) {
    whiteAttackTarget_a = board[current_i - 1][current_j + 1];
  }
  if (board[current_i - 1][current_j - 1] !== undefined) {
    whiteAttackTarget_b = board[current_i - 1][current_j - 1];
  }

  // try to refractor the code below later (let ... = ...., w/o if statements)
  let blackTargetPiece_a = "";
  let blackTargetPiece_b = "";
  let whiteTargetPiece_a = "";
  let whiteTargetPiece_b = "";

  if (
    blackAttackTarget_a !== "" &&
    boardArr[blackAttackTarget_a].childNodes[0] !== undefined
  ) {
    blackTargetPiece_a = boardArr[
      blackAttackTarget_a
    ].childNodes[0].getAttribute("src");
  }
  if (
    blackAttackTarget_b !== "" &&
    boardArr[blackAttackTarget_b].childNodes[0] !== undefined
  ) {
    blackTargetPiece_b = boardArr[
      blackAttackTarget_b
    ].childNodes[0].getAttribute("src");
  }
  if (
    whiteAttackTarget_a !== "" &&
    boardArr[whiteAttackTarget_a].childNodes[0] !== undefined
  ) {
    whiteTargetPiece_a = boardArr[
      whiteAttackTarget_a
    ].childNodes[0].getAttribute("src");
  }
  if (
    whiteAttackTarget_b !== "" &&
    boardArr[whiteAttackTarget_b].childNodes[0] !== undefined
  ) {
    whiteTargetPiece_b = boardArr[
      whiteAttackTarget_b
    ].childNodes[0].getAttribute("src");
  }

  pawnAttackMove(
    piece,
    current_i,
    current_j,
    boardArr,
    targetIndex,
    blackTargetPiece_a,
    blackTargetPiece_b,
    whiteTargetPiece_a,
    whiteTargetPiece_b,
    blackAttackTarget_a,
    blackAttackTarget_b,
    whiteAttackTarget_a,
    whiteAttackTarget_b
  );
}
