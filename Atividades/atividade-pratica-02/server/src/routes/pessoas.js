import { Router } from "express";
import { GetAllPessoasController } from "../controlller/pessoas/GetAllPessoasController.js";
import { CreatePessoasController } from "../controlller/pessoas/CreatePessoasController.js";
import { GetByIdPessoasController } from "../controlller/pessoas/GetByIdPessoasController.js";
import { UpdatePessoasController } from "../controlller/pessoas/UpdatePessoasController.js";
import { DeletePessoasController } from "../controlller/pessoas/DeletePessoasController.js";

const pessoasRouter = Router()

//Crud = pessoas

//Get All
const getAllPessoasController = new GetAllPessoasController
pessoasRouter.get('/pessoas', getAllPessoasController.handle)

//Get By Id
const getByIdPessoasController = new GetByIdPessoasController
pessoasRouter.get('/pessoas/:id', getByIdPessoasController.handle)

//Create
const createPessoasController = new CreatePessoasController
pessoasRouter.post('/pessoas', createPessoasController.handle)

//Update
const updatePessoasController = new UpdatePessoasController
pessoasRouter.put('/pessoas', updatePessoasController.handle)

//Delete
const deletePessoasController = new DeletePessoasController
pessoasRouter.delete('/pessoas', deletePessoasController.handle)

export { pessoasRouter }