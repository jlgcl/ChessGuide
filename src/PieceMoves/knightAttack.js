import { playerCheck } from "./playerCheck";

export function knightAttack(
  moves,
  board,
  boardArr,
  currentIndex,
  targetIndex,
  piece,
  targetPiece
) {
  if (moves.find((move) => move === boardArr[targetIndex])) {
    // move to target location if target location is empty
    if (boardArr[targetIndex].innerHTML === "") {
      boardArr[currentIndex].innerHTML = "";

      // insert the piece to the target index
      let image = document.createElement("img");
      image.src = piece;
      boardArr[targetIndex].appendChild(image);
    }
    // move and attack the target piece if target location is occupied by enemy piece
    else if (
      boardArr[targetIndex].innerHTML !== "" &&
      boardArr[targetIndex].childNodes[0].getAttribute("src") !== undefined
    ) {
      targetPiece = boardArr[targetIndex].childNodes[0].getAttribute("src");
      if (
        (playerCheck(piece) && !playerCheck(targetPiece)) ||
        (!playerCheck(piece) && playerCheck(targetPiece))
      ) {
        boardArr[currentIndex].innerHTML = "";
        boardArr[targetIndex].innerHTML = "";
        let image = document.createElement("img");
        image.src = piece;
        boardArr[targetIndex].appendChild(image);
      }
    }
  }
}
