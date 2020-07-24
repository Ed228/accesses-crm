export class Factory {
  static create(objectConstructor: any, options: object) {
    const obj = new objectConstructor();
    Object.entries(options).forEach((valueAndKey: string | any[]) => obj[valueAndKey[0]] = valueAndKey[1])
    return obj
  }
}
