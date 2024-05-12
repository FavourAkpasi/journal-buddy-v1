import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width: 230px;
  background-color: ${COLORS.mediumOrange};
  color: ${COLORS.black};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 2rem 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  & .text {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  & svg {
    margin-right: 1.5rem;
  }
  &:active {
    color: ${COLORS.darkGreen};
  }
`;

export const SidebarButton = styled(SidebarItem)`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:active {
    color: ${COLORS.white};
  }
`;
