const initialState = {
  contactInfoFilled: false,
  participantInfoFilled: false,
  billingInfoFilled: false,
  contactEmail: undefined,
  contactPhoneNumber: undefined,
  participantName: undefined,
  participantBirthdate: undefined,
  billingName: undefined,
  billingZip: undefined,
  billingCity: undefined,
  billingAddress: undefined
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "SIGN_UP_ADD_CONTACT_INFO": {
      return {...state, ...action.payload, contactInfoFilled: true};
    }
    case "SIGN_UP_ADD_PARTICIPANT_INFO": {
      return {...state, ...action.payload, participantInfoFilled: true};
    }
    case "SIGN_UP_ADD_BILLING_INFO": {
      return {...state, ...action.payload, billingInfoFilled: true};
    }
    default: {
      return state;
    }
  }
}