import styled from "styled-components";

const TitleStyled = styled.h1`
  width: 321px;
  height: 60px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 40px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export default TitleStyled;
