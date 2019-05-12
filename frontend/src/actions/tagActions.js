import { FETCH_TAGS } from "./types";

export const fetchTags = () => dispatch => {
  fetch("http://localhost:8080/getTags")
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .then(tags =>
      dispatch({
        type: FETCH_TAGS,
        payload: tags
      })
    )
    .catch(error => {
      console.log(error);
    });
};
