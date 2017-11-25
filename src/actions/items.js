import { getStatusItems } from '../services'

export const ITEMS_FETCH = 'ITEMS_FETCH';
export const ITEMS_FETCH_COMPLETE = 'ITEMS_FETCH_COMPLETE';

export const itemsFetchComplete = (data) => ({
  type: ITEMS_FETCH_COMPLETE,
  payload: data
})

export const itemsFetch = () => dispatch => {
  getStatusItems()
    .then(json => {
      dispatch(itemsFetchComplete(json))
    })
}