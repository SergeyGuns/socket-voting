import React, { Component } from 'react';
import './App.css';
import CreateForm from "./components/CreateForm";
import QuestionList from "./components/QuestionList";

const QUESTION_TYPES = [
  'checkbox',
  'radio',
  'range'
]

class App extends Component {
  state = {
    questionList: [
      {
        questionType: QUESTION_TYPES[1],
        questionText: 'q1',
        questionAnswers: [
          '',
        ]
      },
      {
        questionType: QUESTION_TYPES[1],
        questionText: 'q2',
        questionAnswers: [
          '',
        ]
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <QuestionList questionList={this.state.questionList} />
        <CreateForm/>
      </div>
    );
  }
}

export default App;
