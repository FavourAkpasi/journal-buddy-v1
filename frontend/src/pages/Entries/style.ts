import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const EntriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Entry = styled.div`
  background-color: ${COLORS.lightGray};
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 30%;
  height: 20rem;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  & div {
    background-color: ${COLORS.mediumOrange};
    color: white;
    padding: 1rem;
    width: 100%;
    display: flex;
    gap: 1rem;
   
  }
  & p {
    position: relative;
    height: 100%;
    padding: 0 1rem 2rem 1rem;
    overflow: scroll;
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    mask-mode: alpha;
  }
`;

