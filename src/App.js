import React, { Component } from 'react';
import './App.css';
import CreateForm from "./components/CreateForm";
import QuestionList from "./components/QuestionList";


class App extends Component {

  handleSetCurrQuestion = (ev) => {
    this.setState({ currQuestionIndex: ev.currentTarget.dataset.index})
  }
  
  render() {
    const { questionList, currQuestionIndex } = this.state
    return (
      <div className="App">
        <QuestionList 
          handleSetCurrQuestion={this.handleSetCurrQuestion}
          currQuestionIndex={currQuestionIndex} 
          questionList={questionList} />
        <CreateForm  {...questionList[currQuestionIndex]} />
      </div>
    );
  }
}

export default App;
