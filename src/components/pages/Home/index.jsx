import { NavPesquisa } from "../NavPesquisa"
import { ItensPesquisados } from "../ItensPesquisados"
import { Div } from "./style"
import { ValidandoToken } from "../../../Services/ValidandoToken"
export const Home = ({ pesquisa, setPesquisa, mostrarItensFiltrados, filter, paginaCadastro, ValidandoToken }) => {

    const getLocalStorage = localStorage.getItem('token')



    return (
        <>
            <ValidandoToken />
            <Div>
                <section>
                    <h1>Informações de acessos aos clientes</h1>
                    <NavPesquisa
                        pesquisa={pesquisa}
                        setPesquisa={setPesquisa}
                        mostrarItensFiltrados={mostrarItensFiltrados}
                        paginaCadastro={paginaCadastro}
                    />
                    <main>
                        <ItensPesquisados filter={filter} />
                    </main>
                </section>
            </Div>
        </>
    )
}