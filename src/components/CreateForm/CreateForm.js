import React from 'react'

const QUESTION_TYPES = [
  'checkbox',
  'radio',
  'range'
]

export default class CreateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      questionType: QUESTION_TYPES[1],
      questionText: '',
      questionAnswers: [
        '',
      ]
    }
  }
  handleSetQuestionType = ev => (
    this.setState({ questionType: ev.target.value })
  )
  handleSetQuestionText = ev => (
    this.setState({ questionText: ev.target.value })
  )
  handleAddAnswer = () => {
    let newAnswers = this.state.questionAnswers
    newAnswers.push('')
    this.setState({ questionAnswers: newAnswers })
  }

  handleSerAnswerText = ev => {
    this.setState({
      questionAnswers : this.state.questionAnswers.map((answer,index)=>{
        if(index === +ev.target.dataset.index) {
          return ev.target.value
        }
        return answer
      })
    })
  }
  render() {
    const { questionType, questionAnswers } = this.state
    return (
      <div className="create-form">
        <select value={questionType} onChange={this.handleSetQuestionType} name="questionType" id="">
          {
            QUESTION_TYPES.map(type => <option key={type} value={type}>{type}</option>)
          }
        </select>
        {
          questionAnswers.map((answer, index) => (
            <div key={index} className="create-form__answer">
              {index}. <input onChange={this.handleSerAnswerText} type="text" data-index={index} value={answer} className="create-form__answer-input" />
            </div>
          ))
        }
        <button onClick={this.handleAddAnswer}>add</button>
      </div>
    )
  }
}