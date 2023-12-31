import { prisma } from "../../database/client.js";

export class CreateLocaisController {
    async handle(request, response) {
        const { nome, rua, numero, complemento, cidade_id } = request.body

        const locais = await prisma.locaisColeta.create({
            data: {
                nome,
                rua,
                numero,
                complemento,
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