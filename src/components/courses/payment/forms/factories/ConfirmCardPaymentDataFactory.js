class ConfirmCardPaymentDataFactory {
  newData(elements, signUpInformation, CardNumberElement) {
    return {
      receipt_email: signUpInformation.contactEmail,
      payment_method: this.newPaymentMethod(elements, signUpInformation, CardNumberElement)
    };
  }

  newPaymentMethod = (elements, signUpInformation, CardNumberElement) => {
    return {
      type: 'card',
      card: elements.getElement(CardNumberElement),
      billing_details: this.newBillingDetails(signUpInformation)
    };
  }

  newBillingDetails = (signUpInformation) => {
    return {
      name: signUpInformation.billingName,
      email: signUpInformation.contactEmail,
      phone: signUpInformation.contactPhone,
      address: this.newAddress(signUpInformation)
    };
  }

  newAddress = (signUpInformation) => {
    return {
      city: signUpInformation.billingCity,
      country: "HU",
      line1: signUpInformation.billingAddress,
      postal_code: signUpInformation.billingZip
    };
  }
}

export default (() => {
  let factory = new ConfirmCardPaymentDataFactory();

  return {
    getInstance: () => factory
  };
})();