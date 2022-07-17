import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  photo: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      console.log(" action.payload ", action.payload);
      return {
        loading: false,
        error: "",
        photo: action.payload,
      };
    case "FETCH_FAIL":
      return {
        loading: false,
        error: "Failed to fetch data, Something went wrong!!!",
        photo: {},
      };  
    default:
      return state;
  }
};
function DataFetchingUseReducer() {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => dispatch({ type: "FETCH_FAIL" }));
  }, []);

  console.log("data:- ", data);
  return (
    <React.Fragment>
      {data.loading ? (
        "loading"
      ) : (
        <div>
          <div>albumId: {data.photo.albumId}</div>
          <div> "id": {data.photo.id}</div>
          <div>"title": {data.photo.title}</div>
          <div> "url":{data.photo.url}</div>
          <div> "thumbnailUrl": {data.photo.thumbnailUrl}</div>
        </div>
      )}
      {data.error ? data.error : null}
    </React.Fragment>
  );
}

export default DataFetchingUseReducer;
