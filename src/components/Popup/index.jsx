const Popup = ({ mostrarAcessos, setModalVisible, idPesquisado, filter }) => {
  return (
    <section>
      <ul>
        {idPesquisado.map((item, index) => {
          return (
            <>
              <li>
                <h2>{item.nome_fantasia}</h2>
              </li>
              <li>
                <h4>{item.cnpj_cpf}</h4>
              </li>
              <li>
                <h4>{item.informacoes_adicionais}</h4>
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default Popup;
