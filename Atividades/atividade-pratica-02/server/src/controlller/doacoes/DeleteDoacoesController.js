import { prisma } from "../../database/client.js";

export class DeleteDoacoesController {
    async handle(request, response) {
        const { id } = request.body

        try {
            const doacoes = await prisma.doacoes.delete({
                where: {
                    id: parseInt(id)
                }
            })
    
            return response.json(doacoes)

        } catch(error) {
            if (error.code == "P2025") {
                return response.status(400).json({
                    message: `[DeleteDoacoesController] A doação id: ${id} não existe`
                })
            } else {
                return response.status(500).json({
                    message: error, 
                    doacoes_id: id
                })
            }
        }
    }
}