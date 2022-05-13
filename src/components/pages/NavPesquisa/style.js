import styled from "styled-components";

export const Nav = styled.nav`
  .btn_form {
    box-sizing: inherit;
    line-height: 1.5;
    font-weight: 250;
    color: #fff;
    background-color: #303030;
    border-radius: 3px;
    border: 1px solid #303030;
    width: 15%;
    margin-bottom: 18px;
    box-shadow: 0 2px 2px 0 rgb(66 165 245 / 14%),
      0 3px 1px -2px rgb(66 165 245 / 20%), 0 1px 5px 0 rgb(66 165 245 / 12%);
    transition: 0.2s ease-in;
  }
  div {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
  button {
    /* width: 100%; */
  }
  input {
    width: 35vw;
    height: 3vh;
  }
`;
