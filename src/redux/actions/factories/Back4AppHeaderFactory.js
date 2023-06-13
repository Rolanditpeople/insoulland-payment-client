class Back4AppHeaderFactory {
  newHeader() {
    return {
      headers: {
        "X-Parse-Application-Id": process.env.REACT_APP_BACK4APP_API_ID,
        "X-Parse-REST-API-Key": process.env.REACT_APP_BACK4APP_API_KEY
      }
    };
  }
}

export default (() => {
  let factory = new Back4AppHeaderFactory();

  return {
    getInstance: () => factory
  };
})();
