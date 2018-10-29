const createCheckDigit = nembershipId => {
  let array = nembershipId.split("");
  let result = array.reduce((prevVal, e) => {
    return prevVal + parseFloat(e);
  }, 0);
  final = result.toString().split("");
  if (final.length < 1) {
    return;
  }
  return final.reduce((prev, e) => {
    return prev + parseFloat(e);
  }, 0);
};
