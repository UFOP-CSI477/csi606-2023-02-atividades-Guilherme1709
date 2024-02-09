import React, { useState, useEffect } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { CidadeInterface } from "../cidades/ListCidades"
import { TiposSanguineosInterface } from "../tiposSanguineos/ListTiposSanguineos"

const CreatePessoas = () => {
  const [nome, setNome] = useState("")
  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [rg, setRg] = useState("")
  const [cidadeId, setCidadeId] = useState(0)
  const [tipoId, setTipoId] = useState(0)

  const [cidades, setCidades] = useState<CidadeInterface[]>([])
  const [tiposSanguineos, setTiposSanguineos] = useState<TiposSanguineosInterface[]>([])

  useEffect(() => {
    api.get("/cidades").then((response) => {
      setCidades(response.data)
    })

    api.get("/tipoSanguineo").then((response) => {
      setTiposSanguineos(response.data)
    })
  }, [])

  const navigate = useNavigate()

  const handleNewPessoa = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const pessoaData = {
      nome,
      rua,
      numero,
      complemento,
      rg,
      cidade_id: cidadeId,
      tipo_id: tipoId,
    }

    try {
      await api.post("/pessoas", pessoaData)
      alert("Pessoa cadastrada com sucesso!")
      navigate("/pessoas")
    } catch (error) {
      console.error(error)
      alert("Erro no cadastro da pessoa!")
    }
  }

  return (
    <div>
      <h3>Cadastro de Pessoa</h3>
      <form onSubmit={handleNewPessoa}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="rua">Rua</label>
          <input type="text" name="rua" id="rua" value={rua} onChange={e => setRua(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="numero">Numero</label>
          <input type="text" name="numero" id="numero" value={numero} onChange={e => setNumero(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="complemento">Complemento</label>
          <input type="text" name="complemento" id="complemento" value={complemento} onChange={e => setComplemento(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="rg">Rg</label>
          <input type="text" name="rg" id="rg" value={rg} onChange={e => setRg(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="cidadeId">Cidade</label>
          <select
            name="cidadeId"
            id="cidadeId"
            onChange={(e) => setCidadeId(parseInt(e.target.value))}
          >
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

        <div>
          <label htmlFor="tipoId">Tipo Sanguíneo</label>
          <select name="tipoId" id="tipoId" onChange={(e) => setTipoId(parseInt(e.target.value))}>
            <option value="0" selected>
              Selecione:
            </option>
            {tiposSanguineos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.tipo}
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

export default CreatePessoas
