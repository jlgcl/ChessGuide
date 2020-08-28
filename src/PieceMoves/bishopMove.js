import { indexFinder } from "../indexFinder";
import { playerCheck } from "./playerCheck";
import { board } from "../index.js";

export function bishopMove(piece, boardArr, currentIndex, targetIndex) {
  let current_i = indexFinder(board, currentIndex).i;
  let current_j = indexFinder(board, currentIndex).j;
  let target_i = indexFinder(board, targetIndex).i;
  let target_j = indexFinder(board, targetIndex).j;
  let count = 0;
  let targetPiece = "";

  // can't modularized move methods

  ///// Move: DOWN-RIGHT /////
  if (current_i < target_i && current_j < target_j) {
    for (
      let i = current_i, j = current_j;
      i < target_i, j < target_j;
      i++, j++
    ) {
      // if the piece is black && target is blank: MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (target_i - current_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is black & target is a white piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (!playerCheck(targetPiece) && target_i - current_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          boardArr[targetIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }

      // if the piece is white & target is blank : MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (target_i - current_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is white & target is a black piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (playerCheck(targetPiece) && target_i - current_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          boardArr[targetIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
    }
  }

  ///// Move: DOWN-LEFT /////
  if (current_i < target_i && current_j > target_j) {
    for (
      let i = target_i, j = target_j;
      i > current_i, j < current_j;
      i--, j++
    ) {
      // if the piece is black & target is blank: MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (target_i - current_i === count) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is black & target is a white piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (!playerCheck(targetPiece) && target_i - current_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          boardArr[targetIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }

      // if the piece is white & target is blank: MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (target_i - current_i === count) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is white & target is a black piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (playerCheck(targetPiece) && target_i - current_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          boardArr[targetIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
    }
  }

  ///// Move: UP-RIGHT /////
  if (current_i > target_i && current_j < target_j) {
    for (
      let i = current_i, j = current_j;
      i > target_i, j < target_j;
      i--, j++
    ) {
      // if the piece is white & the target is blank: MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (current_i - target_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is white & target is a black piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (playerCheck(targetPiece) && current_i - target_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          boardArr[targetIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }

      // if the piece is black & target is blank: MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (current_i - target_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is black & target is a white piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (!playerCheck(targetPiece) && current_i - target_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          boardArr[targetIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
    }
  }

  ///// Move UP-LEFT /////
  if (current_i > target_i && current_j > target_j) {
    for (
      let i = current_i, j = current_j;
      i > target_i, j > target_j;
      i--, j--
    ) {
      // if the piece is white & the target is blank: MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (current_i - target_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is white & the target is a black piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        !playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (playerCheck(targetPiece) && current_i - target_i === count + 1) {
          boardArr[targetIndex].innerHTML = "";
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }

      // if the piece is black & the target is blank: MOVE
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML === "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        if (current_i - target_i === count + 1) {
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
      // if the piece is black & the target is a white piece: ATTACK
      if (
        boardArr[targetIndex] !== undefined &&
        boardArr[targetIndex].innerHTML !== "" &&
        playerCheck(piece)
      ) {
        if (boardArr[board[i][j]].innerHTML === "") {
          count++;
        }
        targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
        if (!playerCheck(targetPiece) && current_i - target_i === count + 1) {
          boardArr[targetIndex].innerHTML = "";
          boardArr[currentIndex].innerHTML = "";
          let image = document.createElement("img");
          image.src = piece;
          boardArr[targetIndex].appendChild(image);
        }
      }
    }
  }
}
