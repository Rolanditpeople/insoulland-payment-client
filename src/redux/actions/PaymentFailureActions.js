import axios from 'axios';
import Back4AppHeaderFactory from "./factories/Back4AppHeaderFactory";

export function createPaymentFailure(objectId, response) {
  const dispatcher_type = "CREATE_PAYMENT_FAILURE";
  const back4AppHeaderFactory = Back4AppHeaderFactory.getInstance();

  return function(dispatch) {
    dispatch({type: dispatcher_type + "_PENDING"});

    axios.post(
      "https://parseapi.back4app.com/classes/PaymentFailure",
      {
        applicationId: objectId,
        response: response
      },
      back4AppHeaderFactory.newHeader()
    ).then((response) => {
      dispatch({type: dispatcher_type + "_FULFILLED", payload: response.data});
    }).catch((err) => {
      dispatch({type: dispatcher_type + "_REJECTED", payload: err});
    });
  }
}