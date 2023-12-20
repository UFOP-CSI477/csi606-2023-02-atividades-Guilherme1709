import { prisma } from "../../database/client.js";

export class GetByIdPessoasController {
    async handle(request, response) {
        const { id } = request.params
        
        const pessoas = await prisma.pessoas.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
                estado: true
            },
            
            include: {
                cidade: true
            }
        })
        
        return response.json(pessoas)
    }
}