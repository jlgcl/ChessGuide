import { board, boardBox } from "./index";

export function placePiece(gridNum, imgSrc) {
  const pieceImg = new Image();
  pieceImg.src = imgSrc;
  let boardArr = Array.from(boardBox);
  return boardArr[gridNum].appendChild(pieceImg);
}
