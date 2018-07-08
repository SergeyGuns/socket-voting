import React from 'react'
import { TextField, MenuItem, Grid, Button } from "@material-ui/core";


export default class CreateForm extends React.Component {
  constructor() {
    super()
    this.state = this.props.question
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
    this.setState({
      handleSetAnswers: newAnswers
    })
  }

  handleSetAnswerText = ev => {
    console.log(ev.target)
    this.setState({
      questionAnswers: this.state.questionAnswers.map((answer, index) => {
        if ('q-a-' + index === ev.target.id) {
          return ev.target.value
        }
        return answer
      })
    })
  }

  formToJSON = ()=> {
    console.dir({
      ...this.state,
      date: Date.now()})
  }

  handleSaveForm = () => {
    const json = {
      ...this.state,
      date: Date.now()
    }
    console.log(json)
  }



  render() {
    const { questionType, questionAnswers, questionText } = this.state
    return (
      <Grid className='create-form' container spacing={24}>
        <Grid item xs={12}>
          <TextField
            id='questionText'
            label='Текст вопроса'
            value={questionText}
            onChange={this.handleSetQuestionText}
            margin='normal'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='select-currency'
            select
            label='Тип вопроса'
            value={questionType}
            onChange={this.handleSetQuestionType}
            helperText='Please select your currency'
            margin='normal'
          >
            {QUESTION_TYPES.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {questionAnswers.map((text, index) => (
          <Grid key={index} item xs={12}>
            <TextField
              id={`q-a-${index}`}
              key={index}
              data-index={index}
              label={`Текст ответа ${index + 1}.`}
              value={text}
              onChange={this.handleSetAnswerText}
              margin='normal'
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={this.handleAddAnswer} variant="contained" color="primary">
            Добавить ответ
          </Button>
          <Button onClick={this.formToJSON} variant="contained" color="secondary" >
            Сохранить
          </Button>
        </Grid>
      </Grid>
    )
  }
}