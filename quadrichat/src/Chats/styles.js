import styled from "styled-components";

const colors = {
  myMessage: "#ffb7c5",
  message: "#4c8bf5",
  background: "#fff",
};

export const Wrapper = styled.div`
  background-color: ${colors.background};
  height: 100%;
`;

export const ConversationName = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 42px;
  font-weight: bold;
  padding-top: 20px;
`;

export const MessageList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.li`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  span {
    font-weight: bold;
  }

  display: flex;
  padding: 20px;
  max-height: 20px;
  width: 100%;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "end")};
`;
