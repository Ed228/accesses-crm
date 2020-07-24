import mysql, {Connection} from 'mysql'
export  const connection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '020992',
  database: 'accesses_crm_db'
})