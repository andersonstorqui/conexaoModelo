import { Switch, Route } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "../components/pages/Home";
import { Cadastro } from "../components/pages/Cadastro";
import axios from "axios";
import { Login } from "../components/pages/Login";

export const Routes = () => {


    const [pesquisa, setPesquisa] = useState("");
    const [filter, setFilter] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    // const [token, setToken] = useState("")

    const arrayDeEmpresas = empresas.Empresas;

    useEffect(() => {
        fetch("http://localhost:3001/MV/empresasListadas")
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

    const urlParams = new URLSearchParams(window.location.search);

    const tokenUrl = urlParams.get("token")

    const tokenNoStorage = localStorage.setItem('token', tokenUrl)
    const getStorage = localStorage.getItem('token')




    return (
        <Switch>
            <Route exact path="/">
                <Home
                    pesquisa={pesquisa}
                    setPesquisa={setPesquisa}
                    mostrarItensFiltrados={mostrarItensFiltrados}
                    filter={filter}
                    paginaCadastro={paginaCadastro}
                />
            </Route>
            <Route exact path="/cadastro">
                <Cadastro
                    paginaCadastro={paginaCadastro}
                    voltarTelaInicial={voltarTelaInicial}
                />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    )


}