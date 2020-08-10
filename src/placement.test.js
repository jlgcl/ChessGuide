const placement = require("./placement");

test("testing chess piece image source", () => {
  placement(3, "../pieces/knightBlack.png");
  expect(boardBox[gridNum - 1].childNode).toBe(Image);
});
