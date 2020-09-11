import * as types from '../actionTypes/notes'

export function fetchNotes(){
  return async dispatch => {
    disatch({type:types.FETCH_NOTES})
try{
    let response = await fetch('http://localhost:5000/notes');
    if (response.status !==200){
      throw new Error('FETCH_ERROR');
    }
    response = await repsonse.json();
    dispatch({type: types.FETCH_NOTES_SUCCESS, data: response});
  }  catch (error) {
        dispatch({type: types.FETCH_NOTES_FAILURE, error});
      }
    };
  }
