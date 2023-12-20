import { prisma } from '../../database/client.js'

export class GetAllPessoasController {

    async handle(request, response) {
        const pessoas = await prisma.pessoas.findMany({

            select: {
                id: true,
                nome: true,
                rg: true,
                cidade: {
                    select: {
                        id: true,
                        nome: true,
                        estado : {
                            select: {
                                id: true,
                                nome: true,
                                sigla: true
                            }
                        }
                    }
                }
            },

        })

        return response.json(pessoas)
    }
}