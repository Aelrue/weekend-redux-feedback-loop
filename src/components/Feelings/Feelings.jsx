import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function FeelingsForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState(0);

  const handleSubmit = (event) => {
    if (feeling === 0) {
      alert("Please choose a number 1-5");
      return;
    }

    event.preventDefault();
    setFeeling();

    dispatch({
      type: "ADD_FEELING",
      payload: { feeling },
    });
    history.push("/understanding");
  };

  return (
    <div>
      <h2>
        How are you feeling today? 1 being the lowest and 5 being the highest
      </h2>
      <form>
        <input
          required
          placeholder="feeling"
          type="number"
          min="1"
          max="5"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
        <button onClick={handleSubmit}>Next</button>
      </form>
    </div>
  );
}
export default FeelingsForm;
