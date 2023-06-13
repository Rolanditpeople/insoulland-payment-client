const initialState = {
  opened: false
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "CHANGE_MODAL_STATE": {
      return {...action.payload};
    }
    default: {
      return state;
    }
  }
}
