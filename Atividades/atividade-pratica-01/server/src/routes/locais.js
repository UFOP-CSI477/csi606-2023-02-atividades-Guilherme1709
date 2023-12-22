import { Router } from "express";
import { GetAllLocaisController } from "../controlller/locais/GetAllLocaisController.js";
import { CreateLocaisController } from "../controlller/locais/CreateLocaisController.js";
import { GetByIdLocaisController } from "../controlller/locais/GetByIdLocaisController.js";
import { UpdateLocaisController } from "../controlller/locais/UpdateLocaisController.js";
import { DeleteLocaisController } from "../controlller/locais/DeleteLocaisController.js";

const locaisRouter = Router()

//Create
const createLocaisController = new CreateLocaisController()
locaisRouter.post('/locais', createLocaisController.handle)

//Get
const getAllLocaisController = new GetAllLocaisController()
locaisRouter.get('/locais', getAllLocaisController.handle)

//GetById
const getByIdLocaisController = new GetByIdLocaisController()
locaisRouter.get('/locais/:id', getByIdLocaisController.handle)

//Update
const updateLocaisController = new UpdateLocaisController()
locaisRouter.put('/locais', updateLocaisController.handle)

//Delete
const deleteLocaisController = new DeleteLocaisController()
locaisRouter.delete('/locais', deleteLocaisController.handle)

export { locaisRouter }