import {Router} from "express";
import {AccessesService} from '../services/AccessesService'
import {AccessesRepository} from '../repositories/AccessesRepository'
import {AccessesFactory} from '../factories/AccessesFactory'
import {connection} from '../config/db'
import {IAccesses} from "../models/interfaces/IAccesses";
import {Accesses} from "../models/Accesses";
import {AccessesBuilder} from "../models/builders/AccessesBuilder";
const accessesService = new AccessesService<IAccesses>(new AccessesRepository(connection), new AccessesFactory())

const accessesController: Router = Router()

accessesController.get('/all',  (async (req, res) => {
  try {
    res.status(200)
      .json(await accessesService.getAll())
  } catch (e) {
    res.status(500).json({
      message: "Server Error"
    })
  }
}))

accessesController.get('/:id',  (async (req, res) => {
  try {
    res.json(await accessesService.getById(req.params.id)).status(200)
  } catch (e) {
    res.status(500).json({
      message: "Server Error"
    })
  }
}))

accessesController.post('/', (async (req, res) => {
  try {
    console.log(req.body)
    const {message, clientName, email, phone} = req.body
    res.status(201).json(await accessesService.save(new AccessesBuilder()
      .setClientName(clientName)
      .setMessage(message)
      .setPhone(phone)
      .setEmail(email).build()))
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: "Server Error"
    })
  }
}))

accessesController.put('/:id', (async (req, res) => {
  try {
    const {message, email, phone} = req.body
    await accessesService.update(new AccessesBuilder()
      .setClientName(req.params.id)
      .setMessage(message)
      .setPhone(phone)
      .setEmail(email).build()).then(() => res.status(204))
  } catch (e) {
    res.status(500).json({
      message: "Server Error"
    })
  }
}))



accessesController.delete('/:id', (async (req, res) => {
  try {
    res.status(204).json(await accessesService.delete(req.params.id))
  } catch (e) {
    res.status(500).json({
      message: "Server Error"
    })
  }
}))

export default accessesController