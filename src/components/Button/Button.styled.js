import styled from "styled-components";

const ButtonStyled = styled.h2`
  width: 350px;
  margin: 40px 0;
  height: 60px;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: #f7b718;
  border-radius: 4px;
  cursor: pointer;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default ButtonStyled;
