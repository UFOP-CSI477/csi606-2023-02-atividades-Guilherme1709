import { prisma } from '../../database/client.js'

export class GetAllCidadesController {

    async handle(request, response) {
        const cidades = await prisma.cidades.findMany({

            select: {
                id: true,
                nome: true,
                estado: {
                    select: {
                        id: true,
                        nome: true,
                        sigla: true
                    }
                }
            },

        })

        return response.json(cidades)
    }
}