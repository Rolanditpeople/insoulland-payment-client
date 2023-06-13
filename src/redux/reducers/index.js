import { combineReducers } from "redux";
import chosenCourse from './ChooseCourseReducer';
import modalState from './ModalStateReducer';
import paymentIntent from './PaymentIntentReducer';
import signUpInformation from './SignUpInformationReducer';
import createContactInformation from './CreateContactInfoReducer';
import createRestApplicationInfo from './CreateRestApplicationInfo';
import createApplicationPayment from './CreateApplicationPaymentReducer';

export default combineReducers({
  chosenCourse,
  modalState,
  paymentIntent,
  signUpInformation,
  createContactInformation,
  createRestApplicationInfo,
  createApplicationPayment
});
