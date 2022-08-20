import styled from "styled-components";

const NumberStyled = styled.p`
  width: 69px;
  height: 60px;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f7b718;
  @media (max-width: 768px) {
    width: 30%;
    font-size: 35px;
  }
`;

export default NumberStyled;
