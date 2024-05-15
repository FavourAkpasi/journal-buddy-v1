import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const ChatContainer = styled.div`
  height: 70vh;
  width: 100%;
  padding: 1rem;
  overflow: auto;
  & p {
    margin: 0;
    padding: 0;
  }
`;

export const ChatMessages = styled.div`
  padding: 1rem;
  width: 90%;
  display: flex;
  align-items: start;
  flex-direction: column;
  & svg {
    font-size: 1rem;
  }
`;

export const ChatInput = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  font-size: 1rem;
  color: ${COLORS.textGray};
  background-color: inherit;
  position: relative;
  & textarea {
    width: 100%;
    resize: none;
    padding: 1rem 3rem 1rem 1rem;
    font-size: 1rem;
    background-color: inherit;
    border-radius: 1rem;
    color: ${COLORS.textGray};
    &:active,
    &:focus {
      outline: 1px solid ${COLORS.black};
      color: ${COLORS.black};
    }
  }
  & svg {
    font-size: 2rem;
    margin: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
`;
