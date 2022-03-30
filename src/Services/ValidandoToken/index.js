import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ValidandoToken = () => {
  const history = useHistory();
  // const params = useParams();

  axios.get("http://localhost:3080/MV/validatetoken/?token").then((data) => {
    if (data) {
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams);
      //

      const tokenUrl = urlParams.get("token");
      //

      const getStorage = localStorage.getItem("token");
      const tokenNoStorage = localStorage.setItem("token", tokenUrl);

      console.log(getStorage);

      if (getStorage == null) {
        console.log("não tem token");
        history.push("/Login");
      } else {
      }
    }
  });
  return <></>;
};
