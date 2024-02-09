import { prisma } from "../../database/client.js";

export class UpdateLocaisController {
    async handle(request, response) {
        const { id, nome, rua, numero, complemento, cidade_id } = request.body

        const locais = await prisma.locaisColeta.update({
            where: {
                id: parseInt(id)
            },

            data: {
                nome,
                rua,
                numero,
                complemento,
                updated_at: new Date(),
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                }
            }
        })

        return response.json(locais)
    }
}