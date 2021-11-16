export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(pers) {
    if (this.members.has(pers)) {
      throw new Error('Такой персонаж уже создан!');
    } else {
      this.members.add(pers);
    }
  }

  addAll(...pers) {
    pers.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
