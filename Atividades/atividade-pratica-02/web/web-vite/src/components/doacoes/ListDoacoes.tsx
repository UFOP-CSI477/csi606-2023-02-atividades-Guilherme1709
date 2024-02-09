import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { PessoaInterface } from "../pessoas/ListPessoas";
import { LocalColetaInterface } from "../locaisColeta/ListLocaisColeta";

export interface DoacaoInterface {
  id: number
  pessoa_id: number
  pessoa: PessoaInterface
  local_id: number
  local: LocalColetaInterface
  data: string
  created_at: string
  updated_at: string
}

const ListDoacoes = () => {
  const [doacoes, setDoacoes] = useState<DoacaoInterface[]>([]);

  useEffect(() => {
    api.get('/doacoes').then(response => {
      setDoacoes(response.data);
    });
    
  }, []);

  const handleDeleteDoacao = async (id: number) => {
    if (!window.confirm("Confirma a exclusão da doação?")) {
      return;
    }

    try {
      await api.delete('/doacoes', {
        data: {
          id
        }
      });

      alert("Doação excluída com sucesso");

      setDoacoes(doacoes.filter(doacao => doacao.id !== id));
      
    } catch (error) {
      alert("Erro na exclusão da doação");
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Lista de Doações</h3>
      <div>
        <Link to="/doacoes/create">Inserir</Link>
      </div>

      <div>
        <Link to="/">Voltar</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Pessoa</th>
            <th>Local de Coleta</th>
            <th>Data</th>
            <th>Criado</th>
            <th>Alterado</th>
            <th>Atualizar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {doacoes.map(doacao => (
            <tr key={doacao.id}>
              <td>{doacao.id}</td>
              <td>{doacao.pessoa.nome}</td>
              <td>{doacao.local.nome}</td>
              <td>{doacao.data}</td>
              <td>{doacao.created_at}</td>
              <td>{doacao.updated_at}</td>
              <td><Link to={`/doacoes/update/${doacao.id}`}>Atualizar</Link></td>
              <td><button onClick={() => handleDeleteDoacao(doacao.id)}>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDoacoes;
