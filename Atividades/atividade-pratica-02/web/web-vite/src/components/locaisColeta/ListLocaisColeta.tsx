import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"

export interface LocalColetaInterface {
  id: number
  nome: string
  rua: string
  numero: string
  complemento: string
  cidade: CidadeInterface
  created_at: string
  updated_at: string
}

interface CidadeInterface {
  id: number
  nome: string
  estado: string
}

const ListLocaisColeta = () => {
  const [locaisColeta, setLocaisColeta] = useState<LocalColetaInterface[]>([])

  useEffect(() => {
    api.get("/locais").then((response) => {
      setLocaisColeta(response.data)
    })
  }, [])

  const handleDeleteLocalColeta = async (id: number) => {
    if (!window.confirm("Confirma a exclusão do Local de Coleta?")) {
      return
    }

    try {
      await api.delete('/locais' , {
        data: {
          id
        }
      })
      
      alert("Local de Coleta excluído com sucesso")
      setLocaisColeta(locaisColeta.filter((local) => local.id !== id))
    } catch (error) {
      alert("Erro na exclusão do Local de Coleta")
      console.error(error)
    }
  }

  return (
    <div>
      <h3>Lista de Locais de Coleta</h3>
      <div>
        <Link to="/locaisColeta/create">Inserir</Link>
      </div>

      <div>
        <Link to="/">Voltar</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Rua</th>
            <th>Número</th>
            <th>Complemento</th>
            <th>Cidade</th>
            <th>Criado</th>
            <th>Atualizado</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {locaisColeta.map((local) => (
            <tr key={local.id}>
              <td>{local.id}</td>
              <td>{local.nome}</td>
              <td>{local.rua}</td>
              <td>{local.numero}</td>
              <td>{local.complemento}</td>
              <td>{local.cidade.nome}</td>
              <td>{local.created_at}</td>
              <td>{local.updated_at}</td>
              <td><Link to={`/locaisColeta/update/${local.id}`}>Atualizar</Link></td>
              <td><button onClick={() => handleDeleteLocalColeta(local.id)}>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListLocaisColeta
