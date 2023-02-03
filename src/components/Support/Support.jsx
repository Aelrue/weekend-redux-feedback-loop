import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function SupportForm() {
  const [support, setSupport] = useState(0);

  return (
    <>
      <h1>
        How well do you feel supported? 0 being the lowest and 5 being the
        highest
      </h1>
      <form>
        <input
          required
          placeholder="support"
          type="number"
          min="0"
          max="5"
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
        <button>Next</button>
      </form>
    </>
  );
}

export default SupportForm;
