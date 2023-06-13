class EmailValidatorService {
  isEmailStripeValid = (contactEmail) => {
    if (this.hasAt(contactEmail)
        && this.isValidPreAt(contactEmail)
        && this.isValidDomain(contactEmail)) {

      return true;
    }

    return false;
  }

  isValidPreAt = (contactEmail) => {
    if (this.hasTextBeforeAt(contactEmail)) {
      return true;
    }

    return false;
  }

  isValidDomain = (contactEmail) => {
    const domain = contactEmail.split("@")[1];

    if (this.hasDotInDomain(domain) && this.hasTextAroundDomainDot(domain)) {
      return true;
    }

    return false;
  }

  hasAt = (contactEmail) => {
    if (contactEmail.indexOf("@") === -1) {
      return false;
    }

    return true;
  }

  hasTextBeforeAt = (contactEmail) => {
    const preAt = contactEmail.split("@")[0];

    if (preAt.length === 0) {
      return false;
    }

    return true;
  }

  hasDotInDomain = (postAt) => {
    if (postAt.indexOf(".") === -1) {
      return false;
    }

    return true;
  }

  hasTextAroundDomainDot = (postAt) => {
    const postAtPreDot = postAt.split(".")[0];
    const postAtPostDot = postAt.split(".")[1];

    if (postAtPreDot.length === 0) {
      return false;

    } else if (postAtPostDot.length === 0) {
      return false;
    }

    return true;
  }
};

export default (() => {
  let service = new EmailValidatorService();

  return {
    getInstance: () => service
  };
})();
