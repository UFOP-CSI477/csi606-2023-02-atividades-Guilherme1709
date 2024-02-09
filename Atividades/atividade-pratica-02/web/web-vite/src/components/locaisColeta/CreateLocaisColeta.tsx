import React, { useState, useEffect } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { CidadeInterface } from "../cidades/ListCidades"

const CreateLocaisColeta = () => {
  const [nome, setNome] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cidadeId, setCidadeId] = useState(0)

  const [cidades, setCidades] = useState<CidadeInterface[]>([])

  useEffect(() => {
    api.get("/cidades").then((response) => {
      setCidades(response.data)
    })

  }, [])

  const navigate = useNavigate()

  const handleNewLocalColeta = async ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      nome,
      rua,
      numero,
      complemento,
      cidade_id: cidadeId,
    }

    try {
      await api.post("/locais", data)
      alert("Local de Coleta cadastrado com sucesso!")
      navigate("/locaisColeta")
    } catch (error) {
      console.error(error)
      alert("Erro no cadastro do Local de Coleta!")
    }
  }

  return (
    <div>
      <h3>Cadastro de Local de Coleta</h3>
      <form onSubmit={handleNewLocalColeta}>
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
          <select name="cidadeId" id="cidadeId" onChange={(e) => setCidadeId(parseInt(e.target.value))}>
            <option value="0" selected>
              Selecione:
            </option>
            {cidades.map((cidade) => (
              <option key={cidade.id} value={cidade.id}>
                {cidade.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Cadastrar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  )
}

export default CreateLocaisColeta
