const initialState = {
  fetching: false,
  fetched: false,
  response: {},
  error: false
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "CREATE_REST_APPLICATION_INFO_PENDING": {
      return {...state, fetching: true};
    }
    case "CREATE_REST_APPLICATION_INFO_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, response: action.payload};
    }
    case "CREATE_REST_APPLICATION_INFO_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, response: {}};
    }
    case "DROP_CREATE_RESPONSES": {
      return {...initialState};
    }
    default: {
      return state;
    }
  }
}
