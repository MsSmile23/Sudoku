/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const arr = [];
  for (let i = 0; i < boardString.length; i += 9) {
    const newstr = [];
    for (let j = i; j < i + 9; j += 1) {
      newstr.push(boardString[j]);
    }
    arr.push(newstr);
  }
  function findEmptyCell(arrBoard) {
    for (let i = 0; i < arrBoard.length; i++) {
      for (let j = 0; j < arrBoard.length; j++) {
        if (arrBoard[i][j] === "-") return [i, j];
      }
    }
  }
  function checkArr(elem, index, array) {
    // Проверка массива на корректность значений в ячейках
    const [i, j] = index;
    // Проверка столбца
    for (let x = 0; x < 9; x++) {
      if (array[x][j] === elem && x !== i) {
        return false;
      }
    }
    // Проверка строки
    for (let x = 0; x < 9; x++) {
      if (array[i][x] === elem && x !== j) {
        return false;
      }
    }
    // Проверка блока
    const PathX = Math.floor(i / 3) * 3;
    const PathY = Math.floor(j / 3) * 3;
    for (let x = PathX; x < 3; x += 1) {
      for (let y = PathY; y < 3; y += 1) {
        if (array[x][y] === elem && x !== i && y !== j) {
          return false;
        }
      }
    }
    return true;
  }
  function match() {
    const emptyCell = findEmptyCell(arr);
    if (emptyCell === undefined) {
      return true;
    }
    for (let value = 1; value <= arr.length; value++) {
      const val = value.toString();
      const isValid = checkArr(val, emptyCell, arr);
      if (isValid) {
        const [i, j] = emptyCell;
        arr[i][j] = val;
        if (match()) {
          return true;
        }
        arr[i][j] = '-';
      }
    }
    return false;
  }
  match();
  return arr;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  return !board.flat().includes("-");
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  return board.map((el) => el.join(" ")).join("\n");
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};