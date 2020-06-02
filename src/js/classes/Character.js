/* eslint-disable no-underscore-dangle */
export default class Character {
  constructor(name) {
    this.name = name;
    this.defaultAttack = null;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  set attack(distance) {
    let result = this.defaultAttack - 10 * (distance - 1);
    if (this.stoned === true) {
      result -= Math.log2(distance) * 5;
    }
    this._attack = Math.round(result);
  }

  get attack() {
    return this._attack;
  }
}
