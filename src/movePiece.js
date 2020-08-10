import { playerBlack, playerwhite } from "players.js";
import { board, boardBox } from "index.js";

export function moviePiece(piece, grid) {
  let boardArr = Array.from(boardBox);

  let boardIndex = boardArr.map((gridIndex) => {
    if (gridIndex == grid) {
      return gridIndex;
    }
  });
}

function pawnMove(index, boardLoc) {}
