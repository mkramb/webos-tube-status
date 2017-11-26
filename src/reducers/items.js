import { ITEMS_FETCH_COMPLETE } from '../actions'

export const items = (state = [], action) => {
  switch (action.type) {
    case ITEMS_FETCH_COMPLETE:
      return action.payload;

    default:
      return state
  }
}
