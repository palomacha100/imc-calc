import styled from "styled-components";

const TextStyled = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  .Text {
    width: 70px;
  }
  .result {
    width: 359px;
  }
  @media (max-width: 768px) {
    width: 95%;
    font-size: 20px;
  }
`;

export default TextStyled;
