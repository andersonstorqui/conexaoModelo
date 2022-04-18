import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "../components/pages/Home";
import { Cadastro } from "../components/pages/Cadastro";
import { Login } from "../components/pages/Login";
import { ValidandoToken } from "../Services/ValidandoToken"
import { FormAtualizarCliente } from "../components/pages/AtualizarCliente"


export const Routes = () => {


    const [pesquisa, setPesquisa] = useState("");
    const [filter, setFilter] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    // const [token, setToken] = useState("")


    useEffect(() => {
        fetch("http://localhost:3080/MV/clientes")
            .then((res) => res.json())
            .then((res) => {
                setEmpresas(res);
            })
            .catch((err) => console.log(err));
    }, []);

    const arrayDeEmpresas = empresas.Empresas;

    const mostrarItensFiltrados = () => {
        const itemFiltrado = arrayDeEmpresas.filter((item) => {
            return item._nome.name.toLowerCase().includes(pesquisa.toLowerCase());
        });
        setFilter(itemFiltrado);
    };



    const history = useHistory();



    const redirecionamento = router => {
        history.push(router);
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
                    paginaCadastro={() => redirecionamento("/cadastro")}
                    ValidandoToken={ValidandoToken}
                    telaDeAtualizacao={() => redirecionamento("/atualizar")}
                />
            </Route>
            <Route exact path="/cadastro">
                <Cadastro
                    voltarTelaInicial={() => redirecionamento("/")}
                    empresas={empresas}
                    setEmpresas={setEmpresas}
                // ValidandoToken={ValidandoToken}
                />
            </Route>
            <Route exact path="/Login">
                <Login />
            </Route>
            <Route exact path="/atualizar">
                <FormAtualizarCliente voltarTelaInicial={() => redirecionamento("/")} empresas={empresas} setEmpresas={setEmpresas} />
            </Route>
        </Switch>
    )


}