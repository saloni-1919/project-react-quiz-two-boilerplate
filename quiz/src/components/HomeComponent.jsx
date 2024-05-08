import PropTypes from "prop-types"; // Import PropTypes

import "./HomeComponent.css";

function HomeComponent(props) {
  const handlePlayClick = () => {
    props.playCallback(); // Call the play callback function from props
  };

  return (
    <div className="container">
      <h2>Quiz App</h2>
      <button className="play btn" onClick={handlePlayClick}>Play</button>
    </div>
  );
}

HomeComponent.propTypes = {
  playCallback: PropTypes.func.isRequired // Define prop validation for playCallback
};

export default HomeComponent;
