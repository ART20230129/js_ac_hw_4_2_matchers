/*
//контрольный тест для проверки работоспособности
test('basic test', () => {
  expect(4).toBe(4);
});
*/

import sortHeroes from '../index';

test('sorting by health', () => {
  const noSortedHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroes(noSortedHeroes)).toEqual(result);
});
