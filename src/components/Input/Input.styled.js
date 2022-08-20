import styled from "styled-components";

export const RangeInput = styled.input`
  appearance: none;
  width: 350px;
  height: 25px;
  background: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 280px;
  }

  ::-webkit-slider-thumb {
    appearance: none;
    width: 45px;
    height: 45px;
    border-radius: 100%;

    background: #f7b718;
    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;
