import { NavPesquisa } from "../NavPesquisa"
import { ItensPesquisados } from "../ItensPesquisados"
import { Div } from "./style"
export const Home = ({ pesquisa, setPesquisa, mostrarItensFiltrados, filter, paginaCadastro, ValidandoToken, telaDeAtualizacao }) => {

    const getLocalStorage = localStorage.getItem('token')




    return (
        <>
            <Div>
                <section>
                    <h1>Informações de acessos aos clientes</h1>
                    <NavPesquisa
                        pesquisa={pesquisa}
                        setPesquisa={setPesquisa}
                        mostrarItensFiltrados={mostrarItensFiltrados}
                        paginaCadastro={paginaCadastro}
                        telaDeAtualizacao={telaDeAtualizacao}
                    />
                    <main>
                        <ItensPesquisados filter={filter} />
                    </main>
                </section>
            </Div>
        </>
    )
}