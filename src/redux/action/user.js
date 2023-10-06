import axios from "axios";
import { SET_USER } from "../constant/user";

export let setUserAction = () => {
  return (dispatch) => {
    axios({
      url: "https://64e1f45bab0037358818889f.mockapi.io/user",
      method: "GET",
    })
      .then((res) => {
        let action = {
          type: SET_USER,
          payload: res.data,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
