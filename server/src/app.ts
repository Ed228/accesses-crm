import express from "express"
import accessesController from './controllers/AccessesController'

const port: number = 8080
const app: express.Application = express()

app.use(express.json())
app.use('/api/accesses', accessesController)

app.listen(port, () => {
  console.log(`app listen in port ${port}`)
})