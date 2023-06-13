import React from 'react';
import { connect } from 'react-redux';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';
// import Alert from './../../../common/alert/Alert';
import { createPaymentIntent } from './../../../../redux/actions/StripePaymentActions';
import { createPaymentFailure } from './../../../../redux/actions/PaymentFailureActions';
import FormatNumberService from './services/FormatNumberService';
import ConfirmCardPaymentDataFactory from './factories/ConfirmCardPaymentDataFactory';
import CardPaymentErrorMessages from './constants/CardPaymentErrorMessages';
import CardPaymentErrorCodes from './constants/CardPaymentErrorCodes';
import FormSuccessMessages from './constants/FormSuccessMessages';
import './css/payment-form.css';

class PaymentForm extends React.Component {
  constructor() {
    super();
    this.confirmCardPaymentDataFactory = ConfirmCardPaymentDataFactory.getInstance();
    this.formatNumberService = FormatNumberService.getInstance();
    this.state = {
      error: undefined,
      loading: false,
      payClickCounter: 0,
      paymentSuccess: false,
      paymentSuccessWithWarning: false,
      chosenDonation: 10
    };
    this.previousDonation = 0;
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {
    if (this.state.error && this.state.loading) {
      this.setState({
        loading: false
      });
    }

    if (this.previousDonation !== this.state.chosenDonation) {
      const paymentOptions = {
        currency: "HUF",
        amount: this.state.chosenDonation * 100
      };
  
      this.props._createPaymentIntent(paymentOptions);
      this.previousDonation = this.state.chosenDonation;
    }
    
  }

  handleSubmit = async () => {
    const {
      stripe,
      elements,
      signUpInformation
    } = this.props;

    this.setState({
      loading: true,
      error: undefined,
      payClickCounter: this.state.payClickCounter + 1
    });

    stripe.confirmCardPayment(
      this.props.paymentIntent.response.secret,
      this.confirmCardPaymentDataFactory.newData(elements, signUpInformation, CardNumberElement)
    ).then(this.handleStripeResult);
  };

  handleStripeResult = (result) => {
    if (result.paymentIntent !== undefined) {
      if (result.paymentIntent.status === "succeeded") {
        this.setState({paymentSuccess: true});

      } else {
        this.props._createPaymentFailure(
          this.props.createContactInformation.response.objectId,
          JSON.stringify(result)
        );
        this.setState({paymentSuccessWithWarning: true});

      }
    } else {
      const { error } = result;
      this.handleError(error);
    }
  }

  handleError = (error) => {
    if (error !== undefined) {
      if (error.code === CardPaymentErrorCodes.CARD_DECLINED) {
        if (CardPaymentErrorMessages[error.decline_code] !== undefined) {
          this.setState({error: CardPaymentErrorMessages[error.decline_code]});

        } else {
          this.setState({error: error.message});

        }
      } else if (CardPaymentErrorMessages[error.code] !== undefined) {
        this.setState({error: CardPaymentErrorMessages[error.code]});

      } else {
        this.setState({error: error.message});

      }
    }
  };

  handlePriceChange = (e) => {
    this.setState({ chosenDonation: parseInt(e.target.value) });
  }

  render() {
    const { stripe } = this.props;
    const discountedPrice = this.formatNumberService
      .calculatePercentage(this.props.chosenCourse.amount, 100);
    
    if (this.state.paymentSuccess) {
      return (
        <div className="alert alert-success mb-0">
          { FormSuccessMessages.APPLICATION_SUCCESSFUL }
        </div>
      );

    } else if (this.state.paymentSuccessWithWarning) {
      return (
        <div className="alert alert-success mb-0">
          { FormSuccessMessages.APPLICATION_SUCCESSFUL_WITH_WARNING }
        </div>
      );
    }

    return (
      <div className='container'>
        <div>
          {this.state.error}
        </div>

        <div>
        <div className="row gx-5 align-items-center">
            <div className="col-lg-12 order-lg-1">
                <div className="pt-5 ">
                    <h2 className="display-4">Personal and Payment Information</h2>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-12 mt-3">
                <input id="gomb1" type="button" className="btn btn-dark btn-lg mt-3 me-3" name="plan" data-value="price_1N96j7BDk24l55XefXjIuFqh" style={{color: this.state.chosenDonation === 5 ? "#eeff00" : "#ffffff"}} value="5 &euro;" onClick={() => this.setState({chosenDonation: 5})} />
            
                <input id="gomb2" type="button" className="btn btn-dark btn-lg mt-3 me-3" name="plan" data-value="price_1N96jmBDk24l55Xe4BaIqSvS" style={{color: this.state.chosenDonation === 10 ? "#eeff00" : "#ffffff"}} value="10 &euro;" onClick={() => this.setState({chosenDonation: 10})} /> 
            
                <input id="gomb3" type="button" className="btn btn-dark btn-lg mt-3 me-3" name="plan" data-value="price_1N96kXBDk24l55XeuBc9msLg" style={{color: this.state.chosenDonation === 20 ? "#eeff00" : "#ffffff"}} value="20 &euro;"  onClick={() => this.setState({chosenDonation: 20})} /> <br />
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-12 p-3">
                <input type="checkbox" id="recurring" style={{width: "30px", height: "30px", verticalAlign: "bottom"}} />
                <div style={{fontSize:"22px", marginLeft: "5px", display: "inline"}}>
                    Recurring payment (Your card will be charged monthly)
                </div>
            </div>
        </div>
          <div className="row">
              <div className="col-md-6">
                  <input className="form-control my-3" type="text" id="name" placeholder="Full name" />
              </div>
              <div className="col-md-6 pe-0">
                  <input className="form-control my-3" type="text" id="email" placeholder="E-mail" />
              </div>
          </div>
          <div className="row">
              <div className="col-md-6 ">
                  <input className="form-control my-3" type="text" id="country" placeholder="Country" />
              </div>
              <div className="col-md-6 pe-0">
                  <input className="form-control my-3" type="text" id="city" placeholder="City" />
                  
              </div>
              
          </div>
          <div className="row">
              <div className="col-md-6">
                  <input className="form-control my-3" type="text" id="zip" placeholder="Zip code" />
              </div>
              <div className="col-md-6 pe-0">
                  <input className="form-control my-3" type="text" id="address" placeholder="Address line 1" />
              </div>
          </div>

        </div>


        <form>
  
          <div className="form-group">
            <span className="form-label">Kártyaszám:</span>
            <CardNumberElement />
          </div>

          <div className="form-group">
            <span className="form-label">Lejárati dátum (hó/év):</span>
            <CardExpiryElement />
          </div>

          <div className="form-group">
            <span className="form-label">3 jegyű kód a kártya hátoldalán:</span>
            <CardCvcElement />
          </div>
        </form>

        <div className="d-none d-sm-block pb-3">
          {/*<button className="btn btn-lg btn-success float-right" disabled={!stripe || this.state.loading} onClick={this.handleSubmit}>
            Fizetés ({this.formatNumberService.addSpacesToNumber(this.state.chosenDonation)} Ft)
          </button>*/}

          <button className="btn btn-dark btn-lg mb-3" style={{color: "#eeff00"}}>Start payment</button>
          
        </div>
      </div>
    );
  }
}

const selector = (store) => {
  return {
    createContactInformation: store.createContactInformation,
    signUpInformation: store.signUpInformation,
    paymentIntent: store.paymentIntent
  };
};

const dispatcher = (dispatch) => ({
  _createPaymentIntent: (...args) => dispatch(createPaymentIntent(...args)),
  _createPaymentFailure: (...args) => dispatch(createPaymentFailure(...args))
});

export default connect(selector, dispatcher)(PaymentForm);
