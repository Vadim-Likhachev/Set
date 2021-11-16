/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Character from '../js/Character';
import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';
import Team from '../js/app';

test('Добавление персонажа', () => {
  const pers = new Bowman('Bow', 'Bowman');
  const team = new Team();
  team.add(pers);
  expect(team.members.has(pers)).toBeTruthy;
});

test('Добавление персонажа, который уже существует', () => {
  const pers = new Bowman('Bow', 'Bowman');
  const team = new Team();
  team.add(pers);
  expect(() => team.add(pers)).toThrow('Такой персонаж уже создан!');
});

test('Добавление двух персонажей', () => {
  const bow = new Bowman('Bow', 'Bowman');
  const zomb = new Zombie('Zomb', 'Zombie');
  const team = new Team();
  team.addAll(bow, zomb);
  expect(team.members.size).toBe(2);
});

test('конвертация Set в массив', () => {
  const bow = new Bowman('Bow', 'Bowman');
  const zomb = new Zombie('Zomb', 'Zombie');
  const team = new Team();
  team.addAll(bow, zomb);
  const received = team.toArray();
  const result = [
    {
      name: 'Bow',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 40,
      deffence: 10,
    },
    {
      name: 'Zomb',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      deffence: 10,
    },
  ];

  expect(received).toEqual(result);
});
