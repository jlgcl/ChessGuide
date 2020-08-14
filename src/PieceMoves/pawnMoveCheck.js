// checks if another piece is blocking the move path
export function pawnMoveCheck(
  playerDet,
  board,
  boardArr,
  current_i,
  current_j,
  target_i
) {
  let k = current_i;
  while (k < target_i && playerDet) {
    k++;
    if (boardArr[board[k][current_j]].innerHTML !== "") {
      return false;
    } else {
      return true;
    }
  }

  while (k > target_i && !playerDet) {
    k--;
    if (boardArr[board[k][current_j]].innerHTML !== "") {
      return false;
    } else {
      return true;
    }
  }
}
