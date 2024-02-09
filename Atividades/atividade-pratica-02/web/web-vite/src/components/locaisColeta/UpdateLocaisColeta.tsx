import React, { useState, useEffect } from "react"
import api from "../../services/api"
import { useNavigate, useParams } from "react-router-dom"
import { CidadeInterface } from "../cidades/ListCidades"

const UpdateLocaisColeta = () => {
  const [nome, setNome] = useState("")
  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [cidadeId, setCidadeId] = useState(0)

  const [cidades, setCidades] = useState<CidadeInterface[]>([])

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/cidades").then((response) => {
      setCidades(response.data)
    })

    api.get(`/locaisColeta/${id}`).then((response) => {
      setNome(response.data.nome)
      setRua(response.data.rua)
      setNumero(response.data.numero)
      setComplemento(response.data.complemento)
      setCidadeId(response.data.cidade_id)
    })
  }, [id])

  const handleUpdateLocalColeta = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const data = {
      id,
      nome,
      rua,
      numero,
      complemento,
      cidade_id: cidadeId,
    }

    try {
      await api.put('/locais', data)
      alert("Local de Coleta atualizado com sucesso!")
      navigate("/locaisColeta")
    } catch (error) {
      console.error(error)
      alert("Erro na atualização do Local de Coleta!")
    }
  }

  return (
    <div>
      <h3>Atualização do Local de Coleta</h3>
      <form onSubmit={handleUpdateLocalColeta}>
        <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="nome">Rua</label>
            <input type="text" name="nome" id="nome" value={rua} onChange={e => setRua(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="nome">Numero</label>
            <input type="text" name="nome" id="nome" value={numero} onChange={e => setNumero(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="nome">Complemento</label>
            <input type="text" name="nome" id="nome" value={complemento} onChange={e => setComplemento(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="cidadeId">Cidade</label>
          <select
            name="cidadeId"
            id="cidadeId"
            value={cidadeId}
            onChange={(e) => setCidadeId(parseInt(e.target.value))}
          >
            {cidades.map((cidade) => (
              <option key={cidade.id} value={cidade.id}>
                {cidade.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Atualizar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  )
}

export default UpdateLocaisColeta
