import styled from "styled-components";

export const ContainerDashboard = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  color: #fff;
  header {
    height: 72px;
    width: 100%;
    border-bottom: solid 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      margin: 0 5%;
    }
    button {
      margin: 0 5%;
      height: 32px;
      width: 55.49px;
      border: none;
      border-radius: 4px;
      background-color: rgba(33, 37, 41, 1);
      /* grey-3 */
      color: #fff;
    }
  }

  .containerInformationsProfile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    border-bottom: solid 1px;
    min-height: 131px;
    h2 {
      margin: 0 5%;
    }
    p {
      margin: 0 5%;
    }
  }
  /* .containerDashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  } */
`;
