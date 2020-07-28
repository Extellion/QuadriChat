import React from "react";

import * as S from "./styles";

export const GroupInput = ({ children }) => <S.GroupInput>{children}</S.GroupInput>;

export const TextInput = ({ type, name, label, placeholder, forwardRef, ...props }) => (
  <GroupInput>
    <span>{label}</span>
    <S.Input type={type} placeholder={placeholder} ref={forwardRef} {...props} name={name}></S.Input>
  </GroupInput>
);

export const Submit = () => <input type="submit"></input>;
