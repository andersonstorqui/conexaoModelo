import * as yup from 'yup';
import { useForm, register, handleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import { Form } from './styles';
import { useParams } from "react-router-dom"


export const FormParaAddEmpresa = ({ voltarTelaInicial }) => {




    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        ipInternoTS1: yup.string(),
        ipExternoTS1: yup.string(),
        usuarioTS1: yup.string(),
        usuario2TS1: yup.string(),
        usuario3TS1: yup.string(),
        senhaTS1: yup.string(),

        ipInternoTS2: yup.string(),
        ipExternoTS2: yup.string(),
        usuarioTS2: yup.string(),
        senhaTS2: yup.string(),


        ipInternoTS3: yup.string(),
        ipExternoTS3: yup.string(),
        usuarioTS3: yup.string(),
        senhaTS3: yup.string(),

        ipInternoTS4: yup.string(),
        ipExternoTS4: yup.string(),
        usuarioTS4: yup.string(),
        senhaTS4: yup.string(),

        ipInternoTS5: yup.string(),
        ipExternoTS5: yup.string(),
        usuarioTS5: yup.string(),
        senhaTS5: yup.string(),

        rede: yup.string(),
        senha: yup.string(),
        rede2: yup.string(),
        senha2: yup.string(),
        rede3: yup.string(),
        senha3: yup.string(),

        ipBancoProd: yup.string(),
        usuarioBancoProd: yup.string(),
        senhaBancoProd: yup.string(),

        ipBancoProd2: yup.string(),
        usuarioBancoProd2: yup.string(),
        senhaBancoProd2: yup.string(),

        ipBancoTeste: yup.string(),
        usuarioBancoTeste: yup.string(),
        senhaBancoTeste: yup.string(),

        ipBancoTeste2: yup.string(),
        usuarioBancoTeste2: yup.string(),
        senhaBancoTeste2: yup.string(),

        ipFocoProd: yup.string(),
        usuarioFocoProd: yup.string(),
        senhaFocoProd: yup.string(),

        ipFocoProd2: yup.string(),
        usuarioFocoProd2: yup.string(),
        senhaFocoProd2: yup.string(),

        ipFocoTeste: yup.string(),
        usuarioFocoTeste: yup.string(),
        senhaFocoTeste: yup.string(),

        ipFocoTeste2: yup.string(),
        usuarioFocoTeste2: yup.string(),
        senhaFocoTeste2: yup.string(),

        gatewayVPN: yup.string(),
        ipVPN: yup.string(),
        usuarioVPN: yup.string(),
        senhaVPN: yup.string(),

        gatewayVPN2: yup.string(),
        ipVPN2: yup.string(),
        usuarioVPN2: yup.string(),
        senhaVPN2: yup.string(),

        gatewayVPN3: yup.string(),
        ipVPN3: yup.string(),
        usuarioVPN3: yup.string(),
        senhaVPN3: yup.string(),
        observacoes: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const { id } = useParams()

    console.log(useParams())



    const onSubmit = async (data, event) => {
        event.preventDefault()
        const postAPI = axios.post("http://localhost:3080/MV/clientes", data)
            .then((res) => {
                toast.success("Cadastro efetuado!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

            })


        const putApi = axios.put(`http://localhost:3080/MV/clientes/${id}`, data).then((res) => {
            console.log(data)
            console.log(res)
        })

    }




    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='div__engloba__titleEInput'>
                <div className='div__nav'>
                    {/* <img src="https://i.ibb.co/ngFvNn9/MV-LOGO-PRETO.png" alt="MV-LOGO-PRETO" /> */}
                    <h1>Cadastrar Empresa</h1>
                    <p>Nome Fantasia</p>
                    <input className='div__input' type="text" placeholder="Nome" {...register("name")} />
                    {errors.name?.message}
                </div>
            </div >
            <div className='div__background'>
                <div className='div__engloba__todo__card'>

                    <div className='Card'>
                        <h3>TS1</h3>
                        <input type="text" placeholder="Ip Interno" {...register("ipInternoTS1")} />
                        <input type="text" placeholder="Ip externo" {...register("ipExternoTS1")} />
                        <input type="text" placeholder="usuário"{...register("usuarioTS1")} />
                        <input type="text" placeholder="senha" {...register("senhaTS1")} />

                    </div>
                    <div className='Card'>

                        <h3>TS2</h3>
                        <input type="text" placeholder="Ip Interno" {...register("ipInternoTS2")} />
                        <input type="text" placeholder="Ip externo" {...register("ipExternoTS2")} />
                        <input type="text" placeholder="usuário" {...register("usuarioTS2")} />
                        <input type="text" placeholder="senha"{...register("senhaTS2")} />
                    </div>
                    <div className='Card'>


                        <h3>Banco Oracle Prod</h3>
                        <input type="text" placeholder="Ip"{...register("ipBancoProd")} />
                        <input type="text" placeholder="Usuário" {...register("usuarioBancoProd")} />
                        <input type="text" placeholder="Senha"{...register("senhaBancoProd")} />
                        <input type="text" placeholder="Host" {...register("hostBancoProd")} />
                        <input type="text" placeholder="Porta" {...register("portaBancoProd")} />
                        <input type="text" placeholder="SSID" {...register("ssidBancoProd")} />
                    </div>

                    <div className='Card'>

                        <h3>Banco Oracle Teste</h3>
                        <input type="text" placeholder="Ip" {...register("ipBancoTeste")} />
                        <input type="text" placeholder="Usuário" {...register("usuarioBancoTeste")} />
                        <input type="text" placeholder="Senha" {...register("senhaBancoTeste")} />
                        <input type="text" placeholder="Host" {...register("hostBancoTeste")} />
                        <input type="text" placeholder="Porta" {...register("portaBancoTeste")} />
                        <input type="text" placeholder="SSID" {...register("ssidBancoTeste")} />
                    </div>
                    <div className='Card'>

                        <h3>Foco ERP Prod</h3>
                        <input type="text" placeholder="Ip"{...register("ipFocoProd")} />
                        <input type="text" placeholder="Usuário"{...register("usuarioFocoProd")} />
                        <input type="text" placeholder="Senha"{...register("senhaFocoProd")} />
                    </div>
                    <div className='Card'>


                        <h3>Foco ERP Teste</h3>
                        <input type="text" placeholder="Ip" {...register("ipFocoTeste")} />
                        <input type="text" placeholder="Usuário" {...register("usuarioFocoTeste")} />
                        <input type="text" placeholder="Senha"{...register("senhaFocoTeste")} />
                    </div>
                    <div className='Card'>

                        <div className='div__inputObservacao'>

                            <input type="text" placeholder="Observações" {...register("observacoes")} />

                        </div>
                    </div>
                </div>
                <div className='div__botoes'>postAPI

                    <button type="submit">Cadastrar</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <button formAction='postAPI' onClick={voltarTelaInicial}>Voltar a tela inicial</button>
                    <button formAction='putApi' type='submit'>Alterar Dados</button>

                </div>

            </div>

        </Form >
    )
}

