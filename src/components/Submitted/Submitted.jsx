import { useHistory } from "react-router-dom";

function Submitted() {
  const history = useHistory();
  const homePage = () => {
    history.push("/feelings");
  };

  return (
    <>
      <h1>Thank you for your feedback!</h1>
      <button onClick={homePage}>Leave New Feedback</button>
    </>
  );
}

export default Submitted;
