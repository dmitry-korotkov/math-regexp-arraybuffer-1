import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.defaultAttack = 150;
  }
}
