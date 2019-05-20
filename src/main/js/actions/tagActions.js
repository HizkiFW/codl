import axios from "axios";
import { FETCH_TAGS } from "./types";

const apiUrl = "http://localhost:8080/tag";

export const fetchTags = () => dispatch => {
  axios
    .get(`${apiUrl}/getAll`)
    .then(res => {
      dispatch({
        type: FETCH_TAGS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
