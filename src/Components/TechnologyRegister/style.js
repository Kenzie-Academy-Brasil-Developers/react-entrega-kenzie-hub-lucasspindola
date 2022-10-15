import styled from "styled-components";

export const ContainerRegisterTech = styled.form`
  min-height: 274px;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* .titleContainerTech {
    display: flex;
    align-items: center;
  } */
  .contains {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  input {
    background-color: rgba(52, 59, 65, 1);
    height: 48px;
    border-radius: 4px;
    color: rgba(248, 249, 250, 1);
    width: 90%;
    margin: 0 5%;
  }

  select {
    background-color: rgba(52, 59, 65, 1);
    height: 48px;
    border-radius: 4px;
    color: rgba(248, 249, 250, 1);
    width: 90%;
    margin: 0 5%;
  }
  h3 {
    margin: 0 0 0 5%;
    color: rgba(248, 249, 250, 1);
    font-family: inter;
    font-size: 14px;
    font-style: bold;
    line-height: 24px;
    font-weight: 700;
    /* margin-bottom: 8px; */
  }
  .btnExitRegister {
    margin: 0 5%;
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: rgba(248, 249, 250, 1);
  }
  label {
    margin: 0 5%;
    color: rgba(248, 249, 250, 1);
    font-family: inter;
    font-size: 14px;
    font-style: bold;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .titleContainerTech {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* width: 296px; */
    height: 40px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    background-color: #343b41;
    border-radius: 3px 3px 0 0;
  }
  .btnRegisterTech {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    height: 38px;
    border: none;
    background-color: #ff577f;
    /* color-primary-Disable */
    color: #fff;
    border-radius: 3.2px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 700px) {
    height: 342px;
    width: 369px;

    /* height: 342px;
    width: 369px;
    position: absolute;
    top: 30%; */
  }
`;
