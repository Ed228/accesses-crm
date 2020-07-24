import {Accesses} from "../Accesses";

export class AccessesBuilder {
  private accesses: Accesses = new Accesses()

  setAccessesId(accessesId: number) {
    this.accesses.accessesId = accessesId
    return this
  }

  setCreatureDate(creatureDate: Date) {
    this.accesses.creatureDate = creatureDate
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

  setUserName(userName: string) {
    this.accesses.userName = userName
    return this
  }

  build() {
    if(Object.values(this.accesses).every(value => value !== undefined)){
      return this.accesses
    }
    return
  }
}
