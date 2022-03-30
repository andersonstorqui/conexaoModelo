import { Switch, Route } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "../components/pages/Home";
import { Cadastro } from "../components/pages/Cadastro";
import { Login } from "../components/pages/Login";
import { ValidandoToken } from "../Services/ValidandoToken"
import { Redirect } from "react-router-dom";

export const Routes = () => {


    const [pesquisa, setPesquisa] = useState("");
    const [filter, setFilter] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    // const [token, setToken] = useState("")

    const arrayDeEmpresas = empresas.Empresas;

    useEffect(() => {
        fetch("http://localhost:3080/MV/clientes")
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


    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //     <Route {...rest} render={props => (
    //         isAuthenticated() ? (
    //             <Component {...props} />
    //         ) : (
    //             <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
    //         )
    //     )} />
    // )



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
            <Route exact path="/cadastro/:id">
                <Cadastro
                    paginaCadastro={paginaCadastro}
                    voltarTelaInicial={voltarTelaInicial}
                    empresas={empresas}
                    setEmpresas={setEmpresas}
                // ValidandoToken={ValidandoToken}
                />
            </Route>
            <Route exact path="/Login">
                <Login />
            </Route>
        </Switch>
    )


}