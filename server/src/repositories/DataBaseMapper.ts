import {Accesses} from "../models/Accesses";

export class DataBaseMapper {
  constructor() {}

  public getObjectFromData(data: any, objectConstructor: any): any | void {
    const object = new objectConstructor();
    for (const dataKey in data) {
      if (data.hasOwnProperty(dataKey)) object[dataKey] = data[dataKey]
    }
    return object
  }

  public getDataFromObject<T, K extends keyof T>(object: T, ...keys: K[]): any[] {
    return keys.map(key => object[key])
  }
}



