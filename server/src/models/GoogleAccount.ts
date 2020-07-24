export class GoogleAccount {
  private _login: string
  private _password: string
  private _phone?: number
  private _googleAccountType?: GoogleAccountType

  constructor(login: string,
              password: string,
              phone?: number,
              googleAccountType?: GoogleAccountType) {
    this._login = login
    this._password = password
    this._phone = phone
    this._googleAccountType = googleAccountType
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get phone(): number | undefined {
    return this._phone;
  }

  set phone(value: number | undefined) {
    this._phone = value;
  }

  get googleAccountType(): GoogleAccountType | undefined {
    return this._googleAccountType;
  }

  set googleAccountType(value: GoogleAccountType | undefined) {
    this._googleAccountType = value;
  }
}