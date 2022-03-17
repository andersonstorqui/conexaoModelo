import { Switch, Route } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "../components/pages/Home";
import { Cadastro } from "../components/pages/Cadastro";
import { Login } from "../components/pages/Login";
import { ValidandoToken } from "../Services/ValidandoToken"

export const Routes = () => {


    const [pesquisa, setPesquisa] = useState("");
    const [filter, setFilter] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    // const [token, setToken] = useState("")

    const arrayDeEmpresas = empresas.Empresas;

    useEffect(() => {
        fetch("http://localhost:3001/MV/clientes")
            .then((res) => res.json())
            .then((res) => {
                setEmpresas(res);
            })
            .catch((err) => console.log(err));
    }, []);


    const mostrarItensFiltrados = () => {
        const itemFiltrado = arrayDeEmpresas.filter((item) => {
            return item._nome.name.toLowerCase().includes(pesquisa.toLowerCase());
        });
        setFilter(itemFiltrado);
    };



    const history = useHistory();



    const paginaCadastro = () => {
        history.push("/cadastro");
    };

    const voltarTelaInicial = () => {
        history.push("/");
    };




    return (
        <Switch>
            <Route exact path="/">
                <Home
                    pesquisa={pesquisa}
                    setPesquisa={setPesquisa}
                    mostrarItensFiltrados={mostrarItensFiltrados}
                    filter={filter}
                    paginaCadastro={paginaCadastro}
                    ValidandoToken={ValidandoToken}
                />
            </Route>
            <Route exact path="/cadastro">
                <Cadastro
                    paginaCadastro={paginaCadastro}
                    voltarTelaInicial={voltarTelaInicial}
                    ValidandoToken={ValidandoToken}
                />
            </Route>
            <Route exact path="/Login">
                <Login />
            </Route>
        </Switch>
    )


}