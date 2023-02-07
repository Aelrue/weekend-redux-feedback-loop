import { useHistory } from "react-router-dom";

function Submitted() {
  const history = useHistory();

  const homePage = () => {
    event.preventDefault();
    // sends user back to feelings
    history.push("/feelings");
    // refreshed app and clears redux data
    window.location.reload();
  };

  return (
    <>
      <h1>Thank you for your feedback!</h1>
      <button onClick={homePage}>Leave New Feedback</button>
    </>
  );
}

export default Submitted;
