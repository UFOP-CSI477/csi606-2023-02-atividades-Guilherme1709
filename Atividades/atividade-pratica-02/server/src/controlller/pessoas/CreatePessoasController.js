import { prisma } from "../../database/client.js";

export class CreatePessoasController {
    async handle(request, response) {
        const { nome, rua, numero, complemento, rg, tipo_id, cidade_id } = request.body

        const pessoas = await prisma.pessoas.create({
            data: {
                nome,
                rua,
                numero,
                complemento,
                rg,
                tipo: {
                    connect: {
                        id: tipo_id
                    }
                },
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                }
            }
        })

        return response.json(pessoas)
    }
}