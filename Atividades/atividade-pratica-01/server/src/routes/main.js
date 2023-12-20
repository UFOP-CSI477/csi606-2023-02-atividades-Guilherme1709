import { Router, response } from 'express'

const mainRouter = Router()

mainRouter.get('/', (resquest, response) => {

    response.json({
        message: "Server is running"
    })
})

export { mainRouter }