import { playerBlack, playerWhite } from "./players";
import { board, boardBox } from "./index";
import { placePiece } from "./placement";

export function initialPlacement() {
  for (let i = 0; i < board[1].length; i++) {
    placePiece(board[1][i], playerBlack.pieces.pawn);
  }
  for (let i = 0; i < board[6].length; i++) {
    placePiece(board[6][i], playerWhite.pieces.pawn);
  }

  //black main pieces
  placePiece(board[0][0], playerBlack.pieces.castle);
  placePiece(board[0][1], playerBlack.pieces.knight);
  placePiece(board[0][2], playerBlack.pieces.bishop);
  placePiece(board[0][3], playerBlack.pieces.queen);
  placePiece(board[0][4], playerBlack.pieces.king);
  placePiece(board[0][5], playerBlack.pieces.bishop);
  placePiece(board[0][6], playerBlack.pieces.knight);
  placePiece(board[0][7], playerBlack.pieces.castle);

  //white main pieces
  placePiece(board[7][0], playerWhite.pieces.castle);
  placePiece(board[7][1], playerWhite.pieces.knight);
  placePiece(board[7][2], playerWhite.pieces.bishop);
  placePiece(board[7][3], playerWhite.pieces.queen);
  placePiece(board[7][4], playerWhite.pieces.king);
  placePiece(board[7][5], playerWhite.pieces.bishop);
  placePiece(board[7][6], playerWhite.pieces.knight);
  placePiece(board[7][7], playerWhite.pieces.castle);
}
