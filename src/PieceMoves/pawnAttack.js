import { playerwhite } from "../players.js";
import { pawnAttackMove } from "./pawnAttackMove";

export function pawnAttack(
  piece,
  board,
  boardArr,
  current_i,
  current_j,
  targetIndex,
  targetGrid
) {
  let blackAttackTarget_a = board[current_i + 1][current_j + 1];
  let blackAttackTarget_b = board[current_i + 1][current_j - 1];
  let whiteAttackTarget_a = board[current_i - 1][current_j + 1];
  let whiteAttackTarget_b = board[current_i - 1][current_j - 1];

  // try to refractor the code below later (let ... = ...., w/o if statements)
  let blackTargetPiece_a = "";
  let blackTargetPiece_b = "";
  let whiteTargetPiece_a = "";
  let whiteTargetPiece_b = "";
  if (boardArr[blackAttackTarget_a].childNodes[0] !== undefined) {
    blackTargetPiece_a = boardArr[
      blackAttackTarget_a
    ].childNodes[0].getAttribute("src");
  }
  if (boardArr[blackAttackTarget_b].childNodes[0] !== undefined) {
    blackTargetPiece_b = boardArr[
      blackAttackTarget_b
    ].childNodes[0].getAttribute("src");
  }
  if (boardArr[whiteAttackTarget_a].childNodes[0] !== undefined) {
    whiteTargetPiece_a = boardArr[
      whiteAttackTarget_a
    ].childNodes[0].getAttribute("src");
  }
  if (boardArr[whiteAttackTarget_b].childNodes[0] !== undefined) {
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
