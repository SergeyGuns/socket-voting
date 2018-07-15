import React from 'react'
import { TextField, MenuItem, Grid, Button } from "@material-ui/core";
import { QUESTION_TYPES } from '../../constants'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

 class CreateForm extends React.Component {
  constructor(props) {
    super()
    this.state = {...props}
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

const mapStateToProps = (props) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateForm)