// instantiate board with all null's, meaning none are placed yet
// 0 === o
// 1 === x

var board = [];

for (var i = 0; i < 3; i++) {
    board.push(Array(3).fill(null));
  }

console.log(board);

// check for row/column/diagonal conflicts for o's & x's to see if there is a winner after each turn.