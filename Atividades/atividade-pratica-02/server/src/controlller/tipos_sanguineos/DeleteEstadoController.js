import { prisma } from "../../database/client.js";

export class DeleteTipoSanguineoController {
    async handle(request, response) {
        const { id } = request.body

        try{
            const tipoSanguineo = await prisma.tiposSanguineos.delete({
                where: {
                    id: parseInt(id)
                }
            })
    
            return response.json(tipoSanguineo)
        } catch(error) {
            if (error.code == "P2025") {
                return response.status(400).json({
                    message: `[DeleteTipoSanguineoController] Tipo Sanguineo id: ${id} não existe`
                })
            } else {
                return response.status(500).json({
                    message: error, 
                    tipoSanguineo_id: id
                })
            }
        }
    }
}