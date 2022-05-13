import React, { useState } from "react";
import * as yup from "yup";
import { useForm, register, handleSubmit, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Section } from "./styles";
import { useParams } from "react-router-dom";
import { Toast } from "../Toastify/Toast";
import { AddAcesso } from "../../FormAddAcesso";

export const FormParaAddEmpresa = ({
  voltarTelaInicial,
  telaDeAtualizacao,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    nome_fantasia: yup.string().required("Campo Obrigatório"),
    cnpj_cpf: yup.string(),
    informacoes_adicionais: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   const { id } = useParams();

  // console.log(useParams())

  const onSubmit = (data, event) =>
    axios
      .post("http://localhost:3000/MV/clientes", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

  return (
    <Section>
      <h1>Cadastrar Clientes</h1>
      <article className="addClientes">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="nome_fantasia"
            type="text"
            placeholder="Nome fantasia"
            {...register("nome_fantasia")}
          />
          <input
            type="text"
            name="cnpj_cpf"
            placeholder="CPNJ/CPF"
            {...register("cnpj_cpf")}
          />
          <input
            type="text"
            name="informacoes_adicionais"
            placeholder="Informações Adicionais"
            {...register("informacoes_adicionais")}
          />
          <button type="submit">Enviar</button>
        </form>
      </article>
      <article className="addAcesso">
        <AddAcesso />
      </article>
    </Section>
  );
};
