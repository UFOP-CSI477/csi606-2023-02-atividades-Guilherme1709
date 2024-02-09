import { prisma } from "../../database/client.js";

export class CreateDoacoesController {
    async handle(request, response) {
        const { pessoa_id, local_id } = request.body

        const doacoes = await prisma.doacoes.create({
            data: {
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                local: {
                    connect: {
                        id: local_id
                    }
                },
                data: new Date()
            }
        })

        return response.json(doacoes)
    }
}