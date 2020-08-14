import { playerBlack } from "../players.js";

export function playerCheck(piece) {
  // test if the piece belongs to playerBlack
  for (const ind of Object.keys(playerBlack.pieces)) {
    if (Object.values(playerBlack.pieces).includes(piece)) {
      return true;
    } else {
      return false;
    }
  }
}
