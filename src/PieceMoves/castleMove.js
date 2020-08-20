import { playerWhite, playerBlack } from "../players";
import { board, boardArr } from "../index";
import { indexFinder } from "../indexFinder";
import { playerCheck } from "./playerCheck";

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

  if (current_j == target_j) {
    for (let i = current_i; i < target_i; i++) {
      if (boardArr[board[i][target_j]].innerHTML == "") {
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

  if (current_i == target_i) {
    for (let j = current_j; i < target_j; j++) {
      if (boardArr[board[current_i][j]].innerHTML == "") {
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
}
