import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  icon?: JSX.Element;
  text?: string;
  className?: string;
  onClick?: () => void;
  bgcolor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${props => props.bgcolor || 'white'};
  border-radius: 3px;
  border: none;
  color: ${props => props.color || 'black'};
  margin: 0 1em;
  padding: 0.25em 1em;
  display: flex;
  align-items: center;
  gap: 10px;

  ${props => props.className && css`${props.className}`};

  &:hover {
    background: ${props => props.bgcolor || 'black'};
    color: ${props => props.color || 'white'};
  }
`;

const Button: React.FC<ButtonProps> = ({ icon, text, onClick, bgcolor }) => {
  return (
    <StyledButton bgcolor={bgcolor} onClick={onClick}>
      {icon}
      {text}
    </StyledButton>
  );
};

export default Button;