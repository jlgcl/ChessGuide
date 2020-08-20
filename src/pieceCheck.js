import { playerWhite, playerBlack } from "./players.js";

export function pieceCheck(piece) {
  // test if the piece belongs to playerBlack
  for (const ind of Object.keys(playerBlack.pieces)) {
    if (playerBlack.pieces[ind] == piece) return ind;
  }
  for (const ind of Object.keys(playerWhite.pieces)) {
    if (playerWhite.pieces[ind] == piece) return ind;
  }
}
