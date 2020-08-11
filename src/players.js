// import image sources
import kingBlack from "../pieces/kingBlack.png";
import queenBlack from "../pieces/queenBlack.png";
import bishopBlack from "../pieces/bishopBlack.png";
import knightBlack from "../pieces/knightBlack.png";
import castleBlack from "../pieces/castleBlack.png";
import pawnBlack from "../pieces/pawnBlack.png";
import kingWhite from "../pieces/kingWhite.png";
import queenWhite from "../pieces/queenWhite.png";
import bishopWhite from "../pieces/bishopWhite.png";
import knightWhite from "../pieces/knightWhite.png";
import castleWhite from "../pieces/castleWhite.png";
import pawnWhite from "../pieces/pawnWhite.png";

function Player(king, queen, bishop, knight, castle, pawn) {
  this.pieces = {
    king,
    queen,
    bishop,
    knight,
    castle,
    pawn,
  };
}

const playerBlack = new Player(
  kingBlack,
  queenBlack,
  bishopBlack,
  knightBlack,
  castleBlack,
  pawnBlack
);

const playerWhite = new Player(
  kingWhite,
  queenWhite,
  bishopWhite,
  knightWhite,
  castleWhite,
  pawnWhite
);

export { playerBlack, playerWhite };
