export default class AppError extends Error {
  public readonly statusCode: number;

  constructor(message: string, code: number = 500) {
    super(message);

    // Set the prototype explicitly — needed for `instanceof` to work correctly in TypeScript
    Object.setPrototypeOf(this, AppError.prototype);

    this.name = this.constructor.name;
    this.statusCode = code;
  }
}
