import {AccessesRepository} from "../repositories/AccessesRepository"
import {Factory} from "../factories/Factory"
import {OkPacket} from "mysql";

export class AccessesService<IAccesses> {
  private repository: AccessesRepository<IAccesses>
  private factory: Factory

  constructor(repository: AccessesRepository<IAccesses>, factory: Factory) {
    this.repository = repository;
    this.factory = factory;
  }

  public getAll(): Promise<IAccesses[] | void> {
    return this.repository.getAll()
  }

  public getById(id: string): Promise<IAccesses[] | void> {
    return this.repository.getById(id)
  }

  public delete(id: string): Promise<OkPacket | void> {
    return this.repository.delete(id)
  }

  public save(a: IAccesses): Promise<IAccesses[] | void> {
    return this.repository.save(a)
  }

}

