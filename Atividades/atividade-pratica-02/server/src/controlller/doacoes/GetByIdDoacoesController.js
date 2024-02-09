import { prisma } from "../../database/client.js";

export class GetByIdDoacoesController {
    async handle(request, response) {
        const { id } = request.params
        
        const doacoes = await prisma.doacoes.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
                pessoa: true
            },
            
            include: {
                local: true
            }
        })
        
        return response.json(doacoes)
    }
}