import axios from 'axios';

export function createPaymentIntent(paymentDetails) {
  const api = process.env.REACT_APP_STRIPE_PAYMENT_INTENT_API
    + "/create-payment-intent"
    + process.env.REACT_APP_STRIPE_PAYMENT_INTENT_API_POSTFIX;

  return function(dispatch) {
    dispatch({type: "PAYMENT_INTENT_PENDING"});

    axios.post(api, paymentDetails)
      .then((response) => {
        dispatch({type: "PAYMENT_INTENT_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "PAYMENT_INTENT_REJECTED", payload: err});
      });
  }
}
