import { playerBlack, playerwhite } from "../players.js";

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

  // try to refractor the code below later (let ... = ...., w/o if statements)
  let targetPiece_a = "";
  let targetPiece_b = "";
  if (boardArr[blackAttackTarget_a].childNodes[0] !== undefined) {
    targetPiece_a = boardArr[blackAttackTarget_a].childNodes[0].getAttribute(
      "src"
    );
  }
  if (boardArr[blackAttackTarget_b].childNodes[0] !== undefined) {
    targetPiece_b = boardArr[blackAttackTarget_b].childNodes[0].getAttribute(
      "src"
    );
  }
  console.log(boardArr[blackAttackTarget_a], boardArr[targetGrid]);
  // check: if target piece is white, target grid is not empty, target grid is top-right/top-left of the current location
  if (
    (!playerCheck(targetPiece_a) || !playerCheck(targetPiece_b)) &&
    (boardArr[blackAttackTarget_a].innerHTML !== undefined ||
      boardArr[blackAttackTarget_b].innerHTML !== undefined) &&
    (boardArr[targetIndex] === boardArr[blackAttackTarget_a] ||
      boardArr[targetIndex] === boardArr[blackAttackTarget_b])
  ) {
    boardArr[board[current_i][current_j]].innerHTML = "";
    boardArr[targetIndex].innerHTML = "";
    let image = document.createElement("img");
    image.src = piece;
    boardArr[targetIndex].appendChild(image);
  }
}

function playerCheck(piece) {
  // test if the piece belongs to playerBlack
  for (const ind of Object.keys(playerBlack.pieces)) {
    if (playerBlack.pieces[ind] === piece) {
      return true;
    } else {
      return false;
    }
  }
}
