import React, { useState } from "react";
import * as yup from "yup";
import { useForm, register, handleSubmit, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

export const AddAcesso = ({}) => {
  const rotaAddAcesso = "http://localhost:3000/MV/acesso/create";

  const schema = yup.object().shape({
    usuario: yup.string(),
    senhha: yup.string(),
    host: yup.string(),
    observacao: yup.string(),
    ParceiroId: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitAcesso = (data, event) =>
    axios
      .post(rotaAddAcesso, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

  return (
    <>
      <h1>Adicionar informações</h1>
      <form onSubmit={handleSubmit(onSubmitAcesso)}>
        <input
          type="hidden"
          name="ParceiroId"
          //   value={}
          {...register("ParceiroId")}
        />

        <input
          name="usuario"
          type="text"
          placeholder="usuario"
          {...register("usuario")}
        />
        <input
          type="text"
          name="senha"
          placeholder="senha"
          {...register("senha")}
        />
        <input
          type="text"
          name="host"
          placeholder="host"
          {...register("host")}
        />
        <input
          type="text"
          name="observacao"
          placeholder="observação"
          {...register("observacao")}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
