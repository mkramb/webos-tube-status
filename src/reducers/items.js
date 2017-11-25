import { ITEMS_FETCH_COMPLETE } from '../actions'

export const items = (state = [], action) => {
  switch (action.type) {
    case ITEMS_FETCH_COMPLETE:
      return action.payload.map((item) => ({
        name: item.name,
        status: item.lineStatuses[0].statusSeverityDescription        
      }))

    default:
      return state
  }
}
