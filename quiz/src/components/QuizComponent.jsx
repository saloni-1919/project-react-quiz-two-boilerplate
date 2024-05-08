import { Component } from "react";
import "./QuizComponent.css";
import questionsData from "../resources/quizQuestion.json";

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questionsData,
      currentQuestionIndex: 0,
      showQuitPopup: false
    };
  }

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.max(prevState.currentQuestionIndex - 1, 0),
      showQuitPopup: false // Hide the quit popup when navigating
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.min(
        prevState.currentQuestionIndex + 1,
        prevState.questions.length - 1
      ),
      showQuitPopup: false // Hide the quit popup when navigating
    }));
  };

  handleQuit = () => {
    this.setState({ showQuitPopup: true });
  };

  render() {
    const { questions, currentQuestionIndex, showQuitPopup } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <div className="quiz-box">
        <h1 className="quiz-title">Question</h1>
          <div className="quiz-counter">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>         
          <p className="quiz-question">{currentQuestion.question}</p>
          <div className="quiz-options">
            <button className="quiz-option btn" id="a">
              {currentQuestion.optionA}
            </button>
            <button className="quiz-option btn" id="b">
              {currentQuestion.optionB}
            </button>
            <button className="quiz-option btn" id="c">
              {currentQuestion.optionC}
            </button>
            <button className="quiz-option btn" id="d">
              {currentQuestion.optionD}
            </button>
          </div>
          <div className="quiz-controllers">
            <button className="quiz-btn prev" onClick={this.handlePrevious}>
              Previous
            </button>
            <button className="quiz-btn next" onClick={this.handleNext}>
              Next
            </button>
            <button className="quiz-btn quit" onClick={this.handleQuit}>
              Quit
            </button>
          </div>
          {showQuitPopup && (
            <div className="quit-popup">
              <p>Are you sure you want to quit?</p>
              <button>Yes</button>
              <button onClick={() => this.setState({ showQuitPopup: false })}>
                No
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
