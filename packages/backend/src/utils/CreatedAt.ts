export class CreatedAt {
  private constructor(public readonly value: string) {}

  static new(): CreatedAt {
    return new CreatedAt(new Date().toISOString());
  }

  static from(value: string): CreatedAt {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
    return new CreatedAt(date.toISOString());
  }
}
