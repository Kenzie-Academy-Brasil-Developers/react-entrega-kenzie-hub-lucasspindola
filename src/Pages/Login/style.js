import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;

  .containerLogo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 0;
    width: 90%;
    max-width: 295.83px;
  }

  .containerFormLogin {
    width: 90%;
    max-width: 295.83px;
    background-color: rgba(33, 37, 41, 1);
  }
  .ContainerTitleFormLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 30px 0;
    width: 90%;
    gap: 10px;
  }
  label {
    margin: 0 0 0 5%;
  }
  input {
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(52, 59, 65, 1);
    color: #fff;
    /* grey-2 */
    margin: 0 5% 0 5%;
    border-radius: 3.2px;
  }
  select {
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(52, 59, 65, 1);
    color: #fff;
    /* grey-2 */
    margin: 0 0 0 5%;
    border-radius: 3.2px;
  }
  option {
    /* Editar depois */
  }

  .btnLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(89, 50, 63, 1);
    /* color-primary-Disable */
    color: #fff;
    border-radius: 3.2px;
    margin: 0 0 0 5%;
  }
  .ancoraLinkRegister {
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
  }
  .btnForRegister {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(134, 142, 150, 1);
    /* grey-1 */
    color: #fff;
    border-radius: 3.2px;
    margin: 0 0 0 5%;
  }

  .containerBtnRedirectRegister {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 30px 0;
    width: 90%;
    gap: 10px;
  }
`;
