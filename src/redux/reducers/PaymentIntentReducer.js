const initialState = {
  fetching: false,
  fetched: false,
  response: {},
  error: false
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "PAYMENT_INTENT_PENDING": {
      return {...state, fetching: true};
    }
    case "PAYMENT_INTENT_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, response: action.payload};
    }
    case "PAYMENT_INTENT_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, response: {}};
    }
    default: {
      return state;
    }
  }
}
