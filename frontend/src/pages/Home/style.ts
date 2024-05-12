import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const HomeContainer = styled.div`
  /* border: 1px solid #ccc; */
  padding: 2rem 2rem 2rem 20rem;
  display: flex;
  max-width: 1000px;
  height: 100vh;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const EntryInput = styled.textarea`
  width: 100%;
  height: 60vh;
  resize: none;
  padding: 1rem;
  font-size: 1rem;
  color: ${COLORS.black};
  background-color: inherit;
  border: none;
  &:active, &:focus {
    outline: none;
  }
  
`;

export const StyledButton = styled.button<{
  color?: string;
  bg?: string;
  loading?: boolean;
  icon?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.bg ? props.bg : COLORS.black)};
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  cursor: pointer;

  & svg {
    margin-right: 1.5rem;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  /* &:hover {
    background-color: ${(props) =>
      props.color ? `${props.color}cc` : "#007bffcc"};
    cursor: pointer;
  }

  ${(props) =>
    props.loading &&
    `
    background-color: #666;
    cursor: progress;
  `} */
`;

export const Container = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "0.5rem 2rem",
  // border: "1px solid #ccc",
};
