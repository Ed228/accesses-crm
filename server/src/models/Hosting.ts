export class Hosting {
  private _link: string
  private _login: string
  private _phone: string
  private _password: string

  constructor(link: string, login: string, phone: string, password: string) {
    this._link = link;
    this._login = login;
    this._phone = phone;
    this._password = password;
  }

  get link(): string {
    return this._link;
  }

  get login(): string {
    return this._login;
  }

  get phone(): string {
    return this._phone;
  }

  get password(): string {
    return this._password;
  }

  set link(value: string) {
    this._link = value;
  }

  set login(value: string) {
    this._login = value;
  }

  set phone(value: string) {
    this._phone = value;
  }

  set password(value: string) {
    this._password = value;
  }
}