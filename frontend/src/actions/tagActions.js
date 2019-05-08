import { FETCH_TAGS } from "./types";

export const fetchTags = () => dispatch => {
  fetch("http://localhost:8080/getTags")
    .then(res => res.json())
    .then(tags =>
      dispatch({
        type: FETCH_TAGS,
        payload: tags
      })
    );
};
