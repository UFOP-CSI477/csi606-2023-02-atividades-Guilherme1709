import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"

export interface TiposSanguineosInterface {
  id: number
  tipo: string
  fator: string
  created_at: string
  updated_at: string
}

const ListTiposSanguineos = () => {
  const [tiposSanguineos, setTiposSanguineos] = useState<TiposSanguineosInterface[]>([])

  useEffect(() => {
    api.get('/tipoSanguineo').then((response) => {
      setTiposSanguineos(response.data)
    })
  }, [])

  const handleDeleteTipoSanguineo = async (id: number) => {
    if (!window.confirm("Confirma a exclusão do Tipo Sanguíneo?")) {
      return
    }

    try {
      await api.delete('/tipoSanguineo' , {
        data: {
          id
        }
      })

      alert("Tipo Sanguíneo excluído com sucesso")

      setTiposSanguineos(tiposSanguineos.filter(tipo => tipo.id !== id))
      
    } catch (error) {
      alert("Erro na exclusão do Tipo Sanguíneo")
      console.error(error)
    }
  }

  return (
    <div>
      <h3>Lista de Tipos Sanguíneos</h3>
      <div>
        <Link to="/tiposSanguineos/create">Inserir</Link>
      </div>

      <div>
        <Link to="/">Voltar</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tipo</th>
            <th>Fator</th>
            <th>Criado</th>
            <th>Atualizado</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {tiposSanguineos.map((tipoSanguineo) => (
            <tr key={tipoSanguineo.id}>
              <td>{tipoSanguineo.id}</td>
              <td>{tipoSanguineo.tipo}</td>
              <td>{tipoSanguineo.fator}</td>
              <td>{tipoSanguineo.created_at}</td>
              <td>{tipoSanguineo.updated_at}</td>
              <td><Link to={`/tiposSanguineos/update/${tipoSanguineo.id}`}>Atualizar</Link></td>
              <td><button onClick={() => handleDeleteTipoSanguineo(tipoSanguineo.id)}>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListTiposSanguineos
