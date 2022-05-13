import { Nav } from "./style";
import { useHistory } from "react-router-dom";

// import { BiSearchAlt } from "react-icons/bi";

export const NavPesquisa = ({
  pesquisa,
  setPesquisa,
  mostrarItensFiltrados,
  telaDeAtualizacao,
}) => {
  const history = useHistory();

  const paginaCadastro = () => {
    history.push("/cadastro");
  };
  return (
    <Nav>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            value={pesquisa}
            placeholder="Pesquise por empresa"
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <button
            className="btn_form"
            type="submit"
            onClick={mostrarItensFiltrados}
          >
            Pesquisar
          </button>
        </div>
        <button className="btn_form" type="submit" onClick={paginaCadastro}>
          Adicionar
        </button>
      </form>
      {/* <button
        className="btn__PaginaCadastro"
        type="submit"
        onClick={telaDeAtualizacao}
      >
        Atualizar cliente
      </button> */}
    </Nav>
  );
};
