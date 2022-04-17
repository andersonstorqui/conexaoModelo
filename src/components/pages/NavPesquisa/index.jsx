import { Nav } from "./style"
import { BiSearchAlt } from "react-icons/bi"

export const NavPesquisa = ({
  pesquisa,
  setPesquisa,
  mostrarItensFiltrados,
  paginaCadastro,
  telaDeAtualizacao
}) => {


  return (
    <Nav>
      <figure>
        <a href="http://portal.modelovencedor.com.br/home">
          <img src="https://i.ibb.co/ngFvNn9/MV-LOGO-PRETO.png" alt="MV-LOGO-PRETO" />
        </a>
      </figure>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={pesquisa}
          placeholder="Pesquise por empresa"
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <p>{<BiSearchAlt />}</p>
        <button type="submit" onClick={mostrarItensFiltrados}>
          Pesquisar
        </button>
      </form>
      <button className="btn__PaginaCadastro" type="submit" onClick={paginaCadastro}>Cadastro</button>
      <button className="btn__PaginaCadastro" type="submit" onClick={telaDeAtualizacao} >Atualizar cliente</button>

    </Nav>
  );
};

