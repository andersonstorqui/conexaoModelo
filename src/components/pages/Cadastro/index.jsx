import { useParams } from "react-router-dom"
import { ValidandoToken } from "../../../Services/ValidandoToken"
import { FormParaAddEmpresa } from "../FormParaAddEmpresa"
import { Login } from "../Login"

export const Cadastro = ({ paginaCadastro, voltarTelaInicial, empresas, setEmpresas }) => {


    // const getLocalStorage = localStorage.getItem('token')
    // console.log(getLocalStorage)
    const { id } = useParams()


    return (
        <>
            <FormParaAddEmpresa paginaCadastro={paginaCadastro} voltarTelaInicial={voltarTelaInicial} empresas={empresas} setEmpresas={setEmpresas} />
        </>
    )


}