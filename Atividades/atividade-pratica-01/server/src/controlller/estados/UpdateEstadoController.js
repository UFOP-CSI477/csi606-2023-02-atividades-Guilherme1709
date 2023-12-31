import { prisma } from "../../database/client.js";

export class UpdateEstadoController {
    async handle(request, response) {
        const { id, nome, sigla } = request.body

        const estado = await prisma.estados.update({
            where: {
                id: parseInt(id)
            },

            data: {
                nome,
                sigla,
                updated_at: new Date()
            }
        })

        return response.json(estado)
    }
}