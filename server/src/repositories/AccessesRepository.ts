import mysql, {Connection, OkPacket} from 'mysql'
import {Accesses} from "../models/Accesses";
import {BaseRepository} from "./BaseRepository";
import {DataBaseMapper} from "./DataBaseMapper";

export class AccessesRepository<IAccesses> extends BaseRepository<IAccesses>{
  private dataBaseMapper: DataBaseMapper = new DataBaseMapper()

  constructor(connection: Connection) {
    super(connection)
  }

  public getAll(): Promise<IAccesses[] | void> {
    return this.query("SELECT * FROM accesses")
      .then(rows => {
        if(rows) return rows.map((row: any) => this.dataBaseMapper.getObjectFromData(row, Accesses))
      })
  }

  public save(accesses: Accesses): Promise<IAccesses[] | void> {
    return this.query("INSERT INTO accesses (message, creaturedate, clientName, email, phone) VALUES (?,?,?,?,?)",
      this.dataBaseMapper
        .getDataFromObject(accesses, "message", "creatureDate", "clientName", "email", "phone"))
  }

  public getById(clientNameLikeId: string): Promise<IAccesses[] | void> {
    return this.query("select * from accesses where clientName = ?"
    , [clientNameLikeId]).then(data => this.dataBaseMapper.getObjectFromData(data, Accesses))
  }

  public delete(clientNameLikeId: string): Promise<OkPacket | void> {
    return this.query("delete from accesses where clientName = ?", [clientNameLikeId])
      .then(okPacket => okPacket)
  }

  public update(newItem: Accesses): Promise<void> {
    return this.query("update accesses set message = ?, email = ?, phone = ? where clientName = ?",
      this.dataBaseMapper.getDataFromObject(newItem, 'message', 'email', 'phone', 'clientName'))
  }
}
