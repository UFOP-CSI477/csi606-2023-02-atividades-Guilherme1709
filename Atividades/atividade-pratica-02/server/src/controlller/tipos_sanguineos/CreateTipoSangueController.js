import { prisma } from "../../database/client.js";

export class CreateTipoSanguineoController {
    async handle(request, response) {
        const { tipo, fator } = request.body

        const tiposSanguineos = await prisma.tiposSanguineos.create({
            data: {
                tipo,
                fator
            }
        })
        return response.json(tiposSanguineos)
    }
}