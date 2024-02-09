import { prisma } from "../../database/client.js";

export class UpdatePessoasController {
    async handle(request, response) {
        const { id, nome, rua, numero, complemento, rg, tipo_id, cidade_id } = request.body

        const pessoas = await prisma.pessoas.update({
            where: {
                id: parseInt(id)
            },

            data: {
                nome,
                rua,
                numero,
                complemento,
                rg,
                updated_at: new Date(),
                tipo: {
                    connect: {
                        id: tipo_id
                    }
                },
                cidade: {
                    connect: {
                        id : cidade_id
                    }
                }
            }
        })

        return response.json(pessoas)
    }
}