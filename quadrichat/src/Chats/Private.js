import React from "react";

import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";
import * as S from "./styles";

export const Private = () => (
  <S.Wrapper>
    <S.ConversationName>Private conversation between you and nono</S.ConversationName>
    <MessageList>
      <S.Message>Message un</S.Message>
      <S.Message>Mon Message</S.Message>
    </MessageList>
    <MessageForm />
  </S.Wrapper>
);
