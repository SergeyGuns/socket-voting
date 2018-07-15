import React from 'react'
import { Grid, Button } from "@material-ui/core";
export default class QuestionList extends React.Component {

  render() {
    const { questionList, handleSetCurrQuestion, currQuestionIndex } = this.props;
    return (
      <Grid className='create-form' container spacing={24}>
        {questionList.map((question, index) => (
          <Grid

            xs={12}>
            {
              +currQuestionIndex === index ?
                <Button onClick={handleSetCurrQuestion} data-index={index} variant="outlined" disabled >
                  {question.questionText}
                </Button>
                :
                <Button onClick={handleSetCurrQuestion} data-index={index} variant="outlined" color="secondary">
                  {question.questionText}
                </Button>

            }
          </Grid>
        ))}
      </Grid>
    )
  }

}