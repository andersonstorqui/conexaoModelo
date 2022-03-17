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
      if (data === true) {
        const urlParams = new URLSearchParams(window.location.search);
        //
        const tokenUrl = urlParams.get("token");
        //

        const getStorage = localStorage.getItem("token");
        const tokenNoStorage = localStorage.setItem("token", tokenUrl);

        console.log(getStorage);

        if (getStorage == null) {
          console.log("não tem token");
        } else {
          console.log("tem token");
        }
      }
    });
  return <></>;
};
