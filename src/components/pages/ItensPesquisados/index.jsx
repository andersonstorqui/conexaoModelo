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
                                <thead>
                                    <tr>
                                        <th>Observações:
                                            {item._nome.observacoes}
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </details>
                    </li>
                )
            })}
        </ Ul>
    )
}