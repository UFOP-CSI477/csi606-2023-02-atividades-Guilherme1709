import { prisma } from "../../database/client.js";

export class UpdateTipoSanguineoController {
    async handle(request, response) {
        const { id, tipo, fator } = request.body

        const tipoSanguineo = await prisma.tiposSanguineos.update({
            where: {
                id: parseInt(id)
            },

            data: {
                tipo,
                fator,
                updated_at: new Date()
            }
        })

        return response.json(tipoSanguineo)
    }
}