const initialState = {};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "CHOOSE_COURSE_FULFILLED": {
      return {...action.payload};
    }
    default: {
      return state;
    }
  }
}
