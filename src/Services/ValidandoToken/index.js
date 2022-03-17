import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ValidandoToken = () => {
  const history = useHistory();
  const params = useParams();

  fetch("http://localhost:3001/MV/validatetoken/:token")
    .then((req, res) => {
      return req.json();
    })
    .then((data) => {
      if (data) {
        const urlParams = new URLSearchParams(window.location.search);
        //
        const tokenUrl = urlParams.get("token");
        //

        const getStorage = localStorage.getItem("token");
        const tokenNoStorage = localStorage.setItem("token", tokenUrl);

        setTimeout(() => {
          if (getStorage === null || getStorage === undefined) {
            console.log("Não cadastrado");
            history.push("/Login");
          } else {
            console.log("aooba");

            if (params === "/") {
              return "/";
            } else if (params === "/cadastro") {
              return "/cadastro";
            } else {
              return params === "/Login";
            }
          }
        }, 3000);
      }
    });
  return <></>;
};
