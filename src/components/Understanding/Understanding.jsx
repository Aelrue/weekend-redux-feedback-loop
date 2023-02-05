import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function UnderstandingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState(0);

  const handleSubmit = (event) => {
    if (understanding === 0) {
      alert("Please choose a number 1-5");
      return;
    }

    event.preventDefault();
    setUnderstanding();

    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: { understanding },
    });
    history.push("/support");
  };

  return (
    <div>
      <h2>
        How well did you understand this week's topics? 1 being the lowest and 5
        being the highest
      </h2>
      {/* <form> */}
      <input
        required
        placeholder="understanding"
        type="number"
        min="1"
        max="5"
        value={understanding}
        onChange={(event) => setUnderstanding(event.target.value)}
      />
      <button onClick={handleSubmit}>Next</button>
      {/* </form> */}
    </div>
  );
}

export default UnderstandingForm;
