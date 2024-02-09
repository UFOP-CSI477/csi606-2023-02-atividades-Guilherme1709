import { Router } from 'express'
import { GetAllDoacoesController } from '../controlller/doacoes/GetAllDoacoesController.js'
import { GetByIdDoacoesController } from '../controlller/doacoes/GetByIdDoacoesController.js'
import { CreateDoacoesController } from '../controlller/doacoes/CreateDoacoesController.js'
import { UpdateDoacoesController } from '../controlller/doacoes/UpdateDoacoesController.js'
import { DeleteDoacoesController } from '../controlller/doacoes/DeleteDoacoesController.js'

const doacoesRouter = Router()

// CRUD = Doacoes

// Select/Get All
const getAllDoacoesController = new GetAllDoacoesController()
doacoesRouter.get('/doacoes', getAllDoacoesController.handle)

// Get By Id
const getByIdDoacoesController = new GetByIdDoacoesController()
doacoesRouter.get('/doacoes/:id', getByIdDoacoesController.handle)

// Create
const createDoacoesController = new CreateDoacoesController()
doacoesRouter.post('/doacoes', createDoacoesController.handle)

// Update
const updateDoacoesController = new UpdateDoacoesController()
doacoesRouter.put('/doacoes', updateDoacoesController.handle)

// Delete
const deleteDoacoesController = new DeleteDoacoesController()
doacoesRouter.delete('/doacoes', deleteDoacoesController.handle)

export { doacoesRouter }