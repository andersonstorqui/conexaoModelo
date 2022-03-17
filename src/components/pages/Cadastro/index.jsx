import { ValidandoToken } from "../../../Services/ValidandoToken"
import { FormParaAddEmpresa } from "../FormParaAddEmpresa"

export const Cadastro = ({ paginaCadastro, voltarTelaInicial }) => {



    const getLocalStorage = localStorage.getItem('token')
    console.log(getLocalStorage)

    return (
        <>
            <ValidandoToken />
            <FormParaAddEmpresa paginaCadastro={paginaCadastro} voltarTelaInicial={voltarTelaInicial} />
        </>
    )

}