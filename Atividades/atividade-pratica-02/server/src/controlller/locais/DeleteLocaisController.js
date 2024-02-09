import { prisma } from "../../database/client.js";

export class DeleteLocaisController {
    async handle(request, response) {
        const { id } = request.body

        try {
            const locais = await prisma.locaisColeta.delete({
                where: {
                    id: parseInt(id)
                }
            })
    
            return response.json(locais)

        } catch(error) {
            if (error.code == "P2025") {
                return response.status(400).json({
                    message: `[DeleteLocaisController] Local de coleta id: ${id} não existe`
                })
            } else {
                return response.status(500).json({
                    message: error, 
                    local_id: id
                })
            }
        }
    }
}