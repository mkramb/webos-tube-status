import { combineReducers } from 'redux'
import { items } from './items'

export const appReducer = combineReducers({
  items
})

export const INITIAL_STATE = {
  items: []
}