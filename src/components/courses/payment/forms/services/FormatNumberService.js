// TODO: clean this up
class FormatNumberService {
  addSpacesToNumber = (number) => {
    const stringNumber = number + "";

    const spacesNeeded = Math.floor(stringNumber.length / 3);
    const firstNumbers = stringNumber.length % 3;

    let finalNumber = "";

    if (firstNumbers > 0) {
      finalNumber += stringNumber.substring(0, firstNumbers) + " ";
    }

    for (let i = 0; i < spacesNeeded; i++) {
      finalNumber += stringNumber.substring((i * 3) + firstNumbers, (i * 3) + firstNumbers + 3) + " ";
    }

    finalNumber = finalNumber.substring(0, finalNumber.length - 1);

    return finalNumber;
  }

  calculatePercentage = (originalNumber, percentage) => {
    return parseInt(originalNumber) / 100 * percentage;
  }
}

export default (() => {
  let service = new FormatNumberService();

  return {
    getInstance: () => service
  };
})();