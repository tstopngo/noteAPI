import * as types from '../actionTypes/notes'

export function fetchNotes(){
  return async dispatch => {
    disatch({type:types.FETCH_NOTES})
  }
}
