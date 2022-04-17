import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 90%;
  z-index: 1;
  top: 5%;
  left: 4.7%;
  border-radius: 12px;
  opacity: 1;
  background-image: linear-gradient(to right, #231c1c, #231c1c);
  background-repeat: no-repeat;
  button {
    /* border-left: none; */
    /* position: absolute; */
    /* left: 65%; */
    /* top: 6.6%; */
    display: none;
    /* height: 2.7vh; */
    /* background-color: #fff; */
    /* border: none; */
  }
  figure {
    width: 20vw;
  }
  a {
  }
  img {
    width: 100%;
  }
  form {
    display: flex;
    width: 25vw;
  }
  input {
    height: 3.8vh;
    width: 90%;
    border-radius: 8px;
    text-align: center;
    color: grey;
  }
  .btn__PaginaCadastro {
    display: flex;
    border-radius: 8px;
    /* text-align: center; */
    width: 12%;
    height: 4.4vh;
    color: grey;
    justify-content: center;
    background-color: #fff;
    align-items: center;
  }
  p {
    position: absolute;
    top: 35%;
    color: #000;
    left: 59%;  }
`;
