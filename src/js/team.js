export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  [Symbol.iterator]() {
    const members = [...this.members];
    const number = members.length;
    let current = 0;

    return {
      next() {
        if (current <= number) {
          const member = members[current];
          current += 1;
          return {
            done: false,
            value: member,
          };
        }
        return { done: true };
      },
    };
  }
}
