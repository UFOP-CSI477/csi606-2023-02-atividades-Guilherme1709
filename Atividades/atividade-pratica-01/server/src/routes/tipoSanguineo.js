import { Router } from "express";
import { CreateTipoSanguineoController } from "../controlller/tipos_sanguineos/CreateTipoSangueController.js";
import { GetAllTipoSanguineoController } from "../controlller/tipos_sanguineos/GetAllTipoSangueController.js";
import { GetByIdTipoSanguineoController } from "../controlller/tipos_sanguineos/GetByIdTipoSangueController.js";
import { UpdateTipoSanguineoController } from "../controlller/tipos_sanguineos/UpdateTipoSangueController.js";
import { DeleteTipoSanguineoController } from "../controlller/tipos_sanguineos/DeleteEstadoController.js";

const tipoRouter= Router()

//Crud = tipos sanguineos

//Get All
const getAllTipoSanguineoController = new GetAllTipoSanguineoController
tipoRouter.get('/tipoSanguineo', getAllTipoSanguineoController.handle)

//Get By Id
const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController
tipoRouter.get('/tipoSanguineo/:id', getByIdTipoSanguineoController.handle)

//Create
const createTipoSangueController = new CreateTipoSanguineoController
tipoRouter.post('/tipoSanguineo', createTipoSangueController.handle)

//Update
const updateTipoSangueController = new UpdateTipoSanguineoController
tipoRouter.put('/tipoSanguineo', updateTipoSangueController.handle)

//Delete
const deleteTipoSanguineoController = new DeleteTipoSanguineoController
tipoRouter.delete('/tipoSanguineo', deleteTipoSanguineoController.handle)
export { tipoRouter }