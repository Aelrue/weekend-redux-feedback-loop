import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function SupportForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState(0);

  const handleSubmit = (event) => {
    if (support === 0) {
      alert("Please choose a number 1-5");
      return;
    }
    event.preventDefault();
    setSupport();

    dispatch({
      type: "ADD_SUPPORT",
      payload: { support },
    });
    history.push("/comments");
  };

  return (
    <div>
      <h2>
        How well do you feel supported? 1 being the lowest and 5 being the
        highest
      </h2>
      <form>
        <input
          required
          placeholder="support"
          type="number"
          min="1"
          max="5"
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
        <button onClick={handleSubmit}>Next</button>
      </form>
    </div>
  );
}

export default SupportForm;
