import styled from "styled-components";

export const Ul = styled.ul`
  @media (min-width: 1000px) {
    position: absolute;
    top: 94%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90vw;
    text-align: center;
    align-items: center;
    height: 100vh;
    justify-content: space-around;

    li {
      list-style: none;
      width: 28%;
      height: 70%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 18px;
    }
    details {
      background-color: #000;
      color: #fff;
      text-align: left;
      height: 6%;
      width: 100%;
    }
    summary {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 6px;
      background-image: linear-gradient(to right, #231c1c, #231c1c);

      /* height: 95%; */
    }
    table {
      color: #000;
      /* display: flex; */
      /* flex-direction: column; */
      /* flex-wrap: wrap; */
      /* align-items: flex-start; */

      /*  */
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;

      overflow: scroll;
      height: 64vh;
      margin-top: 15px;

      width: 100%;
    }
    tr {
      display: flex;

      flex-direction: column;
    }
  }
`;
