"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkState = checkState;

var _index = require("../index.js");

var _pieceCheck = require("../pieceCheck");

var _playerCheck = require("./playerCheck");

var _indexFinder = require("../indexFinder");

/* checkmate implementation:
    - from current black king position, check:
        - if diagonally, there are no black pieces blocking the path & there are white pieces: bishop and/or queen OR pawn (if one space away)
        - if horizontally/vertically, there are no black pieces blocking the path & there are white pieces: castle and/or queen
        - if knight moves space, if there is/are white knight
*/
function checkState(piece) {
  // find grid where kings are located
  // not .map()
  var blackKingPos = _index.boardArr.find(function (grid) {
    if (grid.childNodes[0]) {
      if ((0, _pieceCheck.pieceCheck)(grid.childNodes[0].getAttribute("src")) === "king" && (0, _playerCheck.playerCheck)(grid.childNodes[0].getAttribute("src"))) {
        return grid;
      }
    }
  });

  var whiteKingPos = _index.boardArr.find(function (grid) {
    if (grid.childNodes[0]) {
      if ((0, _pieceCheck.pieceCheck)(grid.childNodes[0].getAttribute("src")) === "king" && !(0, _playerCheck.playerCheck)(grid.childNodes[0].getAttribute("src"))) {
        return grid;
      }
    }
  }); // set grid coordinates (i, j) for kings' locations


  var blackInd = (0, _indexFinder.indexFinder)(_index.board, _index.boardArr.indexOf(blackKingPos));
  var whiteInd = (0, _indexFinder.indexFinder)(_index.board, _index.boardArr.indexOf(whiteKingPos)); // check horizontal/vertical (BLACK)

  var black_j = blackInd.j; //let blackPos = boardArr[board[blackInd.i][black_j]]; <- can't use inside the while loop since decrementing black_j
  // check left of black king at white turn

  if (blackInd.j >= 0) {
    while (black_j >= 0) {
      console.log(_index.boardArr[_index.board[blackInd.i][black_j]], _index.boardArr[_index.board[blackInd.i][black_j]].childNodes[0].getAttribute("src"));

      if (_index.boardArr[_index.board[blackInd.i][black_j]].innerHTML !== "" && !(0, _playerCheck.playerCheck)(piece) && (!(0, _pieceCheck.pieceCheck)(_index.boardArr[_index.board[blackInd.i][black_j]].childNodes[0].getAttribute("src")) === "castle" || !(0, _pieceCheck.pieceCheck)(_index.boardArr[_index.board[blackInd.i][black_j]].childNodes[0].getAttribute("src")) === "queen")) {
        console.log("alert");
      }

      black_j--;
      console.log(black_j);
    }
  }
}