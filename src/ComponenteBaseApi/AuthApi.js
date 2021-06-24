import axios from "axios";
import { BASE_URL } from "../ComponenteBaseApi";

export const postAuth = () => {
  const body = {
    name: "labe-ninjas3-molina",
  };
  axios
    .post(`${BASE_URL}/auth`, body)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

postAuth()