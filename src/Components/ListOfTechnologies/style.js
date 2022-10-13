import styled from "styled-components";

export const LiTech = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #212529;
  border-radius: 4px;
  margin: 0 5%;
  gap: 20px;
  padding: 20px 0;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 13px 8px;
    width: 90%;
    margin: 0 5%;
    background-color: rgba(18, 18, 20, 1);
    button {
      display: none;
    }
  }

  @media only screen and (min-width: 700px) {
    margin: 0 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 13px 8px;

      div {
        display: flex;
        flex-direction: row;
        gap: 20px;
        button {
          display: block;
          background-color: transparent;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;
