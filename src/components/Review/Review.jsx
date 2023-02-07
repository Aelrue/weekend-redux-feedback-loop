import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();

  // grab all entries from store
  const feelingReducer = useSelector((store) => store.feelingR);
  const understandingReducer = useSelector((store) => store.understandingR);
  const supportReducer = useSelector((store) => store.supportR);
  const commentReducer = useSelector((store) => store.commentR);

  // creating object with store data to send to reducer
  const feedbackBundle = {
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
  };

  // post data to DB on click and route to submitted page
  const submitFeedback = (event) => {
    event.preventDefault();
    axios
      .post("/feedback", feedbackBundle)
      .then((response) => {
        console.log("In post", response.data);
      })
      .catch((error) => {
        console.log("error posting", error);
      });
    history.push("/submitted");
  };

  // display data from entries
  return (
    <>
      <div>
        <h1>Feedback Review</h1>
        <ul>
          <li>Feeling: {feelingReducer}</li>
          <li>Understanding: {understandingReducer}</li>
          <li>Support: {supportReducer}</li>
          <li>Comments: {commentReducer}</li>
        </ul>
        <button onClick={submitFeedback}>Submit Feedback</button>
      </div>
    </>
  );
}

export default Review;
