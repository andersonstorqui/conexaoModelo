import * as yup from 'yup';
import { useForm, register, handleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import { Form } from './styles';



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







    const onSubmit = async (data, event) => {
        event.preventDefault()
        const postAPI = axios.post("http://localhost:3001/MV/clientes", data)
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

            }
            )

    }


    // const alterandoValorApi = data => {
    // const alterandoAlgumValor = axios.patch("http://localhost:3001/MV/empresasCriadas", data)
    // .then((res) => {
    // 
    // })
    // }

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
                        {/* <input type="text" placeholder="usuário2" {...register("usuario2TS1")} />
                    <input type="text" placeholder="usuário3"{...register("usuario3TS1")} /> */}
                        <input type="text" placeholder="senha" {...register("senhaTS1")} />

                    </div>
                    <div className='Card'>

                        <h3>TS2</h3>
                        <input type="text" placeholder="Ip Interno" {...register("ipInternoTS2")} />
                        <input type="text" placeholder="Ip externo" {...register("ipExternoTS2")} />
                        <input type="text" placeholder="usuário" {...register("usuarioTS2")} />
                        <input type="text" placeholder="senha"{...register("senhaTS2")} />
                    </div>
                    {/*
                <details>
                    <h3>TS3</h3>
                    <input type="text" placeholder="Ip Interno"{...register("ipInternoTS3")} />
                    <input type="text" placeholder="Ip externo" {...register("ipExternoTS3")} />
                    <input type="text" placeholder="usuário"{...register("usuarioTS3")} />
                    <input type="text" placeholder="senha"{...register("senhaTS3")} />
                </details>
                <details>

                    <h3>TS4</h3>
                    <input type="text" placeholder="Ip Interno" {...register("ipInternoTS4")} />
                    <input type="text" placeholder="Ip externo"{...register("ipExternoTS4")} />
                    <input type="text" placeholder="usuário" {...register("usuarioTS4")} />
                    <input type="text" placeholder="senha" {...register("senhaTS4")} />

                </details>
                <details>

                    <h3>TS5</h3>
                    <input type="text" placeholder="Ip Interno"{...register("ipInternoTS5")} />
                    <input type="text" placeholder="Ip externo"{...register("ipExternoTS5")} />
                    <input type="text" placeholder="usuário" {...register("usuarioTS5")} />
                    <input type="text" placeholder="senha"{...register("senhaTS5")} />

                </details>

                <details>
                    <h3>Rede Wifi</h3>
                    <input type="text" placeholder="Rede" {...register("rede")} />
                    <input type="text" placeholder="Senha" {...register("senha")} />
                    <input type="text" placeholder="Rede2" {...register("rede2")} />
                    <input type="text" placeholder="Senha2" {...register("senha2")} />
                    <input type="text" placeholder="Rede3" {...register("rede3")} />
                    <input type="text" placeholder="Senha" {...register("senha3")} />

                </details> */}
                    <div className='Card'>


                        <h3>Banco Oracle Prod</h3>
                        <input type="text" placeholder="Ip"{...register("ipBancoProd")} />
                        <input type="text" placeholder="Usuário" {...register("usuarioBancoProd")} />
                        <input type="text" placeholder="Senha"{...register("senhaBancoProd")} />
                        <input type="text" placeholder="Host" {...register("hostBancoProd")} />
                        <input type="text" placeholder="Porta" {...register("portaBancoProd")} />
                        <input type="text" placeholder="SSID" {...register("ssidBancoProd")} />
                    </div>

                    {/* <details>
                    <h3>Banco Oracle Prod2</h3>
                    <input type="text" placeholder="Ip"{...register("ipBancoProd2")} />
                    <input type="text" placeholder="Usuário" {...register("usuarioBancoProd2")} />
                    <input type="text" placeholder="Senha"{...register("senhaBancoProd2")} />

                </details> */}
                    <div className='Card'>

                        <h3>Banco Oracle Teste</h3>
                        <input type="text" placeholder="Ip" {...register("ipBancoTeste")} />
                        <input type="text" placeholder="Usuário" {...register("usuarioBancoTeste")} />
                        <input type="text" placeholder="Senha" {...register("senhaBancoTeste")} />
                        <input type="text" placeholder="Host" {...register("hostBancoTeste")} />
                        <input type="text" placeholder="Porta" {...register("portaBancoTeste")} />
                        <input type="text" placeholder="SSID" {...register("ssidBancoTeste")} />
                    </div>
                    {/* <details>

                    <h3>Banco Oracle Teste2</h3>
                    <input type="text" placeholder="Ip"{...register("ipBancoTeste2")} />
                    <input type="text" placeholder="Usuário" {...register("usuarioBancoTeste2")} />
                    <input type="text" placeholder="Senha"{...register("senhaBancoTeste2")} />
                </details> */}
                    <div className='Card'>

                        <h3>Foco ERP Prod</h3>
                        <input type="text" placeholder="Ip"{...register("ipFocoProd")} />
                        <input type="text" placeholder="Usuário"{...register("usuarioFocoProd")} />
                        <input type="text" placeholder="Senha"{...register("senhaFocoProd")} />
                    </div>
                    {/* <details>

                    <h3>Foco ERP Prod2</h3>
                    <input type="text" placeholder="Ip" {...register("ipFocoProd2")} />
                    <input type="text" placeholder="Usuário" {...register("usuarioFocoProd2")} />
                    <input type="text" placeholder="Senha" {...register("senhaFocoProd2")} />

                </details> */}
                    <div className='Card'>


                        <h3>Foco ERP Teste</h3>
                        <input type="text" placeholder="Ip" {...register("ipFocoTeste")} />
                        <input type="text" placeholder="Usuário" {...register("usuarioFocoTeste")} />
                        <input type="text" placeholder="Senha"{...register("senhaFocoTeste")} />
                    </div>
                    {/* <details>

                    <h3>Foco ERP Teste2</h3>
                    <input type="text" placeholder="Ip" {...register("ipFocoTeste2")} />
                    <input type="text" placeholder="Usuário"{...register("usuarioFocoTeste2")} />
                    <input type="text" placeholder="Senha"{...register("senhaFocoTeste2")} />
                </details> */}
                    {/* <details>

                        <h3>Acesso Vpn</h3>
                        <input type="text" placeholder="Gateway"{...register("gatewayVPN")} />
                        <input type="text" placeholder="Ip" {...register("ipVPN")} />
                        <input type="text" placeholder="Usuário"{...register("usuarioVPN")} />
                        <input type="text" placeholder="Senha"{...register("senhaVPN")} />
                    </details>
                    <details>


                        <h3>Acesso Vpn2</h3>
                        <input type="text" placeholder="Gateway"{...register("gatewayVPN2")} />
                        <input type="text" placeholder="Ip"{...register("ipVPN2")} />
                        <input type="text" placeholder="Usuário" {...register("usuarioVPN2")} />
                        <input type="text" placeholder="Senha"{...register("senhaVPN2")} />

                    </details>
                    <details>
                        <h3>Acesso Vpn3</h3>
                        <input type="text" placeholder="Gateway" {...register("gatewayVPN3")} />
                        <input type="text" placeholder="Ip"{...register("ipVPN3")} />
                        <input type="text" placeholder="Usuário"{...register("usuarioVPN3")} />
                        <input type="text" placeholder="Senha" {...register("senhaVPN3")} />
                    </details> */}
                    <div className='Card'>

                        <div className='div__inputObservacao'>

                            <input type="text" placeholder="Observações" {...register("observacoes")} />

                        </div>
                    </div>
                </div>
                <div className='div__botoes'>

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
                    <button onClick={voltarTelaInicial}>Voltar a tela inicial</button>
                    {/* <button type='submit'>Alterar Dados</button> */}

                </div>

            </div>

        </Form >
    )
}

