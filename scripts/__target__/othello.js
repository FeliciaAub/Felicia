'use strict';
var math = {};
var random = {};
var sys = {};
var time = {};
import {
  AssertionError,
  AttributeError,
  BaseException,
  DeprecationWarning,
  Exception,
  IndexError,
  IterableError,
  KeyError,
  NotImplementedError,
  RuntimeWarning,
  StopIteration,
  UserWarning,
  ValueError,
  Warning,
  __JsIterator__,
  __PyIterator__,
  __Terminal__,
  __add__,
  __and__,
  __call__,
  __class__,
  __envir__,
  __eq__,
  __floordiv__,
  __ge__,
  __get__,
  __getcm__,
  __getitem__,
  __getslice__,
  __getsm__,
  __gt__,
  __i__,
  __iadd__,
  __iand__,
  __idiv__,
  __ijsmod__,
  __ilshift__,
  __imatmul__,
  __imod__,
  __imul__,
  __in__,
  __init__,
  __ior__,
  __ipow__,
  __irshift__,
  __isub__,
  __ixor__,
  __jsUsePyNext__,
  __jsmod__,
  __k__,
  __kwargtrans__,
  __le__,
  __lshift__,
  __lt__,
  __matmul__,
  __mergefields__,
  __mergekwargtrans__,
  __mod__,
  __mul__,
  __ne__,
  __neg__,
  __nest__,
  __or__,
  __pow__,
  __pragma__,
  __proxy__,
  __pyUseJsNext__,
  __rshift__,
  __setitem__,
  __setproperty__,
  __setslice__,
  __sort__,
  __specialattrib__,
  __sub__,
  __super__,
  __t__,
  __terminal__,
  __truediv__,
  __withblock__,
  __xor__,
  abs,
  all,
  any,
  assert,
  bool,
  bytearray,
  bytes,
  callable,
  chr,
  copy,
  deepcopy,
  delattr,
  dict,
  dir,
  divmod,
  enumerate,
  filter,
  float,
  getattr,
  hasattr,
  input,
  int,
  isinstance,
  issubclass,
  len,
  list,
  map,
  max,
  min,
  object,
  ord,
  pow,
  print,
  property,
  py_TypeError,
  py_iter,
  py_metatype,
  py_next,
  py_reversed,
  py_typeof,
  range,
  repr,
  round,
  set,
  setattr,
  sorted,
  str,
  sum,
  tuple,
  zip
} from "./org.transcrypt.__runtime__.js";
import * as __module_sys__ from "./sys.js";
__nest__(sys, "", __module_sys__);
import * as __module_math__ from "./math.js";
__nest__(math, "", __module_math__);
import * as __module_time__ from "./time.js";
__nest__(time, "", __module_time__);
import * as __module_random__ from "./random.js";
__nest__(random, "", __module_random__);
var __name__ = "__main__";
export var SIZE = 6;
export var Stone = __class__("Stone", [object], {
  __module__: __name__,
  get __init__() {
    return __get__(this, function(self, row, col, state) {
      self.state = state;
      self.row = row;
      self.col = col;
      self.neighbors = dict({})
    })
  },
  get __repr__() {
    return __get__(this, function(self) {
      return str(self.state)
    })
  }
});
export var Board = __class__("Board", [object], {
  __module__: __name__,
  get __init__() {
    return __get__(this,
      function(self, size) {
        self.size = SIZE;
        self.stones = function() {
          var __accu0__ = [];
          for (var i = 0; i < size; i++) __accu0__.push(Stone(0, 0, '-'));
          return __accu0__
        }();
        for (var j = 0; j < SIZE; j++)
          for (var i = 0; i < SIZE; i++) self.insert(Stone(i, j, "-"));
        var middleLeft = int(self.size / 2 - 1);
        var middleRight = int(self.size / 2);
        var blackStoneOne = Stone(middleLeft, middleLeft, "B");
        var blackStoneTwo = Stone(middleRight, middleRight, "B");
        self.insert(blackStoneOne);
        self.insert(blackStoneTwo);
        var whiteStoneOne = Stone(middleLeft, middleRight, "W");
        var whiteStoneTwo =
          Stone(middleRight, middleLeft, "W");
        self.insert(whiteStoneOne);
        self.insert(whiteStoneTwo)
      })
  },
  get __deepcopy__() {
    return __get__(this, function(self, memodict) {
      if (typeof memodict == "undefined" || memodict != null && memodict.hasOwnProperty("__kwargtrans__")) var memodict = dict({});
      var copy_object = Board(SIZE);
      copy_object.size = self.size;
      for (var j = 0; j < SIZE; j++)
        for (var i = 0; i < SIZE; i++) {
          var stone = self.get_stone_at(i, j);
          if (stone.state == "B") copy_object.insert(Stone(i, j, "B"));
          else if (stone.state == "W") copy_object.insert(Stone(i,
            j, "W"));
          else copy_object.insert(Stone(i, j, "-"))
        }
      return copy_object
    })
  },
  get count() {
    return __get__(this, function(self, state) {
      var count = 0;
      for (var j = 0; j < SIZE; j++)
        for (var i = 0; i < SIZE; i++) {
          var stone = self.get_stone_at(i, j);
          if (stone.state == state) count++
        }
      return count
    })
  },
  get insert() {
    return __get__(this, function(self, stone) {

      self.stones[stone.row][stone.col] = stone
    })
  },
  get get_stone_at() {
    return __get__(this, function(self, row, col) {
      return self.stones[int(row)][int(col)]
    })
  },
  get neighbors_of() {
    return __get__(this,
      function(self, stone) {
        if (stone === null) return null;
        if (stone.row - 1 >= 0) stone.neighbors.py_update(dict({
          "NORTH": self.stones[stone.row - 1][stone.col]
        }));
        if (stone.row + 1 < self.size) stone.neighbors.py_update(dict({
          "SOUTH": self.stones[stone.row + 1][stone.col]
        }));
        if (stone.col - 1 >= 0) stone.neighbors.py_update(dict({
          "WEST": self.stones[stone.row][stone.col - 1]
        }));
        if (stone.col + 1 < self.size) stone.neighbors.py_update(dict({
          "EAST": self.stones[stone.row][stone.col + 1]
        }));
        if (stone.row - 1 >= 0 && stone.col - 1 >= 0) stone.neighbors.py_update(dict({
          "NORTHWEST": self.stones[stone.row -
            1][stone.col - 1]
        }));
        if (stone.row - 1 >= 0 && stone.col + 1 < self.size) stone.neighbors.py_update(dict({
          "NORTHEAST": self.stones[stone.row - 1][stone.col + 1]
        }));
        if (stone.row + 1 < self.size && stone.col - 1 >= 0) stone.neighbors.py_update(dict({
          "SOUTHWEST": self.stones[stone.row + 1][stone.col - 1]
        }));
        if (stone.row + 1 < self.size && stone.col + 1 < self.size) stone.neighbors.py_update(dict({
          "SOUTHEAST": self.stones[stone.row + 1][stone.col + 1]
        }));
        return stone.neighbors
      })
  },
  get __repr__() {
    return __get__(this, function(self) {
      var board = "\n\t  Column\nRow\t";
      var r = 0;
      for (var c = 0; c < self.size; c++) board += str(c) + " ";
      board += "\n";
      for (var col of list(self.stones)) {
        board += str(r) + "\t";
        for (var stone of col) board += str(stone) + " ";
        board += "\n";
        r++
      }
      return board
    })
  }
});
export var mini_max = function(board, depth, alpha, beta, maxPlayer) {
  if (typeof depth == "undefined" || depth != null && depth.hasOwnProperty("__kwargtrans__")) var depth = 2;
  if (typeof alpha == "undefined" || alpha != null && alpha.hasOwnProperty("__kwargtrans__")) var alpha = -Infinity;
  if (typeof beta == "undefined" || beta != null && beta.hasOwnProperty("__kwargtrans__")) var beta =
    Infinity;
  if (typeof maxPlayer == "undefined" || maxPlayer != null && maxPlayer.hasOwnProperty("__kwargtrans__")) var maxPlayer = true;
  if (maxPlayer == true) var moves = legal_moves(board, "W");
  else var moves = legal_moves(board, "B");
  if (depth == 0 || moves == null) return set_heuristic_value(board);
  else if (maxPlayer) {
    var value = -Infinity;
    for (var move of moves) {
      var futureBoard = board.__deepcopy__();
      apply_move(move.row, move.col, "W", futureBoard);
      var value = max(value, mini_max(futureBoard, depth - 1, alpha, beta, false));
      var alpha = max(alpha,
        value);
      if (alpha >= beta) break
    }
    return value
  } else {
    var value = Infinity;
    for (var move of moves) {
      var futureBoard = board.__deepcopy__();
      apply_move(move.row, move.col, "B", futureBoard);
      var value = min(value, mini_max(futureBoard, depth - 1, alpha, beta, true));
      var beta = min(beta, value);
      if (alpha >= beta) break
    }
    return value
  }
};
export var get_user_postion = function() {
  var row = int(input("Please Enter a row: "));
  var col = int(input("Please Enter a column: "));
  return tuple([row, col])
};
export var legal_moves = function(board, player) {
  var movesList = [];
  var enemyPieces = [];
  if (player == "W") var enemy = "B";
  else var enemy = "W";
  for (var i = 0; i < SIZE; i++)
    for (var j = 0; j < SIZE; j++) {
      var stone = board.get_stone_at(i, j);
      if (stone.state == enemy) enemyPieces.append(stone)
    }
  var check_directions = function(neighbors, directionOne, directionTwo) {
    if (!__in__(directionOne, neighbors)) return;
    if (!__in__(directionTwo, neighbors)) return;
    if (neighbors[directionOne].state == player)
      if (neighbors[directionTwo].state == "-" && !__in__(neighbors[directionTwo], movesList)) {
        movesList.append(neighbors[directionTwo]);
        return
      } else
        while (neighbors[directionTwo].state == enemy) {
          var moveNeighbors = board.neighbors_of(neighbors[directionTwo]);
          if (!__in__(directionTwo, moveNeighbors)) return;
          if (moveNeighbors[directionTwo].state == "-" && !__in__(moveNeighbors[directionTwo], movesList)) {
            movesList.append(moveNeighbors[directionTwo]);
            return
          }
          neighbors.py_update(dict([
            [directionTwo, moveNeighbors[directionTwo]]
          ]))
        }
    if (neighbors[directionTwo].state == player)
      if (neighbors[directionOne].state == "-" && !__in__(neighbors[directionOne], movesList)) {
        movesList.append(neighbors[directionOne]);
        return
      } else
        while (neighbors[directionOne].state == enemy) {
          var moveNeighbors = board.neighbors_of(neighbors[directionOne]);
          if (!__in__(directionOne, moveNeighbors)) return;
          if (moveNeighbors[directionOne].state == "-" && !__in__(moveNeighbors[directionOne], movesList)) {
            movesList.append(moveNeighbors[directionOne]);
            return
          }
          neighbors.py_update(dict([
            [directionOne, moveNeighbors[directionOne]]
          ]))
        }
  };
  for (var stone of enemyPieces) {
    check_directions(board.neighbors_of(stone), "NORTH", "SOUTH");
    check_directions(board.neighbors_of(stone),
      "EAST", "WEST");
    check_directions(board.neighbors_of(stone), "NORTHEAST", "SOUTHWEST");
    check_directions(board.neighbors_of(stone), "NORTHWEST", "SOUTHEAST")
  }
  movesList.py_sort(__kwargtrans__({
    key: function __lambda__(stone) {
      return tuple([stone.row, stone.col])
    }
  }));
  return movesList
};
export var place_stone = function(row, col, board, player) {
  var newStone = Stone(row, col, player);
  board.insert(newStone)
};
export var winner = function(board) {
  var whites = 0;
  var blacks = 0;
  var empty = 0;
  for (var j = 0; j < SIZE; j++)
    for (var i = 0; i < SIZE; i++)
      if (board.get_stone_at(i,
          j).state == "W") whites++;
      else if (board.get_stone_at(i, j).state == "B") blacks++;
  else empty++;
  if (blacks > whites) return "Black";
  else if (whites > blacks) return "White";
  else return "Tie"
};
export var convert_line = function(startStone, board) {
  var enemy = null;
  if (startStone.state === "B") var enemy = "W";
  else if (startStone.state === "W") var enemy = "B";
  var neighbors = board.neighbors_of(startStone);
  var flankStack = list(filter(function __lambda__(stone) {
    return stone !== null && stone[1].state == enemy
  }, neighbors.py_items()));
  while (len(flankStack) >
    0) {
    var flipList = [];
    var currentFlank = flankStack.pop(0);
    var flankDirection = currentFlank[0];
    var flankStone = currentFlank[1];
    while (flankStone.state == enemy) {
      flipList.append(flankStone);
      var flankStone = flankStone.neighbors.py_get(flankDirection);
      if (flankStone === null) return
    }
    if (flankStone.state == startStone.state)

      while (flipList && flipList.length) {
        var currentStone = flipList.pop();
        if (currentStone != null) {
          apply_move(currentStone.row, currentStone.col, startStone.state, board)
        }
      }
  }
};
export var valid = function(row, col) {
  if (row >= 0 && row < SIZE && col < SIZE && col >=
    0) return true;
  else return false
};
export var apply_move = function(row, col, player, board) {
  var stone = board.get_stone_at(row, col);
  stone.state = player;
  board.insert(stone);
  convert_line(stone, board)
};
export var set_heuristic_value = function(board) {
  var score = 0;
  score += board.count("W") / 100;
  score -= board.count("B") / 100;
  score += len(legal_moves(board, "W"));
  score -= len(legal_moves(board, "B"));
  var topLeftCorner = board.get_stone_at(0, 0);
  var topRightCorner = board.get_stone_at(0, SIZE - 1);
  var botLeftCorner = board.get_stone_at(SIZE -
    1, 0);
  var botRightCorner = board.get_stone_at(SIZE - 1, SIZE - 1);
  var whiteCornersCaptured = 0;
  var blackCornersCaptured = 0;
  if (topLeftCorner.state == "W") whiteCornersCaptured++;
  else if (topLeftCorner.state == "B") blackCornersCaptured++;
  if (botLeftCorner.state == "W") whiteCornersCaptured++;
  else if (botLeftCorner.state == "B") blackCornersCaptured++;
  if (topRightCorner.state == "W") whiteCornersCaptured++;
  else if (topRightCorner.state == "B") blackCornersCaptured++;
  if (botRightCorner.state == "W") whiteCornersCaptured++;
  else if (botRightCorner.state ==
    "B") blackCornersCaptured++;
  score += 10 * whiteCornersCaptured;
  score -= 10 * blackCornersCaptured;
  return score
};
export var pick_best_move = function(moves, board) {
  var bestMove = random.choice(moves);
  var bestValue = -math.inf;
  for (var move of moves) {
    var futureBoard = board.__deepcopy__();
    apply_move(move.row, move.col, "W", futureBoard);
    var value = mini_max(futureBoard);
    if (bestValue > value) {
      var bestMove = move;
      var value = bestValue
    }
  }
  return bestMove
};
export var play_game = function() {
  //sys.setrecursionlimit(1E3);
  var board = Board(SIZE);
  for (var i = 0; i < SIZE; i++)
    for (var j = 0; j < SIZE; j++) board.neighbors_of(board.get_stone_at(i, j));
  var gameInPlay = true;
  var player1 = true;
  var passedTurn = false;
  while (gameInPlay) {
    print(board);
    var moves = [];
    print("Black Stones: " + str(board.count("B")));
    print("White Stones: " + str(board.count("W")));
    if (player1 == true) {
      var moves = legal_moves(board, "B");
      for (var i of moves) print(i.row, i.col);
      if (moves === undefined || moves.length == 0) {
        var player1 = false;
        if (passedTurn == true) gameInPlay = false;
        else var passedTurn = true
      } else {
        var position = false;
        var passedTurn = false;
        while (position ==
          false) {
          var move = moves[Math.floor(Math.random() * moves.length)];
          console.log(moves)
          var row = move.row;
          var col = move.col;
          //time.sleep(2);
          if (valid(row, col)) {
            var playerMove = board.get_stone_at(row, col);
            if (__in__(playerMove, moves)) {
              apply_move(playerMove.row, playerMove.col, "B", board);
              var position = true;
              var player1 = false
            }
          }
        }
      }
    } else {
      var moves = legal_moves(board, "W");
      for (var i of moves) print(i.row, i.col);
      if (moves === undefined || moves.length == 0)
        if (passedTurn == true) gameInPlay == false;
        else {
          var passedTurn = true;
          var player1 = true
        }
      else {
        var passedTurn = false;
        var compMove = pick_best_move(moves, board);
        //time.sleep(2);
        if (valid(compMove.row, compMove.col)) {
          apply_move(compMove.row, compMove.col, "W", board);
          var player1 = true
        }
      }
    }

  }
  var whoWon = winner(board);
  if (whoWon == "Black" || whoWon == "White") print(whoWon + " Won");
  else print(whoWon);
//  time.sleep(10)
};
if (__name__ == "__main__") play_game();

//# sourceMappingURL=othello.map
