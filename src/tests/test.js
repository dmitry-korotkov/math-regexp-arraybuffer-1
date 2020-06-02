import Daemon from '../js/classes/Daemon';
import Magician from '../js/classes/Magician';

test('get value attack of Daemon hero without stoned', () => {
  const hero = new Daemon('roger');
  hero.attack = 3;
  const result = hero.attack;
  expect(result).toBe(80);
});

test('get value attack of Daemon hero with stoned', () => {
  const hero = new Daemon('roger');
  hero.stoned = true;
  hero.attack = 8;
  const result = hero.attack;
  expect(result).toBe(15);
});

test('get value attack of Magician hero without stoned', () => {
  const hero = new Magician('roger');
  hero.attack = 5;
  const result = hero.attack;
  expect(result).toBe(110);
});

test('get value attack of Magician hero with stoned', () => {
  const hero = new Magician('roger');
  hero.stoned = true;
  hero.attack = 4;
  const result = hero.attack;
  expect(result).toBe(110);
});
