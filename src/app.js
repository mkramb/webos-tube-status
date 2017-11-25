import React from 'react'
import ReactTV from 'react-tv'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StatusConnected } from './components'
import { appReducer, INITIAL_STATE } from './reducers'

const store = createStore(
  appReducer,
  INITIAL_STATE,
  applyMiddleware(thunk)
)

const ReactTVApp = () => (
  <Provider store={store}>
    <StatusConnected />
  </Provider>
)

ReactTV.render(
  <ReactTVApp />,
  document.querySelector('#app')
)
