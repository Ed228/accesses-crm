import {IAccesses} from "./interfaces/IAccesses";

export class Accesses implements IAccesses {
  message?: string;
  creatureDate?: Date;
  userName?: string;
  email?: string | string[];
  phone?: string
  accessesId?: number;

  constructor(message?: string, creatureDate?: Date, userName?: string, email?: string | string[],
                phone?: string, accessesId?: number) {
    this.accessesId = accessesId;
    this.creatureDate = creatureDate;
    this.email = email;
    this.message = message;
    this.userName = userName;
    this.phone = phone
  }

}

