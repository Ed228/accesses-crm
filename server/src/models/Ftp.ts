export class Ftp {
  private _host: string
  private _login: string
  private _password: string

  constructor(host: string, login: string, password: string) {
    this._host = host
    this._login = login
    this._password = password
  }

  get host(): string {
    return this._host
  }

  get login(): string {
    return this._login
  }

  get password(): string {
    return this._password
  }

  set host(value: string) {
    this._host = value
  }

  set login(value: string) {
    this._login = value
  }

  set password(value: string) {
    this._password = value
  }
}