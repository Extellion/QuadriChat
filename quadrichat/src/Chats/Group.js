import React from "react";

import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";
import * as S from "./styles";

export const Group = () => (
  <S.Wrapper>
    <S.ConversationName>Quadrilatere</S.ConversationName>
    <MessageList>
      <S.Message>
        <span>Nono: </span>
        Premier message
      </S.Message>
      <S.Message>
        <span>Andy: </span>
        Deuxième message
      </S.Message>
      <S.Message>
        <span>Quentin: </span>
        Troisieme message
      </S.Message>
      <S.Message isMine>Mon message</S.Message>
      <S.Message>
        <span>Nono: </span>
        Sixieme message
      </S.Message>
    </MessageList>
    <MessageForm />
  </S.Wrapper>
);
