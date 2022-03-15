import { useParams } from "react-router-dom"
import { FormParaAddEmpresa } from "../FormParaAddEmpresa"

export const Cadastro = ({ paginaCadastro, voltarTelaInicial }) => {



    const getLocalStorage = localStorage.getItem('token')
    console.log(getLocalStorage)

    return (
        <>
            <FormParaAddEmpresa paginaCadastro={paginaCadastro} voltarTelaInicial={voltarTelaInicial} />
        </>
    )

}