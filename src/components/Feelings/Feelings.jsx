import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function FeelingsForm() {
  const [feeling, setFeeling] = useState(0);

  // const dispatch = useDispatch();
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //     dispatch({
  //       type: "ADD_FEELING",
  //       payload: { feeling },
  //     });
  //   };
  return (
    <>
      <h1>
        How are you feeling today? 0 being the lowest and 5 being the highest
      </h1>
      {/* <form onSubmit={handleSubmit()}> */}
      <form>
        <input
          required
          placeholder="feeling"
          type="number"
          min="0"
          max="5"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
        <button>Next</button>
      </form>
    </>
  );
}
export default FeelingsForm;
