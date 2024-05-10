import styled from "styled-components";


export const StyledButton = styled.button<{ color?: string; loading?: boolean }>`
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.color || '#007bff'};
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${props => props.color ? `${props.color}cc` : '#007bffcc'};
    cursor: pointer;
  }

  ${props => props.loading && `
    background-color: #666;
    cursor: progress;
  `}
`;

export const Container = {
	maxWidth: "1000px",
	margin: "0 auto",
	padding: "0.5rem 2rem",
  // border: "1px solid #ccc",
};