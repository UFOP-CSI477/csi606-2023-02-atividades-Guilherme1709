import { prisma } from "../../database/client.js";

export class UpdateDoacoesController {
    async handle(request, response) {
        const { id, pessoa_id, local_id  } = request.body

        const doacoes = await prisma.doacoes.update({
            where: {
                id: parseInt(id)
            },

            data: {
                data: new Date(),
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                local: {
                    connect: {
                        id: local_id
                    }
                }
            }
        })

        return response.json(doacoes)
    }
}