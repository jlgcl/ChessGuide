/* checkmate implementation:
    - from current black king position, check:
        - if diagonally, there are no black pieces blocking the path & there are white pieces: bishop and/or queen OR pawn (if one space away)
        - if horizontally/vertically, there are no black pieces blocking the path & there are white pieces: castle and/or queen
        - if knight moves space, if there is/are white knight
*/

import {
  board,
  boardArr
} from "../index.js";
import {
  pieceCheck
} from "../pieceCheck";
import {
  playerCheck
} from "./playerCheck";
import {
  indexFinder
} from "../indexFinder";

export function checkState(checkSig, piece, currentIndex, targetIndex) {
  // find grid where kings are located
  // not .map()
  let blackKingPos = boardArr.find((grid) => {
    if (grid.childNodes[0]) {
      if (
        pieceCheck(grid.childNodes[0].getAttribute("src")) === "king" &&
        playerCheck(grid.childNodes[0].getAttribute("src"))
      ) {
        return grid;
      }
    }
  });

  let whiteKingPos = boardArr.find((grid) => {
    if (grid.childNodes[0]) {
      if (
        pieceCheck(grid.childNodes[0].getAttribute("src")) === "king" &&
        !playerCheck(grid.childNodes[0].getAttribute("src"))
      ) {
        return grid;
      }
    }
  });

  // set grid coordinates (i, j) for kings' locations
  let blackInd = indexFinder(board, boardArr.indexOf(blackKingPos));
  let whiteInd = indexFinder(board, boardArr.indexOf(whiteKingPos));

  // check horizontal/vertical (BLACK)
  let black_j = blackInd.j;
  let checkStatus = "";
  //let blackPos = boardArr[board[blackInd.i][black_j]]; <- can't use inside the while loop since decrementing black_j

  // check left of black king at white turn

  // modularize & connect with king movements for checkmate condition
  if (blackInd.j >= 0) {
    while (black_j >= 0) {
      //console.log(boardArr[board[blackInd.i][black_j]]);
      if (boardArr[board[blackInd.i][black_j]].innerHTML !== "") {
        //console.log(playerCheck(boardArr[board[blackInd.i][black_j]].childNodes[0].getAttribute("src")))
        if (
          !playerCheck(boardArr[board[blackInd.i][black_j]].childNodes[0].getAttribute("src")) &&
          (pieceCheck(boardArr[board[blackInd.i][black_j]].childNodes[0].getAttribute("src")) === "castle" ||
            pieceCheck(boardArr[board[blackInd.i][black_j]].childNodes[0].getAttribute("src")) === "queen")
        ) {
          console.log("test")
          // return indicator value; do this for all cases so that if it check is resulted after king's every movement, then it's a checkmate.
          checkStatus = true; // figured out a way to return condition to movePiece.js
        }
      }
      black_j--;
    }
  }

}