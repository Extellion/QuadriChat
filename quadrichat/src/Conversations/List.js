import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

export const List = () => {
  const chats = [
    { name: "quadrilatere", id: 1, isPrivate: false },
    { name: "quadrilatere2", id: 2, isPrivate: false },
    { id: 1, isPrivate: true, user: { name: "Nono", id: 1 } },
    { id: 2, isPrivate: true, user: { name: "Quentin", id: 2 } },
    { id: 3, isPrivate: true, user: { name: "Andy", id: 3 } },
    { id: 4, isPrivate: true, user: { name: "Allan", id: 4 } },
  ];
  const currentUserId = 4;

  return (
    <S.Wrapper>
      <S.ConversationsList>
        {chats &&
          chats.length > 0 &&
          chats.map((item, index) => {
            console.log("pass here?");
            if (item && item.isPrivate) {
              if (item.user.id === currentUserId) {
                return (
                  <S.ConversationItem>
                    <Link to={`/chats/private/${item.id}`}>Private conversation with Myself</Link>
                  </S.ConversationItem>
                );
              }
              return (
                <S.ConversationItem>
                  <Link to={`/chats/private/${item.id}`}>Private conversation with {item.user.name}</Link>
                </S.ConversationItem>
              );
            }
            return (
              <S.ConversationItem>
                <Link to={`/chats/group/${item.id}`}>{item.name}</Link>
              </S.ConversationItem>
            );
          })}
      </S.ConversationsList>
    </S.Wrapper>
  );
};
