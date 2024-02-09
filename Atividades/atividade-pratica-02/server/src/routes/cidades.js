import { Router } from "express";
import { CreateCidadeController } from "../controlller/cidades/CreateCidadeController.js";
import { GetAllCidadesController } from "../controlller/cidades/GetAllCidadesController.js";
import { GetByIdCidadeController } from "../controlller/cidades/GetByIdCidadeController.js";
import { UpdateCidadeController } from "../controlller/cidades/UpdateCidadeController.js";
import { DeleteCidadeController } from "../controlller/cidades/DeleteCidadeController.js";
const cidadeRouter = Router()

//Create
const createCidadeController = new CreateCidadeController()
cidadeRouter.post('/cidades', createCidadeController.handle)

//Get
const getAllCidadesController = new GetAllCidadesController()
cidadeRouter.get('/cidades', getAllCidadesController.handle)

//GetById
const getByIdCidadesController = new GetByIdCidadeController()
cidadeRouter.get('/cidades/:id', getByIdCidadesController.handle)

//Update
const updateCidadeController = new UpdateCidadeController()
cidadeRouter.put('/cidades', updateCidadeController.handle)

//Delete
const deleteCidadeController = new DeleteCidadeController()
cidadeRouter.delete('/cidades', deleteCidadeController.handle)
export { cidadeRouter }