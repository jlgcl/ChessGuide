import { board, boardBox } from "./index";

export function placePiece(gridNum, imgSrc) {
  const pieceImg = new Image();
  pieceImg.src = imgSrc;
  return boardBox[gridNum - 1].appendChild(pieceImg);
}
