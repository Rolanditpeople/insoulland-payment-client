import React from 'react';
import "./styles.css";
import PaymentFormContainer from '../courses/payment/forms/PaymentFormContainer';
  /*{<React.Fragment>
    <PaymentFormContainer />
  </React.Fragment>}*/

export default () => (
  <>
    <header className="masthead text-center text-white">
        <div className="masthead-content">
            <div className="container px-5">
                <h1 className="masthead-heading mb-0">Insoulland donation</h1>
            </div>
        </div>
        
    </header>
    <section id="scroll">
        <div className="container px-5">

            <div className="row gx-5 align-items-center">
                <div className="col-lg-12 order-lg-1">

                        <PaymentFormContainer />
                        
                        {/*<div className="row">
                            <div className="col-md-4">
                                <input className="form-control my-3" type="text" id="expiration_year" placeholder="Expiration year" />
                            </div>
                            <div className="col-md-4">
                                <input className="form-control my-3" type="text" id="expiration_month" placeholder="Expiration month" />
                            </div>
                            <div className="col-md-4 pe-0">
                                <input className="form-control my-3" type="password" id="cvc" placeholder="cvc" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pe-0">
                                <input className="form-control my-3" type="text" id="cardnumber" placeholder="Card number" />
                            </div>
                        </div>*/}
                </div>
            </div>
        </div>
    </section>
    <footer className="py-5 bg-black">
        <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Insoulland</p></div>
    </footer>
  </>
);
