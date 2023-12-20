import { prisma } from "../../database/client.js";

export class DeleteEstadoController {
    async handle(request, response) {
        const { id } = request.body

        try{
            const estado = await prisma.estados.delete({
                where: {
                    id: parseInt(id)
                }
            })
    
            return response.json(estado)
        } catch(error) {
            if (error.code == "P2025") {
                return response.status(400).json({
                    message: `[DelteEstadoController] Estado id: ${id} não existe`
                })
            } else {
                return response.status(500).json({
                    message: error, 
                    estado_id: id
                })
            }
        }
    }
}