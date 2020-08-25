// functions to move the castle pieces
import { playerCheck } from "./playerCheck";
import { castleAttack } from "./castleAttack";

function currentILess(
  current_i,
  target_i,
  target_j,
  piece,
  currentIndex,
  targetIndex,
  board,
  boardArr
) {
  let count = 0;
  // increment counter if the grid between current to target is empty
  for (let i = current_i; i < target_i; i++) {
    if (boardArr[board[i][target_j]].innerHTML === "") {
      count++;
    }
  }
  // if the count matches & the target grid is empty
  if (
    target_i - current_i === count + 1 &&
    boardArr[targetIndex].innerHTML === ""
  ) {
    count = 0;
    boardArr[currentIndex].innerHTML = "";

    // insert the piece to the target index
    let image = document.createElement("img");
    image.src = piece;
    boardArr[targetIndex].appendChild(image);
  }
  // if the count matches & the target grid is NOT empty (check attack & attack)
  else if (
    target_i - current_i === count + 1 &&
    boardArr[targetIndex].innerHTML !== ""
  ) {
    castleAttack(piece, boardArr, currentIndex, targetIndex);
  }
}

function currentIMore(
  current_i,
  target_i,
  target_j,
  piece,
  currentIndex,
  targetIndex,
  board,
  boardArr
) {
  let count = 0;
  for (let i = current_i; i > target_i; i--) {
    // counter to check if all the cells between target_j - current_j have no piece.
    if (boardArr[board[i][target_j]].innerHTML === "") {
      count++;
    }
  }
  if (
    current_i - target_i === count + 1 &&
    boardArr[targetIndex].innerHTML === ""
  ) {
    count = 0;
    boardArr[currentIndex].innerHTML = "";

    // insert the piece to the target index
    let image = document.createElement("img");
    image.src = piece;
    boardArr[targetIndex].appendChild(image);
  } else if (
    current_i - target_i === count + 1 &&
    boardArr[targetIndex].innerHTML !== ""
  ) {
    castleAttack(piece, boardArr, currentIndex, targetIndex);
  }
}

function currentJLess(
  current_i,
  current_j,
  target_j,
  piece,
  currentIndex,
  targetIndex,
  board,
  boardArr
) {
  let count = 0;
  for (let j = current_j; j < target_j; j++) {
    if (boardArr[board[current_i][j]].innerHTML === "") {
      count++;
    }
  }
  if (
    target_j - current_j === count + 1 &&
    boardArr[targetIndex].innerHTML === ""
  ) {
    count = 0;
    boardArr[currentIndex].innerHTML = "";

    // insert the piece to the target index
    let image = document.createElement("img");
    image.src = piece;
    boardArr[targetIndex].appendChild(image);
  } else if (
    target_j - current_j === count + 1 &&
    boardArr[targetIndex].innerHTML !== ""
  ) {
    castleAttack(piece, boardArr, currentIndex, targetIndex);
  }
}

function currentJMore(
  current_i,
  current_j,
  target_j,
  piece,
  currentIndex,
  targetIndex,
  board,
  boardArr
) {
  let count = 0;
  for (let j = current_j; j > target_j; j--) {
    if (boardArr[board[current_i][j]].innerHTML === "") {
      count++;
    }
  }
  if (
    current_j - target_j === count + 1 &&
    boardArr[targetIndex].innerHTML === ""
  ) {
    boardArr[currentIndex].innerHTML = "";

    // insert the piece to the target index
    let image = document.createElement("img");
    image.src = piece;
    boardArr[targetIndex].appendChild(image);
  } else if (
    current_j - target_j === count + 1 &&
    boardArr[targetIndex].innerHTML !== ""
  ) {
    castleAttack(piece, boardArr, currentIndex, targetIndex);
  }
}

export { currentILess, currentIMore, currentJLess, currentJMore };
