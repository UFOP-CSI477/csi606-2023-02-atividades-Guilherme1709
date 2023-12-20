import { prisma } from '../../database/client.js'

export class GetAllTipoSanguineoController {

    async handle(request, response) {
        const tipoSanguineo = await prisma.tiposSanguineos.findMany({
            include: {
                pessoas: true
            }
        })
        return response.json(tipoSanguineo)
    }
}