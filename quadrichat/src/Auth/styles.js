import styled from "styled-components";

const colors = {
  inputColor: "#99A3BA",
  inputBorder: "#CDD9ED",
  inputBackground: "#fff",
  inputPlacehold: "#CBD1DC",
  inputBorderFocus: "#275EFE",
  groupColor: "#99A3BA",
  groupBoder: "#CDD9ED",
  groupBackground: "#EEF4FF",
  groupColorFocus: "#fff",
  groupBorderFocus: "#275EFE",
  groupBackgoundFocus: "#678EFE",
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: ${colors.inputColor};
  border: 1px solid ${colors.inputborder};
  border-left: 0;
  margin-left: -7px;
  background: ${colors.inputBackground};
  transition: border 0.3s ease;
  &::placeholder {
    color: ${colors.inputPlaceholder};
  }
  &:focus {
    outline: none;
    border-color: ${colors.inputBorderFocus};
  }
`;

export const GroupInput = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 360px;
  & > span,
  .form-field {
    white-space: nowrap;
    display: block;
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
  }
  .form-field {
    position: relative;
    z-index: 1;
    flex: 1 1 auto;
    width: 1%;
    margin-top: 0;
    margin-bottom: 0;
  }
  & > span {
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 25px;
    color: ${colors.groupColor};
    background: ${colors.groupBackground};
    border: 1px solid ${colors.groupBorder};
    transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
    z-index: 2;
  }
  &:focus-within {
    & > span {
      color: ${colors.groupColorFocus};
      background: ${colors.groupBackgroundFocus};
      border-color: ${colors.groupBorderFocus};
    }
  }
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
