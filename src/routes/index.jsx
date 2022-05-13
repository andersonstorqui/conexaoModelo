import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "../components/pages/Home";
import Cadastro from "../components/pages/Cadastro";
import { Login } from "../components/pages/Login";
import { ValidandoToken } from "../Services/ValidandoToken";
import { FormAtualizarCliente } from "../components/pages/AtualizarCliente";
import popup from "../components/Popup/index";

const getRotaNode = "http://localhost:3000/MV/clientes";

export const Routes = () => {
  const [pesquisa, setPesquisa] = useState("");
  const [filter, setFilter] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [idPesquisado, setIdPesquisado] = useState([]);
  const [modalVisivel, setModalVisible] = useState(false);
  // const [token, setToken] = useState("")

  useEffect(() => {
    fetch(getRotaNode)
      .then((res) => res.json())
      .then((res) => {
        setEmpresas(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const mostrarItensFiltrados = () => {
    // console.log(empresas);
    const itemFiltrado = empresas.filter((item) => {
      return item.nome_fantasia.toLowerCase().includes(pesquisa.toLowerCase());
    });
    setFilter(itemFiltrado);
  };

  const mostrarAcessos = (id) => {
    setModalVisible(true);
    const acessoParceiro = empresas.filter((item) => {
      return item.id === id;
    });
    console.log(acessoParceiro);
    setIdPesquisado(acessoParceiro);
  };
  const history = useHistory();

  const paginaCadastro = () => {
    history.push("/cadastro");
  };

  const paginaAtualizacao = () => {
    history.push("/atualizar");
  };

  const paginaHome = () => {
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
          ValidandoToken={ValidandoToken}
          telaDeAtualizacao={paginaAtualizacao}
          mostrarAcessos={mostrarAcessos}
          modalVisivel={modalVisivel}
          setModalVisible={setModalVisible}
          idPesquisado={idPesquisado}
        />
      </Route>
      <Route exact path="/cadastro">
        <Cadastro
          voltarTelaInicial={paginaHome}
          empresas={empresas}
          setEmpresas={setEmpresas}
          // ValidandoToken={ValidandoToken}
        />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/atualizar">
        <FormAtualizarCliente
          voltarTelaInicial={paginaHome}
          empresas={empresas}
          setEmpresas={setEmpresas}
        />
      </Route>
    </Switch>
  );
};
