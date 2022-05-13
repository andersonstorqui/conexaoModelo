import { NavPesquisa } from "../NavPesquisa";
import { ItensPesquisados } from "../ItensPesquisados";
import { Section } from "./style";

import Popup from "../../Popup";

export const Home = ({
  pesquisa,
  setPesquisa,
  mostrarItensFiltrados,
  filter,
  ValidandoToken,
  telaDeAtualizacao,
  mostrarAcessos,
  idPesquisado,
  modalVisivel,
  setModalVisible,
}) => {
  const getLocalStorage = localStorage.getItem("token");

  return (
    <Section>
      <NavPesquisa
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        mostrarItensFiltrados={mostrarItensFiltrados}
        telaDeAtualizacao={telaDeAtualizacao}
      />
      <main>
        <ItensPesquisados
          filter={filter}
          idPesquisado={idPesquisado}
          mostrarAcessos={mostrarAcessos}
          modalVisivel={modalVisivel}
        />
        <section>
          {modalVisivel && (
            <Popup
              modalVisivel={modalVisivel}
              setModalVisible={setModalVisible}
              idPesquisado={idPesquisado}
              filter={filter}
            />
          )}
        </section>
      </main>
    </Section>
  );
};
