import { dispatch } from 'redux'
import { 
  SET_QUESTION_TYPE,
  SET_QUESTION_TEXT,
  ADD_ANSWER,
  SET_ANSWER_TEXT
 } from '../constants'

export const handleSetQuestionType = ev => (
  dispatch({
    type: SET_QUESTION_TYPE,
    payload: ev.target.value
  })
)


export const handleSetQuestionText = ev => (
  dispatch({
    type: SET_QUESTION_TEXT,
    payload: ev.target.value
  })
 
)

export const handleAddAnswer = () => {
  dispatch({
    type: ADD_ANSWER
  })
}

export const handleSetAnswerText = ev => (
  dispatch({
    type: SET_ANSWER_TEXT,
    pyload: {
      id: ev.target.id,
      value: ev.target.value
    }
  })
)



formToJSON = () => {
  console.dir({
    ...this.state,
    date: Date.now()
  })
}

handleSaveForm = () => {
  const json = {
    ...this.state,
    date: Date.now()
  }
  console.log(json)
}
