import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 834px;
  height: 535px;
  margin: 50px auto 0 auto;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const WeightGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  height: 99px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const HeightGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  height: 99px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
