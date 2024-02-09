import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import ListEstados from "./components/estados/ListEstados"
import CreateEstado from "./components/estados/CreateEstado"
import UpdateEstado from "./components/estados/UpdateEstado"
import CreateCidade from "./components/cidades/CreateCidade"
import ListCidades from "./components/cidades/ListCidades"
import UpdateCidade from "./components/cidades/UpdateCidade"
import ListPessoas from "./components/pessoas/ListPessoas"
import CreatePessoas from "./components/pessoas/CreatePessoas"
import UpdatePessoas from "./components/pessoas/UpdatePessoa"
import ListTiposSanguineos from "./components/tiposSanguineos/ListTiposSanguineos"
import CreateTiposSanguineos from "./components/tiposSanguineos/CreateTiposSanguineos"
import UpdateTiposSanguineos from "./components/tiposSanguineos/UpdateTipoSanguineo"
import ListLocaisColeta from "./components/locaisColeta/ListLocaisColeta"
import CreateLocaisColeta from "./components/locaisColeta/CreateLocaisColeta"
import UpdateLocaisColeta from "./components/locaisColeta/UpdateLocaisColeta"
import ListDoacoes from "./components/doacoes/ListDoacoes"
import CreateDoacoes from "./components/doacoes/CreateDoacoes"
import UpdateDoacoes from "./components/doacoes/UpdateDoacoes"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/estados" element={<ListEstados/>} />
                <Route path="/estados/create" element={<CreateEstado />} />
                <Route path="/estados/update/:id" element={<UpdateEstado />} />

                <Route path="/cidades/create" element={<CreateCidade />} />
                <Route path="/cidades" element={<ListCidades />}/>
                <Route path="/cidades/update/:id" element={<UpdateCidade />} />
                
                <Route path="/pessoas" element={<ListPessoas />} />
                <Route path="/pessoas/create" element={<CreatePessoas />} />
                <Route path="/pessoas/update/:id" element={<UpdatePessoas />} />
                
                <Route path="/tiposSanguineos" element={<ListTiposSanguineos />} />
                <Route path="/tiposSanguineos/create" element={<CreateTiposSanguineos />} />
                <Route path="/tiposSanguineos/update/:id" element={<UpdateTiposSanguineos />} />

                <Route path="/locaisColeta" element={<ListLocaisColeta />} />
                <Route path="/locaisColeta/create" element={<CreateLocaisColeta />} />
                <Route path="/locaisColeta/update/:id" element={<UpdateLocaisColeta />} />

                <Route path="/doacoes" element={<ListDoacoes />} />
                <Route path="/doacoes/create" element={<CreateDoacoes />} />
                <Route path="/doacoes/update/:id" element={<UpdateDoacoes />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes