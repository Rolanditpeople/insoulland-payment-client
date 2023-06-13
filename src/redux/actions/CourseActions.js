export function chooseCourse(course) {
  return function(dispatch) {
    dispatch({type: "CHOOSE_COURSE_FULFILLED", payload: course});
  }
}
