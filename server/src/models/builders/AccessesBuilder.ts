import {Accesses} from "../Accesses";

export class AccessesBuilder {
  private accesses: Accesses = new Accesses()

  setPhone(phone: string) {
    this.accesses.phone = phone
    return this
  }

  setEmail(email: string | string[]) {
    this.accesses.email = email
    return this
  }

  setMessage(message: string) {
    this.accesses.message = message
    return this
  }

  setClientName(clientName: string) {
    this.accesses.clientName = clientName
    return this
  }

  build() {
      return this.accesses
  }
}
