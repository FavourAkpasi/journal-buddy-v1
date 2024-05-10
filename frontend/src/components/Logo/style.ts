import styled from "styled-components";
import { LOGO } from "../../assets/images";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-image:url('${LOGO}');
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 1px solid #ccc; */
  /* & img {
    width: 100px;
    height: 100px;
  } */

`;