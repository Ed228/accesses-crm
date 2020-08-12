import {Connection, MysqlError, OkPacket} from "mysql";

export abstract class BaseRepository<T> {
  readonly connection: Connection

  protected constructor(connection: Connection) {
    this.connection = connection;
  }

  public testConnection() {
    this.connection.connect((err: MysqlError) => {
      if (err) throw err
      console.log('Connected')
    })
    this.connection.end()
  }

  public query(sql: string, values?: any[]): Promise<T[] | any | void> {
      return new Promise<T[]>((resolve, reject) => {
        this.connection.query({
          sql: sql,
          values: values || []
        }, (err: MysqlError, rows) => {
          if (err) reject(err)
          resolve(rows)
        })
      })
  }
  public closeConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.end((err: MysqlError | undefined) => {
        if(err) reject(err)
        resolve()
      })
    })
  }

  public abstract getAll(): Promise<T[] | void>
  public abstract getById(id: string): Promise<T[] | void>
  public abstract save(t: T): Promise<T[] | void>
  public abstract delete(id: string): Promise<OkPacket | void>
  public abstract update(t: T): Promise<void>
}