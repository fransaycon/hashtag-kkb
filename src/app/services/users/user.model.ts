class User {
  private name: string = null;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export default User;
