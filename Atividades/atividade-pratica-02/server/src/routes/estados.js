import { Router } from 'express'
import { GetAllEstadosController} from '../controlller/estados/GetAllEstadosController.js'
import { GetByIdEstadoController } from '../controlller/estados/GetByIdEstadosController.js'
import { CreateEstadoController } from '../controlller/estados/CreateEstadoController.js'
import { UpdateEstadoController } from '../controlller/estados/UpdateEstadoController.js'
import { DeleteEstadoController } from '../controlller/estados/DeleteEstadoController.js'

const estadoRouter = Router()

// CRUD = estados

// Select/Get All
const getAllEstadosController = new GetAllEstadosController()
estadoRouter.get('/estados', getAllEstadosController.handle)

// Get By Id
const getByIdEstadoController = new GetByIdEstadoController()
estadoRouter.get('/estados/:id', getByIdEstadoController.handle)

// Create
const createEstadoController = new CreateEstadoController()
estadoRouter.post('/estados', createEstadoController.handle)

// Update
const updateEstadoController = new UpdateEstadoController()
estadoRouter.put('/estados', updateEstadoController.handle)

// Delete
const deleteEstadoController = new DeleteEstadoController()
estadoRouter.delete('/estados', deleteEstadoController.handle)
export { estadoRouter }