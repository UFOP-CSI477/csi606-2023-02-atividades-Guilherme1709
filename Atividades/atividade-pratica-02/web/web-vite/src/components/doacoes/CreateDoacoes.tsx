import React, { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { PessoaInterface } from "../pessoas/ListPessoas"
import { LocalColetaInterface } from "../locaisColeta/ListLocaisColeta"

const CreateDoacoes = () => {
  const [pessoaId, setPessoaId] = useState(0)
  const [localId, setLocalId] = useState(0)
  const [data, setData] = useState("")

  const [pessoas, setPessoas] = useState<PessoaInterface[]>([])
  const [locais, setLocais] = useState<LocalColetaInterface[]>([])

  useEffect(() => {
    api.get("/pessoas").then((response) => {
      setPessoas(response.data)
    })

    api.get("/locais").then((response) => {
      setLocais(response.data)
    })
  }, [])

  const navigate = useNavigate()

  const handleNewDoacao = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const doacaoData = {
      pessoa_id: pessoaId,
      local_id: localId,
      data: data,
    }

    try {
      await api.post("/doacoes", doacaoData)
      alert("Doação cadastrada com sucesso!")
      navigate("/doacoes")
    } catch (error) {
      console.error(error)
      alert("Erro no cadastro da doação!")
    }
  }

  return (
    <div>
      <h3>Cadastro de Doação</h3>
      <form onSubmit={handleNewDoacao}>
        <div>
          <label htmlFor="pessoaId">Pessoa</label>
          <select name="pessoaId" id="pessoaId" onChange={(e) => setPessoaId(parseInt(e.target.value))}>

            <option value="0" selected>Selecione:</option>

            {pessoas.map((pessoa) => (
              <option key={pessoa.id} value={pessoa.id}>
                {pessoa.nome}
              </option>
            ))}

          </select>
        </div>

        <div>
          <label htmlFor="localId">Local de Coleta</label>
          <select name="localId" id="localId" onChange={(e) => setLocalId(parseInt(e.target.value))}>

            <option value="0" selected>Selecione:</option>

            {locais.map((local) => (
              <option key={local.id} value={local.id}>
                {local.nome}
              </option>
            ))}

          </select>
        </div>

        <div>
          <label htmlFor="data">Data</label>
          <input type="date" name="data" id="data" value={data} onChange={(e) => setData(e.target.value)}/>
        </div>

        <button type="submit">Cadastrar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  )
}

export default CreateDoacoes
