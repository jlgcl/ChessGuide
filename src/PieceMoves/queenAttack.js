const { playerCheck } = require("./playerCheck");

// attack moves for castle pieces

export function queenStraightAttack(
  piece,
  boardArr,
  currentIndex,
  targetIndex
) {
  // if the current piece is black
  if (playerCheck(piece)) {
    // if the target piece is white
    if (!playerCheck(boardArr[targetIndex].childNodes[0].getAttribute("src"))) {
      boardArr[currentIndex].innerHTML = "";
      boardArr[targetIndex].innerHTML = "";
      let image = document.createElement("img");
      image.src = piece;
      boardArr[targetIndex].appendChild(image);
    }
  }
  // if the current piece is white
  else if (!playerCheck(piece)) {
    // if the target piece is black
    if (playerCheck(boardArr[targetIndex].childNodes[0].getAttribute("src"))) {
      boardArr[currentIndex].innerHTML = "";
      boardArr[targetIndex].innerHTML = "";
      let image = document.createElement("img");
      image.src = piece;
      boardArr[targetIndex].appendChild(image);
    }
  }
}
