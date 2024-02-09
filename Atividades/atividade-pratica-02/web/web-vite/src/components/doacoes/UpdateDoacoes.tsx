import React, { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate, useParams } from "react-router-dom"
import { PessoaInterface } from "../pessoas/ListPessoas"
import { LocalColetaInterface } from "../locaisColeta/ListLocaisColeta"

const UpdateDoacoes = () => {
  const [pessoaId, setPessoaId] = useState(0)
  const [localId, setLocalId] = useState(0)
  const [data, setData] = useState('')

  const [pessoas, setPessoas] = useState<PessoaInterface[]>([])
  const [locais, setLocais] = useState<LocalColetaInterface[]>([])

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/pessoas").then((response) => {
      setPessoas(response.data)
    })

    api.get("/locais").then((response) => {
      setLocais(response.data)
    })

    api.get(`/doacoes/${id}`).then((response) => {
      setPessoaId(response.data.pessoa_id)
      setLocalId(response.data.local_id)
      setData(response.data.data)
    })

  }, [id])

  const handleUpdateDoacao = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const doacaoData = {
      id,
      pessoa_id: pessoaId,
      local_id: localId,
      data: data,
    }

    try {
      await api.put('/doacoes', doacaoData)
      alert("Doação atualizada com sucesso!")
      navigate("/doacoes")
    } catch (error) {
      console.error(error)
      alert("Erro na atualização da doação!")
    }
  }

  return (
    <div>
      <h3>Atualização da Doação</h3>
      <form onSubmit={handleUpdateDoacao}>
        <div>
          <label htmlFor="pessoaId">Pessoa</label>
          <select name="pessoaId" id="pessoaId" value={pessoaId} onChange={(e) => setPessoaId(parseInt(e.target.value))}>
            {
                pessoas.map((pessoa) => (
                <option key={pessoa.id} value={pessoa.id}>
                  {pessoa.nome}
                </option>
              ))
            }
          </select>
        </div>

        <div>
          <label htmlFor="localId">Local de Coleta</label>
          <select name="localId" id="localId" value={localId} onChange={(e) => setLocalId(parseInt(e.target.value))}>
            {
              locais.map((local) => (
                <option key={local.id} value={local.id}>
                  {local.nome}
                </option>
              ))
            }
          </select>
        </div>

        <div>
          <label htmlFor="data">Data</label>
          <input type="date" name="data" id="data" value={data} onChange={(e) => setData(e.target.value)}/>
        </div>

        <button type="submit">Atualizar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  )
}

export default UpdateDoacoes
