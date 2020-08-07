// import players...

export function initialPlacement() {
  for (let i = 0; i < board[1].length; i++) {
    boardPieces[1][i] = playerBlack.pieces[5];
  }
  for (let i = 0; i < board[6].length; i++) {
    boardPieces[6][i] = playerWhite.pieces[5];
  }

  //black main pieces
  boardPieces[0][0] = playerBlack.pieces[4];
  boardPieces[0][1] = playerBlack.pieces[3];
  boardPieces[0][2] = playerBlack.pieces[2];
  boardPieces[0][3] = playerBlack.pieces[1];
  boardPieces[0][4] = playerBlack.pieces[0];
  boardPieces[0][5] = playerBlack.pieces[2];
  boardPieces[0][6] = playerBlack.pieces[3];
  boardPieces[0][7] = playerBlack.pieces[4];

  //white main pieces
  boardPieces[7][0] = playerWhite.pieces[4];
  boardPieces[7][1] = playerWhite.pieces[3];
  boardPieces[7][2] = playerWhite.pieces[2];
  boardPieces[7][3] = playerWhite.pieces[1];
  boardPieces[7][4] = playerWhite.pieces[0];
  boardPieces[7][5] = playerWhite.pieces[2];
  boardPieces[7][6] = playerWhite.pieces[3];
  boardPieces[7][7] = playerWhite.pieces[4];
}
