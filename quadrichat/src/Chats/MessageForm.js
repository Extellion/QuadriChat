import React from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";

export const MessageForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.MessageFrom>
        <S.MessageText ref={register({ required: true })} type="text"></S.MessageText>
        <S.MessageSubmit type="submit"></S.MessageSubmit>
      </S.MessageFrom>
    </form>
  );
};
