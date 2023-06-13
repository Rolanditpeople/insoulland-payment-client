class ReferenceCreatorService {
  generateReference = (sourceString) => {
    sourceString = sourceString.toLowerCase();
    sourceString = this.replaceSpecialLetters(sourceString);
    sourceString = this.replaceSpecialCharacters(sourceString);

    return sourceString;
  }

  replaceSpecialLetters = (sourceString) => {
    sourceString = sourceString.replaceAll("á", "a");
    sourceString = sourceString.replaceAll("é", "e");
    sourceString = sourceString.replaceAll("í", "i");
    sourceString = sourceString.replaceAll("ó", "o");
    sourceString = sourceString.replaceAll("ö", "o");
    sourceString = sourceString.replaceAll("ő", "o");
    sourceString = sourceString.replaceAll("ú", "u");
    sourceString = sourceString.replaceAll("ü", "u");
    sourceString = sourceString.replaceAll("ű", "u");

    return sourceString;
  }

  replaceSpecialCharacters = (sourceString) => {
    sourceString = sourceString.replaceAll(" ", "-");
    sourceString = sourceString.replaceAll(".", "");
    
    return sourceString;
  }
}

export default (() => {
  let service = new ReferenceCreatorService();

  return {
    getInstance: () => service
  };
})();