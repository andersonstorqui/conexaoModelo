import { Table } from "./style";

export const ItensPesquisados = ({
  filter,
  mostrarAcessos,
  idPesquisado,
  modalVisivel,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>NOME FANTASIA</th>
          <th>CNPJ/CPF</th>
          <th>OBSERVAÇÕES</th>
        </tr>
      </thead>
      <tbody>
        {filter.map((item, index) => {
          return (
            <tr>
              <td key={Number(index) + 999}> {item.nome_fantasia}</td>
              <td key={Number(index) + 888}> {item.cnpj_cpf}</td>
              <td key={Number(index) + 777}> {item.informacoes_adicionais}</td>
              <td>
                <button
                  key={Number(index) + 666}
                  onClick={() => mostrarAcessos(item.id)}
                >
                  Acessos
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
