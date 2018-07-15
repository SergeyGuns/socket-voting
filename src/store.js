import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { QUESTION_TYPES } from './constants'
// import counter from './counter'

const rootReducer = combineReducers({
  // counter
})


export const history = createHistory()

const initialState = {
  currQuestionIndex: '0',
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
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

export default store