import { prisma } from "../../database/client.js";

export class DeletePessoasController {
    async handle(request, response) {
        const { id } = request.body

        try {
            const pessoas = await prisma.pessoas.delete({
                where: {
                    id: parseInt(id)
                }
            })
    
            return response.json(pessoas)

        } catch(error) {
            if (error.code == "P2025") {
                return response.status(400).json({
                    message: `[DeletePessoasController] Pessoa id: ${id} não existe`
                })
            } else {
                return response.status(500).json({
                    message: error, 
                    pessoas_id: id
                })
            }
        }
    }
}