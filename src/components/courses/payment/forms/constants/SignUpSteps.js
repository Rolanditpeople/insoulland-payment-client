import ContactInformationForm from './../ContactInformationForm';
import ParticipantInformationForm from './../ParticipantInformationForm';
import BillingInformationForm from './../BillingInformationForm';
import ChoosePaymentForm from './../ChoosePaymentForm';
import FormTitleConstants from './FormTitleConstants';

export default Object.freeze([
  {
    title: FormTitleConstants.contactFormTitle,
    form: ContactInformationForm
  },
  {
    title: FormTitleConstants.participantFormTitle,
    form: ParticipantInformationForm
  },
  {
    title: FormTitleConstants.billingInformationFormTitle,
    form: BillingInformationForm
  },
  {
    title: FormTitleConstants.paymentFormTitle,
    form: ChoosePaymentForm
  }
]);
