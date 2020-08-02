import React from "react";
import { useForm } from "react-hook-form";

export const Create = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Conv name</span>
        <input ref={register({ required: true })} type="text"></input>
        <span>People</span>
        <input ref={register({ required: true })} type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};
