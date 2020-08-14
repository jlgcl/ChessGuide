import { playerCheck } from "./playerCheck";
import { board } from "../index";

export function pawnAttackMove(
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
) {
  // check: if target piece is black/not, target grid is not empty, target grid is top-right/top-left of the current location

  //console.log(whiteTargetPiece_a);
  if (
    (!playerCheck(blackTargetPiece_a) || !playerCheck(blackTargetPiece_b)) &&
    (boardArr[blackAttackTarget_a].innerHTML !== "" ||
      boardArr[blackAttackTarget_b].innerHTML !== "") &&
    (boardArr[targetIndex] === boardArr[blackAttackTarget_a] ||
      boardArr[targetIndex] === boardArr[blackAttackTarget_b])
  ) {
    boardArr[board[current_i][current_j]].innerHTML = "";
    boardArr[targetIndex].innerHTML = "";
    let image = document.createElement("img");
    image.src = piece;
    boardArr[targetIndex].appendChild(image);
  }

  if (
    (playerCheck(whiteTargetPiece_a) || playerCheck(whiteTargetPiece_b)) &&
    (boardArr[whiteAttackTarget_a].innerHTML !== "" ||
      boardArr[whiteAttackTarget_b].innerHTML !== "") &&
    (boardArr[targetIndex] === boardArr[whiteAttackTarget_a] ||
      boardArr[targetIndex] === boardArr[whiteAttackTarget_b])
  ) {
    boardArr[board[current_i][current_j]].innerHTML = "";
    boardArr[targetIndex].innerHTML = "";
    let image = document.createElement("img");
    image.src = piece;
    boardArr[targetIndex].appendChild(image);
  }
}
