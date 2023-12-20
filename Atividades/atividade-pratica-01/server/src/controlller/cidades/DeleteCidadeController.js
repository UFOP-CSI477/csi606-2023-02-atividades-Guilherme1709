import { prisma } from "../../database/client.js";

export class DeleteCidadeController {
    async handle(request, response) {
        const { id } = request.body

        try {
            const cidade = await prisma.cidades.delete({
                where: {
                    id: parseInt(id)
                }
            })
    
            return response.json(cidade)

        } catch(error) {
            if (error.code == "P2025") {
                return response.status(400).json({
                    message: `[DeleteCidadeController] cidade id: ${id} não existe`
                })
            } else {
                return response.status(500).json({
                    message: error, 
                    cidade_id: id
                })
            }
        }
    }
}