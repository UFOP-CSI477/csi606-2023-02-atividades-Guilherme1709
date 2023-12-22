import { prisma } from '../../database/client.js'

export class GetAllLocaisController {

    async handle(request, response) {
        const locais = await prisma.locaisColeta.findMany({

            select: {
                id: true,
                nome: true,
                rua: true,
                numero: true,
                complemento: true,
                cidade: {
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
                    }
                }
            },

        })

        return response.json(locais)
    }
}