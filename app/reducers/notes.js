const INITIAL_STATE = {
  data: [],
  status: null,
  error: null,
  createStatus: null,
  createError: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    default:
      return state;
  }
};
