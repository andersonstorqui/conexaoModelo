import { useParams } from "react-router-dom";
import { ValidandoToken } from "../../../Services/ValidandoToken";
import { FormParaAddEmpresa } from "../FormParaAddEmpresa";
import { Login } from "../Login";

const Cadastro = ({ voltarTelaInicial, empresas, setEmpresas }) => {
  // const getLocalStorage = localStorage.getItem('token')
  // console.log(getLocalStorage)
  const { id } = useParams();

  return (
    <>
      <FormParaAddEmpresa
        voltarTelaInicial={voltarTelaInicial}
        empresas={empresas}
        setEmpresas={setEmpresas}
      />
    </>
  );
};

export default Cadastro;
