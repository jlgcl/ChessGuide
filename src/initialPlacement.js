import { playerBlack, playerWhite } from "./players";
import { board, boardBox } from "./index";
import { placePiece } from "./placement";

export function initialPlacement() {
  for (let i = 0; i < board[1].length; i++) {
    placePiece(board[1][i], playerBlack.pieces[5]);
  }
  for (let i = 0; i < board[6].length; i++) {
    placePiece(board[6][i], playerWhite.pieces[5]);
  }

  //black main pieces
  placePiece(board[0][0], playerBlack.pieces[4]);
  placePiece(board[0][1], playerBlack.pieces[3]);
  placePiece(board[0][2], playerBlack.pieces[2]);
  placePiece(board[0][3], playerBlack.pieces[1]);
  placePiece(board[0][4], playerBlack.pieces[0]);
  placePiece(board[0][5], playerBlack.pieces[2]);
  placePiece(board[0][6], playerBlack.pieces[3]);
  placePiece(board[0][7], playerBlack.pieces[4]);

  //white main pieces
  placePiece(board[7][0], playerWhite.pieces[4]);
  placePiece(board[7][1], playerWhite.pieces[3]);
  placePiece(board[7][2], playerWhite.pieces[2]);
  placePiece(board[7][3], playerWhite.pieces[1]);
  placePiece(board[7][4], playerWhite.pieces[0]);
  placePiece(board[7][5], playerWhite.pieces[2]);
  placePiece(board[7][6], playerWhite.pieces[3]);
  placePiece(board[7][7], playerWhite.pieces[4]);
}
