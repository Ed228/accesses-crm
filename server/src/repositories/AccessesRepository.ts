import {IRepository} from "./interfaces/IRepository"
import mysql, {Connection, OkPacket} from 'mysql'
import {MysqlError} from "mysql";
import {Accesses} from "../models/Accesses";
import {BaseRepository} from "./BaseRepository";
import {DataBaseMapper} from "./DataBaseMapper";
import {IAccesses} from "../models/interfaces/IAccesses";

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

  public save(accesses: IAccesses): Promise<IAccesses[] | void> {
    return this.query("INSERT INTO accesses (message, creaturedate, username, email, phone) VALUES (?,?,?,?,?)",
      this.dataBaseMapper
        .getDataFromObject(accesses as Accesses, "message", "creatureDate", "userName", "email", "phone"))
  }

  public getById(id: string): Promise<IAccesses[] | void> {
    return this.query("select * from accesses where AccessesId = ?"
    , [id]).then(data => this.dataBaseMapper.getObjectFromData(data, Accesses))
  }

  public delete(id: string): Promise<OkPacket | void> {
    this.query("delete from accesses where AccessesId = ?", [id])
      .then(okPacket => console.log(okPacket));
    return this.query("delete from accesses where AccessesId = ?", [id])
      .then(okPacket => okPacket)
  }

  public update(t: IAccesses): void {

  }
}
