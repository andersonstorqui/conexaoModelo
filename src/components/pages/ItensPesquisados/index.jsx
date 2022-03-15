import { Ul } from "./style"


export const ItensPesquisados = ({ filter }) => {

    return (
        <Ul>
            {filter.map((item, index) => {
                return (
                    <li key={index}>

                        <details>
                            <summary>{item._nome.name}</summary>
                            <table>



                                <thead>
                                    <tr>
                                        <th>TS1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ip-Interno: {item._nome.ipInternoTS1}</td>
                                        <td>Ip-Externo: {item._nome.ipExternoTS1}</td>
                                        <td>Usuário: {item._nome.usuarioTS1}</td>
                                        {/* <td>Usuário2: {item._nome.usuario2TS1}</td>
                                    <td>Usuário3: {item._nome.usuario3TS1}</td> */}
                                        <td>Senha: {item._nome.senhaTS1}</td>

                                    </tr>
                                </tbody>



                                <thead>
                                    <tr>
                                        <th>TS2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ip-Interno: {item._nome.ipInternoTS2}</td>
                                        <td>Ip-Externo: {item._nome.ipExternoTS2}</td>
                                        <td>Usuário: {item._nome.usuarioTS2}</td>
                                        <td>Senha: {item._nome.senhaTS2}</td>
                                    </tr>
                                </tbody>
                                {/* <tr>
                                    <th>TS3</th>
                                </tr>
                                <tr>
                                    <td>Ip-Interno: {item._nome.ipInternoTS3}</td>
                                    <td>Ip-Externo: {item._nome.ipExternoTS3}</td>
                                    <td>Usuário: {item._nome.usuarioTS3}</td>
                                    <td>Senha: {item._nome.senhaTS3}</td>
                                </tr>
                                <tr>
                                    <th>TS4</th>
                                </tr>
                                <tr>
                                    <td>Ip-Interno: {item._nome.ipInternoTS4}</td>
                                    <td>Ip-Externo: {item._nome.ipExternoTS4}</td>
                                    <td>Usuário: {item._nome.usuarioTS4}</td>
                                    <td>Senha: {item._nome.senhaTS4}</td>
                                </tr>
                                <tr>
                                    <th>TS5</th>
                                </tr>
                                <tr>
                                    <td>Ip-Interno: {item._nome.ipInternoTS5}</td>
                                    <td>Ip-Externo: {item._nome.ipExternoTS5}</td>
                                    <td>Usuário: {item._nome.usuarioTS5}</td>
                                    <td>Senha: {item._nome.senhaTS5}</td>

                                </tr>
                                <tr>
                                    <th>Rede Wifi</th>
                                </tr>
                                <tr>

                                    <td>Rede: {item._nome.rede}</td>
                                    <td>Senha: {item._nome.senha}</td>
                                    <td>Rede2: {item._nome.rede2}</td>
                                    <td>Senha2:{item._nome.senha2}</td>
                                    <td>Rede3: {item._nome.rede3}</td>
                                    <td>Senha3: {item._nome.senha3}</td>
                                </tr> */}
                                <thead>
                                    <tr>

                                        <th>Banco Oracle Prod</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ip: {item._nome.ipBancoProd}</td>
                                        <td>Usuário: {item._nome.usuarioBancoProd}</td>
                                        <td>Senha: {item._nome.senhaBancoProd}</td>
                                        <td>Host/TNS: {item._nome.hostBancoProd}</td>
                                        <td>Porta: {item._nome.portaBancoProd}</td>
                                        <td>SSID: {item._nome.ssidBancoProd}</td>
                                    </tr>
                                </tbody>
                                {/* <tr>
                                    <th>Banco Oracle Prod2</th>
                                </tr>
                                <tr>
                                    <td>Ip: {item._nome.ipBancoProd2}</td>
                                    <td>Usuário: {item._nome.usuarioBancoProd2}</td>
                                    <td>Senha: {item._nome.senhaBancoProd2}</td>
                                </tr> */}
                                <thead>
                                    <tr>
                                        <th>Banco Oracle Teste</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ip: {item._nome.ipBancoTeste}</td>
                                        <td>Usuário: {item._nome.usuarioBancoTeste}</td>
                                        <td>Senha: {item._nome.senhaBancoTeste}</td>
                                        <td>Host/TNS: {item._nome.hostBancoTeste}</td>
                                        <td>Porta: {item._nome.portaBancoTeste}</td>
                                        <td>SSID: {item._nome.ssidBancoTeste}</td>
                                    </tr>
                                </tbody>
                                {/* <tr>
                                    <th>Banco Oracle Teste2</th>
                                </tr>
                                <tr>
                                    <td>Ip: {item._nome.ipBancoTeste2}</td>
                                    <td>Usuário: {item._nome.usuarioBancoTeste2}</td>
                                    <td>Senha: {item._nome.senhaBancoTeste2}</td>
                                </tr> */}
                                <thead>
                                    <tr>
                                        <th>Foco ERP Prod</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ip: {item._nome.ipFocoProd}</td>
                                        <td>Usuário: {item._nome.usuarioFocoProd}</td>
                                        <td>Senha: {item._nome.senhaFocoProd}</td>
                                    </tr>
                                </tbody>
                                {/* <tr>
                                    <th>Foco ERP Prod2</th>
                                    <tr />
                                    <tr>
                                        <td>Ip: {item._nome.ipFocoProd2}</td>
                                        <td>Usuário: {item._nome.usuarioFocoProd2}</td>
                                        <td>Senha: {itWarning: validateDOMNesting(...): <tr> cannot appear as a child of <table>. Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.em._nome.senhaFocoProd2}</td>
                                    </tr> */}
                                <thead>
                                    <tr>
                                        <th>Foco ERP Teste</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ip: {item._nome.ipFocoTeste}</td>
                                        <td>Usuário: {item._nome.usuarioFocoTeste}</td>
                                        <td>Senha: {item._nome.senhaFocoTeste}</td>
                                    </tr>
                                </tbody>
                                {/* <tr>
                                    <th>Foco ERP Teste2</th>
                                </tr>
                                <tr>
                                    <td>Ip: {item._nome.ipFocoTeste2}</td>
                                    <td>Usuário: {item._nome.usuarioFocoTeste2}</td>
                                    <td>Senha: {item._nome.senhaFocoTeste2}</td>
                                </tr>
                                <tr>
                                    <th>Acesso VPN</th>
                                </tr>
                                <tr>
                                    <td>Gateway: {item._nome.gatewayVPN}</td>
                                    <td>Ip: {item._nome.ipVPN}</td>
                                    <td>Usuário: {item._nome.usuarioVPN}</td>
                                    <td>Senha: {item._nome.senhaVPN}</td>
                                </tr>
                                <tr>
                                    <th>Acesso VPN2</th>
                                </tr>
                                <tr>
                                    <td>Gateway: {item._nome.gatewayVPN2}</td>
                                    <td>Ip: {item._nome.ipVPN2}</td>
                                    <td>Usuário: {item._nome.usuarioVPN2}</td>
                                    <td>Senha: {item._nome.senhaVPN2}</td>
                                </tr>
                                <tr>
                                    <th>Acesso VPN3</th>
                                </tr>
                                <tr>
                                    <td>Gateway: {item._nome.gatewayVPN3}</td>
                                    <td>Ip: {item._nome.ipVPN3}</td>
                                    <td>Usuário: {item._nome.usuarioVPN3}</td>
                                    <td>Senha: {item._nome.senhaVPN3}</td>
                                </tr> */}
                                <thead>
                                    <tr>
                                        <th>Observações:
                                            {item._nome.observacoes}
                                        </th>
                                    </tr>
                                    {/* </tr> */}
                                </thead>
                            </table>
                        </details>
                    </li>
                )
            })}
        </ Ul>
    )
}