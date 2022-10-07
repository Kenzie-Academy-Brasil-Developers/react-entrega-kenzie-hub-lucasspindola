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

    h3 {
      font-family: inter;
      font-style: bold;
      font-size: 18px;
      line-height: 28px;
      font-weight: 700;
      color: #f8f9fa;
      /* grey-0 */
    }
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
    font-family: inter;
    font-style: regular;
    font-size: 9px;
    color: #f8f9fa;
  }
  input {
    font-family: inter;
    font-style: regular;
    font-size: 12.99px;
    line-height: 21.1px;
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(52, 59, 65, 1);
    color: #868e96;
    /* grey-2 */
    margin: 0 5% 0 5%;
    border-radius: 3.2px;
    padding: 8px;
    font-weight: 400;
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

  .btnLogin {
    cursor: pointer;
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

  .btnLogin:hover {
    background-color: rgba(255, 87, 127, 1);
  }
  .ancoraLinkRegister {
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
    font-style: semi bold;
    font-size: 9.63px;
    line-height: 14px;
    color: rgba(134, 142, 150, 1);
    /* grey-1 */
  }
  .btnForRegister {
    cursor: pointer;
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

  .btnForRegister:hover {
    background-color: rgba(255, 87, 127, 1);
  }

  .containerBtnRedirectRegister {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 30px 0;
    width: 90%;
    gap: 10px;
  }

  p {
    margin: 0 5%;
    font-size: 16px;
    color: #fff;
  }
`;
