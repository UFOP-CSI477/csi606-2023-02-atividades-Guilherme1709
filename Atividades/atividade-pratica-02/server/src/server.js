import express from 'express';
import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';
import { tipoRouter } from './routes/tipoSanguineo.js';
import { pessoasRouter } from './routes/pessoas.js';
import { doacoesRouter } from './routes/doacoes.js';
import { locaisRouter } from './routes/locais.js';
import cors from "cors"

const port = 4444
const server = express()

server.use(express.json());
server.use(cors())

server.get('/', (request, response) => {
    response.json(
        {
            message: 'Server is running.'
        }
    )
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)    
})

server.use(mainRouter)
server.use(estadoRouter)
server.use(cidadeRouter)
server.use(tipoRouter)
server.use(pessoasRouter)
server.use(doacoesRouter)
server.use(locaisRouter)