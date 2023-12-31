const {
  solve,
  isSolved,
  prettyBoard,
} = require('../sudoku.js');

describe('Проверка функциональности судоку:', () => {
  let puzzle;
  it('Проверка реакции на решенный судоку', () => {
    const arr = [['4', '7', '5', '9', '3', '6', '2', '8', '1'], ['9', '3', '2', '8', '5', '1', '7', '6', '4'], ['6', '8', '1', '2', '7', '4', '3', '5', '9'], ['5', '1', '7', '4', '9', '2', '8', '3', '6'], ['3', '4', '9', '7', '6', '8', '1', '2', '5'], ['2', '6', '8', '3', '1', '5', '4', '9', '7'], ['1', '5', '3', '6', '8', '7', '9', '4', '2'], ['7', '9', '4', '5', '2', '3', '6', '1', '8'], ['8', '2', '6', '1', '4', '9', '5', '7', '3']];
    expect(isSolved(arr)).toEqual(true);
  });
  it('Проверка реакции на нерешенный судоку', () => {
    arr = [['4', '7', '5', '9', '3', '6', '2', '8', '1'], ['9', '3', '2', '-', '5', '1', '7', '-', '4'], ['6', '8', '1', '2', '7', '4', '3', '5', '9'], ['5', '1', '7', '4', '9', '2', '8', '3', '6'], ['3', '4', '9', '7', '6', '8', '1', '2', '5'], ['2', '6', '8', '3', '1', '5', '4', '9', '7'], ['1', '5', '3', '6', '8', '7', '9', '4', '2'], ['7', '9', '4', '5', '2', '3', '6', '1', '8'], ['8', '2', '6', '1', '4', '9', '5', '7', '3']];
    expect(isSolved(arr)).toEqual(false);
  });
});
describe('Проверка решения судоку:', () => {
  let puzzle = '';
  it('Задача № 1', () => {
    puzzle = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
    expect(solve(puzzle)).toEqual([['1', '4', '5', '8', '9', '2', '6', '7', '3'], ['8', '9', '3', '1', '7', '6', '4', '2', '5'], ['2', '7', '6', '4', '3', '5', '8', '1', '9'], ['5', '1', '9', '2', '4', '7', '3', '8', '6'], ['7', '6', '2', '5', '8', '3', '1', '9', '4'], ['3', '8', '4', '9', '6', '1', '7', '5', '2'], ['9', '5', '7', '6', '1', '4', '2', '3', '8'], ['4', '3', '8', '7', '2', '9', '5', '6', '1'], ['6', '2', '1', '3', '5', '8', '9', '4', '7']]);
  });
  it('Задача № 2', () => {
    puzzle = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
    expect(solve(puzzle)).toEqual([['4', '7', '5', '9', '3', '6', '2', '8', '1'], ['9', '3', '2', '8', '5', '1', '7', '6', '4'], ['6', '8', '1', '2', '7', '4', '3', '5', '9'], ['5', '1', '7', '4', '9', '2', '8', '3', '6'], ['3', '4', '9', '7', '6', '8', '1', '2', '5'], ['2', '6', '8', '3', '1', '5', '4', '9', '7'], ['1', '5', '3', '6', '8', '7', '9', '4', '2'], ['7', '9', '4', '5', '2', '3', '6', '1', '8'], ['8', '2', '6', '1', '4', '9', '5', '7', '3']]);
  });
  it('Задача № 3', () => {
    puzzle = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9';
    expect(solve(puzzle)).toEqual([['2', '9', '3', '5', '4', '1', '6', '8', '7'], ['7', '1', '8', '2', '9', '6', '4', '5', '3'], ['6', '5', '4', '7', '3', '8', '9', '1', '2'], ['9', '7', '2', '8', '1', '3', '5', '6', '4'], ['8', '2', '6', '4', '5', '9', '3', '7', '1'], ['5', '3', '1', '9', '6', '7', '2', '4', '8'], ['3', '6', '9', '1', '7', '4', '8', '2', '5'], ['1', '4', '5', '3', '8', '2', '7', '9', '6'], ['4', '8', '7', '6', '2', '5', '1', '3', '9']]);
  });
  it('Задача № 4', () => {
    puzzle = '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-';
    expect(solve(puzzle)).toEqual([['7', '8', '3', '4', '2', '6', '9', '1', '5'], ['9', '4', '6', '5', '1', '8', '3', '2', '7'], ['5', '2', '1', '3', '7', '9', '8', '4', '6'], ['6', '5', '8', '1', '9', '7', '2', '3', '4'], ['2', '7', '9', '6', '4', '3', '5', '8', '1'], ['1', '3', '4', '8', '5', '2', '7', '6', '9'], ['3', '6', '5', '9', '8', '4', '1', '7', '2'], ['4', '1', '7', '2', '3', '5', '6', '9', '8'], ['8', '9', '2', '7', '6', '1', '4', '5', '3']]);
  });
  it('Задача № 5', () => {
    puzzle = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';
    expect(solve(puzzle)).toEqual([['6', '4', '8', '7', '3', '2', '9', '1', '5'], ['2', '7', '5', '1', '8', '9', '4', '6', '3'], ['3', '1', '9', '5', '6', '4', '8', '2', '7'], ['4', '8', '6', '3', '2', '5', '7', '9', '1'], ['9', '2', '7', '6', '1', '8', '3', '5', '4'], ['5', '3', '1', '9', '4', '7', '6', '8', '2'], ['8', '6', '4', '2', '7', '1', '5', '3', '9'], ['7', '5', '2', '8', '9', '3', '1', '4', '6'], ['1', '9', '3', '4', '5', '6', '2', '7', '8']]);
  });
  it('Задача № 6', () => {
    puzzle = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
    expect(solve(puzzle)).toEqual([
      [
        '3', '2', '7',
        '6', '8', '9',
        '1', '4', '5',
      ],
      [
        '8', '4', '6',
        '5', '3', '1',
        '7', '2', '9',
      ],
      [
        '1', '5', '9',
        '3', '2', '4',
        '6', '7', '8',
      ],
      [
        '4', '1', '3',
        '8', '9', '7',
        '2', '5', '6',
      ],
      [
        '2', '7', '8',
        '1', '6', '5',
        '3', '9', '4',
      ],
      [
        '7', '9', '5',
        '2', '4', '6',
        '8', '3', '1',
      ],
      [
        '6', '8', '4',
        '7', '5', '2',
        '9', '1', '3',
      ],
      [
        '5', '3', '1',
        '9', '7', '8',
        '4', '6', '2',
      ],
      [
        '9', '6', '2',
        '4', '1', '3',
        '5', '8', '7',
      ],
    ]);
  });
  it('Задача № 7', () => {
    puzzle = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--';
    expect(solve(puzzle)).toEqual([
      [
        '1', '3', '9',
        '5', '2', '7',
        '8', '6', '4',
      ],
      [
        '5', '6', '4',
        '2', '7', '3',
        '9', '1', '8',
      ],
      [
        '2', '7', '8',
        '4', '1', '9',
        '3', '5', '6',
      ],
      [
        '7', '9', '2',
        '8', '5', '6',
        '1', '4', '3',
      ],
      [
        '3', '2', '6',
        '9', '8', '5',
        '4', '7', '1',
      ],
      [
        '4', '5', '3',
        '1', '6', '8',
        '2', '9', '7',
      ],
      [
        '8', '4', '5',
        '6', '9', '1',
        '7', '3', '2',
      ],
      [
        '9', '8', '1',
        '7', '3', '4',
        '6', '2', '5',
      ],
      [
        '6', '1', '7',
        '3', '4', '2',
        '5', '8', '9',
      ],
    ]);
  });
  it('Задача № 8', () => {
    puzzle = '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7';
    expect(solve(puzzle)).toEqual([
      [
        '3', '9', '6',
        '2', '4', '5',
        '7', '8', '1',
      ],
      [
        '1', '2', '8',
        '3', '6', '9',
        '5', '7', '4',
      ],
      [
        '5', '7', '4',
        '8', '1', '2',
        '3', '9', '6',
      ],
      [
        '2', '8', '7',
        '9', '5', '1',
        '6', '4', '3',
      ],
      [
        '9', '3', '1',
        '4', '8', '7',
        '2', '6', '5',
      ],
      [
        '4', '6', '5',
        '7', '2', '3',
        '9', '1', '8',
      ],
      [
        '7', '1', '2',
        '6', '3', '8',
        '4', '5', '9',
      ],
      [
        '6', '5', '9',
        '1', '7', '4',
        '8', '3', '2',
      ],
      [
        '8', '4', '3',
        '5', '9', '6',
        '1', '2', '7',
      ],
    ]);
  });
});
