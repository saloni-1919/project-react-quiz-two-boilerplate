import { Component } from "react";
import PropTypes from "prop-types";
import "./ResultComponent.css";

export default class ResultComponent extends Component {
  render() {
    const { totalQuestions, attemptedQuestions, correctAnswers } = this.props;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    return (
      <div className="container result">
        <h1>Result</h1>
        <div className="main-box">
          <h3 className="msg">
            {scorePercentage >= 50 ? "Well Done!" : "Practice More!"}
          </h3>
          <h1 className="score">Score: {scorePercentage.toFixed(0)}%</h1>
          <div className="result-details">
            <div className="score-row">
              <div className="ld">Total number of questions</div>
              <div className="detailed-score">{totalQuestions}</div>
            </div>
            <div className="score-row">
              <div className="ld">Number of attempted questions</div>
              <div className="detailed-score">{attemptedQuestions}</div>
            </div>
            <div className="score-row">
              <div className="ld">Number of correct answers</div>
              <div className="detailed-score">{correctAnswers}</div>
            </div>
            <div className="score-row">
              <div className="ld">Number of wrong answers</div>
              <div className="detailed-score">
                {attemptedQuestions - correctAnswers}
              </div>
            </div>
          </div>
        </div>
        <div className="end-buttons">
          <button className="end-btn play-again">Play Again</button>
          <button className="end-btn back-home">Back to Home</button>
        </div>
      </div>
    );
  }
}
ResultComponent.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  attemptedQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
};
