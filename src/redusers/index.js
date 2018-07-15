import {
  SET_QUESTION_TYPE,
  SET_QUESTION_TEXT,
  ADD_ANSWER,
  SET_ANSWER_TEXT,
  SET_CURR_QUESTION
} from '../constants'
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_QUESTION_TYPE:
      return {
        ...state,
        questionType: action.payload
      }

    case SET_QUESTION_TEXT:
      return {
        ...state,
        questionText: action.payload
      }

    case ADD_ANSWER:
      const newState = JSON.parse(JSON.stringify(state))
      newState.questionList[state.currQuestionIndex].questionAnswers.push('')
      return newState

    case SET_ANSWER_TEXT:
      const newState = JSON.parse(JSON.stringify(state))
      const answers = newState.questionList[state.currQuestionIndex].questionAnswers
      answers = answers.map((answer, index) => {
        if ('q-a-' + index === action.payload.id) {
          return action.payload.value
        }
        return answer
      })
      return newState

    default:
      return state
  }
}