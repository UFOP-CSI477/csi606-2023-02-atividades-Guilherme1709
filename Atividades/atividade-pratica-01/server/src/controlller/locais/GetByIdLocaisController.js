import { prisma } from "../../database/client.js";

export class GetByIdLocaisController {
    async handle(request, response) {
        const { id } = request.params
        
        const locais = await prisma.locaisColeta.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
                cidade: true
            }
        })
        
        return response.json(locais)
    }
}