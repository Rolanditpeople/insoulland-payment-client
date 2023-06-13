export function openModal() {
  return function(dispatch) {
    dispatch({type: "CHANGE_MODAL_STATE", payload: {opened: true}});
  };
}

export function closeModal() {
  return function(dispatch) {
    dispatch({type: "CHANGE_MODAL_STATE", payload: {opened: false}});
  };
}
