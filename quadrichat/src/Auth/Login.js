import React from "react";
import { useForm } from "react-hook-form";

import { Title, Wrapper } from "./styles";
import { TextInput, Submit } from "./Fields";

export const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <Title>Login to Quadrichat</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.email && <span>field required</span>}
        <TextInput
          type="text"
          name="email"
          forwardRef={register({ required: true })}
          label="email"
          placeholder="your@email.com"
        />
        {errors.password && <span>field required</span>}
        <TextInput
          type="password"
          name="password"
          forwardRef={register({ required: true })}
          label="password"
          placeholder="****"
        />
        <Submit />
      </form>
    </Wrapper>
  );
};
