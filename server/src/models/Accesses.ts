import {IAccesses} from "./interfaces/IAccesses";

export class Accesses implements IAccesses {
  clientName?: string
  message?: string
  readonly creatureDate?: Date
  email?: string | string[]
  phone?: string

  constructor(clientName?: string, message?: string, email?: string | string[],
                phone?: string) {
    this.creatureDate = new Date();
    this.email = email;
    this.message = message;
    this.clientName = clientName;
    this.phone = phone
  }
}
