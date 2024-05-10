import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const AuthContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  & h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  & p {
    font-size: 1.2rem;
    text-align: center;
    color: ${COLORS.textGray};
    & span {
      color: ${COLORS.mediumOrange};
      font-weight: bold;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & .forgot-password {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    color: ${COLORS.mediumOrange};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;
  gap: 1.5rem;
`;
export const AuthInput = styled.input<{ $color: string;}>`
  padding: 1rem 2rem;
  background-color: ${COLORS.gray};
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  width: 75%;
  margin: 0 auto;
  &:focus {
    outline: 0.1rem solid ${(props) => props.$color};
    color: ${(props) => props.$color};
    &::placeholder {
      color:${COLORS.textGray};
    }
  }
`;
export const AuthButton = styled.button<{ $color: string; $bgColor: string }>`
  padding: 1.2rem 2rem;
  margin: 2rem auto;
  width: 80%;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  & svg {
    margin-right: 0.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const PrivacyBox = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & input {
    margin-right: 0.5rem;
  }
  & p {
    font-size: 1rem;
  }
`;
