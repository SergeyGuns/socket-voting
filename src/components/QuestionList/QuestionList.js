import React from 'react'
import { Grid } from "@material-ui/core";
export default const QuestionList = props =>{
  
  render() {
    const { questionList } = props;
    return (
      <Grid className='create-form' container spacing={24}>
        {questionList.map(question => question.questionText)}
      </Grid>
    )
  }

}