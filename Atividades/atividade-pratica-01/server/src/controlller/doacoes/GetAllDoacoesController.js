import { prisma } from '../../database/client.js'

export class GetAllDoacoesController {

    async handle(request, response) {
        const doacoes = await prisma.doacoes.findMany({

            select: {
                id: true,
                data: true,
                pessoa: {
                    select: {
                        id: true,
                        nome: true,
                        rua: true,
                        numero: true,
                        complemento: true,
                        rg: true,
                        cidade: {
                            select: {
                                id: true,
                                nome: true,
                                estado: {
                                    select: {
                                        id: true,
                                        nome: true,
                                        sigla: true
                                    }
                                }
                            }
                        },
                        tipo: {
                            select: {
                                id: true,
                                tipo: true,
                                fator: true,
                            }
                        }
                    }
                },
                local: {
                    select: {
                            id: true,
                            nome: true,
                            rua: true,
                            numero: true,
                            complemento: true,
                            cidade: {
                                select: {
                                    id: true,
                                    nome: true,
                                    estado: {
                                        select: {
                                            id: true,
                                            nome: true,
                                            sigla: true
                                        }
                                    }
                                }
                            }
                    }
                }
            }
        })

        return response.json(doacoes)
    }
}