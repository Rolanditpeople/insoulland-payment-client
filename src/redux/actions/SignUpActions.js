import axios from 'axios';
import Back4AppHeaderFactory from './factories/Back4AppHeaderFactory';

export function addContactInfo(info) {
  return function(dispatch) {
    dispatch({type: "SIGN_UP_ADD_CONTACT_INFO", payload: info});
  };
}

export function addParticipantInfo(info) {
  return function(dispatch) {
    dispatch({type: "SIGN_UP_ADD_PARTICIPANT_INFO", payload: info});
  };
}

export function addBillingInfo(info) {
  return function(dispatch) {
    dispatch({type: "SIGN_UP_ADD_BILLING_INFO", payload: info});
  };
}

// TODO: all reducers and action types go to constants
export function createContactInfo(info) {
  const dispatcher_type = "CREATE_CONTACT_INFO";
  const back4AppHeaderFactory = Back4AppHeaderFactory.getInstance();

  return function(dispatch) {
    dispatch({type: dispatcher_type + "_PENDING"});

    axios.post(
      "https://parseapi.back4app.com/classes/Application",
      info,
      back4AppHeaderFactory.newHeader()
    ).then((response) => {
      dispatch({type: dispatcher_type + "_FULFILLED", payload: response.data});
    }).catch((err) => {
      dispatch({type: dispatcher_type + "_REJECTED", payload: err});
    });
  }
}

// TODO: find a better name
export function createRestApplicationInfo(objectId, info) {
  const dispatcher_type = "CREATE_REST_APPLICATION_INFO";
  const back4AppHeaderFactory = Back4AppHeaderFactory.getInstance();

  return function(dispatch) {
    dispatch({type: dispatcher_type + "_PENDING"});

    axios.put(
      "https://parseapi.back4app.com/classes/Application/" + objectId,
      info,
      back4AppHeaderFactory.newHeader()
    ).then((response) => {
      dispatch({type: dispatcher_type + "_FULFILLED", payload: response.data});
    }).catch((err) => {
      dispatch({type: dispatcher_type + "_REJECTED", payload: err});
    });
  }
}

export function createPaymentMethod(objectId, info) {
  const dispatcher_type = "CREATE_APPLICATION_PAYMENT_INFO";
  const back4AppHeaderFactory = Back4AppHeaderFactory.getInstance();

  return function(dispatch) {
    dispatch({type: dispatcher_type + "_PENDING"});

    axios.put(
      "https://parseapi.back4app.com/classes/Application/" + objectId,
      info,
      back4AppHeaderFactory.newHeader()
    ).then((response) => {
      dispatch({type: dispatcher_type + "_FULFILLED", payload: response.data});
    }).catch((err) => {
      dispatch({type: dispatcher_type + "_REJECTED", payload: err});
    });
  }
}

export function dropCreateResponses() {
  return function(dispatch) {
    dispatch({type: "DROP_CREATE_RESPONSES"});
  }
}
