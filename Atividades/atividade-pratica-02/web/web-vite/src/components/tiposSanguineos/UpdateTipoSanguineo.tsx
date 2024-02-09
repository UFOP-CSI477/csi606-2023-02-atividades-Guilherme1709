import React, { useState, useEffect } from "react"
import api from "../../services/api"
import { useNavigate, useParams } from "react-router-dom"

const UpdateTiposSanguineos = () => {
  const [tipo, setTipo] = useState('')
  const [fator, setFator] = useState('')

  const { id } = useParams()
  
  useEffect(() => {
    api.get(`/tiposSanguineos/${id}`).then((response) => {
      setTipo(response.data.tipo)
      setFator(response.data.fator)
    })
  }, [id])
  
  const navigate = useNavigate()

  const handleUpdateTipoSanguineo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      id : parseInt(String(id)),
      tipo,
      fator,
    }

    try {
      await api.put('/tipoSanguineo', data)
      alert("Tipo Sanguíneo atualizado com sucesso!")
      navigate("/tiposSanguineos")
    } catch (error) {
      console.error(error)
      alert("Erro na atualização do Tipo Sanguíneo!")
    }
  }

  return (
    <div>
      <h3>Atualização do Tipo Sanguíneo</h3>
      <form onSubmit={handleUpdateTipoSanguineo}>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <input
            type="text"
            name="tipo"
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="fator">Fator</label>
          <input type="text" name="fator" id="fator" value={fator} onChange={(e) => setFator(e.target.value)}/>
        </div>

        <button type="submit">Atualizar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  )
}

export default UpdateTiposSanguineos
