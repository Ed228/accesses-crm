import {AccessesRepository} from "./repositories/AccessesRepository"
import {connection} from "./config/db"
import {Accesses} from "./models/Accesses";
import {DataBaseMapper} from "./repositories/DataBaseMapper";

const accessesRepository = new AccessesRepository(connection)

// const result: Promise<Accesses[] | unknown>
//   = accessesRepository.save(
//     new Accesses("hahaha",
//       new Date(),
//       "Cris Tacker",
//       "ct@dasd.com",
//       "+034029423492")
// );

const a: Accesses = new Accesses("hahaha",
  new Date(),
  "Cris Tacker",
  "ct@dasd.com",
  "+034029423492")

console.log(a);

const dataBaseMapper = new DataBaseMapper();

accessesRepository.save(a).then(res => console.log(res))
