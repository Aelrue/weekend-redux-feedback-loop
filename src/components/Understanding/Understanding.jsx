import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function UnderstandingForm() {
  const [understanding, setUnderstanding] = useState(0);

  return (
    <>
      <h1>
        How well did you understand this week's topics? 0 being the lowest and 5
        being the highest
      </h1>
      <form>
        <input
          required
          placeholder="understanding"
          type="number"
          min="0"
          max="5"
          value={understanding}
          onChange={(event) => {
            setUnderstanding(event.target.value);
          }}
        />
        <button>Next</button>
      </form>
    </>
  );
}

export default UnderstandingForm;
