import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function CommentsForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    dispatch({
      type: "ADD_COMMENT",
      payload: { comment },
    });
    history.push("/review");
  };

  return (
    <div>
      <h2>Do you have any questions or comments? Add them here!</h2>
      <input
        type="text"
        placeholder="Share your thoughts"
        onChange={(event) => setComment(event.target.value)}
      ></input>
      <button onClick={handleSubmit}>Review</button>
    </div>
  );
}

export default CommentsForm;
