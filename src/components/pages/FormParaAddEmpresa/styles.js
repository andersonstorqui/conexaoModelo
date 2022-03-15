import styled from "styled-components";

export const Form = styled.form`
  color: #fff;
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .div__nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #000;
    /* height: 100vh; */
    /* width: 90%; */

    width: 90vw;
  }
  h1 {
    font-weight: 300;
    margin-left: 20px;
    margin-top: 20px;
  }
  p {
    margin-left: 69px;
  }
  input {
    margin-bottom: 10px;
    height: 3vh;
    background-color: ghostwhite;
    border: none;
    border-radius: 5px;
  }
  .div__input {
    margin-left: 69px;
    width: 40%;
  }
  .div__engloba__todo__card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90vw;
    flex-wrap: wrap;

    background-color: #000;
  }
  .Card {
    display: flex;
    flex-direction: column;
    /* width: 40%; */
    width: 40%;
  }

  div {
    /* width: 100%; */
  }
  h3 {
  }

  .div__inputObservacao {
    margin: 0 auto;
  }
  .div__inputObservacao > input {
    width: 40vw;
  }

  .div__botoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 90vw;
    margin-top: -1px;
  }
  .div__botoes > button {
    height: 4vh;
    width: 12vw;
    margin-right: 10px;
    margin-top: 20px;
  }
  .div__background {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 84%;
    height: 100vh;
    margin-top: -1px;
  }
  .div__engloba__titleEInput {
    /* width: 90vw; */
    display: flex;
    width: 84vw;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }
  svg {
    width: 13%;
    background-color: green;
    border-radius: 60%;
    float: right;
    margin-top: -35px;
    margin-left: -137px;
  }
  .Toastify__close-button {
    display: none;
  }
`;
