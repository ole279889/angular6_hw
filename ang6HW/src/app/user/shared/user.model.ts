export class User {
  constructor(readonly id: number, public family: string, public name: string, public surname: string = '') {
  }
}
